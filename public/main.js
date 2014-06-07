    window.onload = init;

var scene;
var camera;
var renderer;

var t3player;
var bgMesh;

// Box2D
var b2Vec2 = Box2D.Common.Math.b2Vec2;
var b2World = Box2D.Dynamics.b2World;
var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
var b2BodyDef = Box2D.Dynamics.b2BodyDef;
var b2Body = Box2D.Dynamics.b2Body;
var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;


var world;
var player_fixture;

var jumped = null;

// Timing
// We need these to fix the framerate
var fps = 60;
var interval = 1000/fps;
var lastTime;

var levelWidth = 100;

var Color = {
    Yellow: "Yellow",
    Green: "Green",
    Red: "Red",
};


var keyboard;
var updateFcts	= [];
var seed = new Date()+[];

var level = 0;
var color;
var lastElevation = 0;

var leaves = [];

var gotYellow = false;
var gotGreen = false;
var gotRed = false;

function init()
{
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.x = 90
	camera.position.y = 0
	camera.position.z = 5
	camera.lookAt(new THREE.Vector3(90,0,0))


    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth * 0.7, window.innerHeight * 0.7);
    document.body.appendChild( renderer.domElement );

    createPlayer();
	var b2player;

    createBackground();



	world = new b2World(
        new b2Vec2(0, -50),    //gravity
        true                  //allow sleep
	);

	var fixDef = new b2FixtureDef;
	fixDef.density = 1.0;
	fixDef.friction = 0.5;
	fixDef.restitution = 0.0;

    var bodyDef = new b2BodyDef;

	// b2player
	bodyDef.type = b2Body.b2_dynamicBody;
	fixDef.shape = new b2PolygonShape;
	fixDef.shape.SetAsBox(0.5,0.5);

	bodyDef.position.x = t3player.position.x;
	bodyDef.position.y = t3player.position.y;

	b2player = world.CreateBody(bodyDef);
	player_fixture = b2player.CreateFixture(fixDef);

	// End of Box2D

	// Keyboard code
	keyboard	= new THREEx.KeyboardState(renderer.domElement);
	renderer.domElement.setAttribute("tabIndex", "0");
	renderer.domElement.focus();

	updateFcts.push(function(delta){
		var vector = new b2Vec2(0, 0);

		if( keyboard.pressed('left') ){
			vector = new b2Vec2(-1, 0);
		}else if( keyboard.pressed('right') ){
			vector = new b2Vec2(1, 0);
		}else if( keyboard.pressed('e')){
            pickUpItems();
        }else if( keyboard.pressed('r')){
            if (gotRed)
            {
                gotRed = false;
                addLevel(Color.Red);
            }
        }else if( keyboard.pressed('g')){
            if (gotGreen)
            {
                gotGreen = false;
                addLevel(Color.Green);
            }
        }else if( keyboard.pressed('y')){
            if (gotYellow)
            {
                gotYellow = false;
                addLevel(Color.Yellow);
            }
        }

		var foo = player_fixture.GetBody().GetWorldCenter();
		//b2player.ApplyImpulse(vector,foo);
        player_fixture.GetBody().ApplyImpulse(vector,foo);

//		if( keyboard.pressed('down') ){
//			t3player.rotation.x += 1 * delta;
//		}else if( keyboard.pressed('up') ){
//			t3player.rotation.x -= 1 * delta;
//		}


	});

	// only on keydown
	keyboard.domElement.addEventListener('keydown', function(event){
        console.debug(event)
        if(event.keyCode == 32) {
            var ct = Date.now()
            var jdelta = ct - jumped
            console.debug("jump! " + jumped)
            if(jumped == null || jdelta > 600) {
                console.debug("just jumped: " + jdelta)
                jumped = ct
                var foo = player_fixture.GetBody().GetWorldCenter();
                player_fixture.GetBody().ApplyImpulse(new b2Vec2(0, 15),foo);
            }
        }
//		if( keyboard.eventMatches(event, 'w') )
//
//		if( keyboard.eventMatches(event, 's') )	t3player.scale.y	*= 2
	});
	// only on keyup
	keyboard.domElement.addEventListener('keyup', function(event){
		//if( keyboard.eventMatches(event, 'a') )	t3player.scale.x	*= 2
		//if( keyboard.eventMatches(event, 'd') )	t3player.scale.x	/= 2
	});
	// End of keyboard code

    addLevel();

    lastTime = Date.now();
    render();
}

function createPlayer() {
    var playerTexture = THREE.ImageUtils.loadTexture('../assets/Character_for_testing.png');
    var playerMaterial = new THREE.MeshBasicMaterial( { map: playerTexture, transparent: true} );
    var playerGeometry = new THREE.PlaneGeometry(1,4.5/4,1);
    t3player = new THREE.Mesh( playerGeometry, playerMaterial );
    t3player.position.x = 90;
    t3player.position.y = 1;
    scene.add( t3player );
}

function createBackground() {
    var bgTexture = THREE.ImageUtils.loadTexture('../assets/reducedbackground.png');
    var bgMaterial = new THREE.MeshBasicMaterial({map: bgTexture});
    var bgGeometry = new THREE.PlaneGeometry(200, 100);
    bgMesh = new THREE.Mesh(bgGeometry, bgMaterial);
    bgMesh.position.z = -40;
    scene.add(bgMesh);
}

function addLevel(color) {
    var terrain = getTerrain(level, lastElevation, color);

    lastElevation = terrain[terrain.length-1][2].y;

    populateTerrain(terrain);

    var newLeaves;
    if (level === 0)
    {
        newLeaves = [{
            color: Color.Green,
            leafPos: { x: 95, y: 1 },
        }];
    }
    else
    {
        newLeaves = getLeafList(terrain);
        console.log(newLeaves);
    }

    addLeaves(newLeaves);


    ++level;
}

function addLeaves(newLeaves) {
    var prefixes = {
        Green: 'green',
        Red: 'special',
        Yellow: 'dead',
    };

    for (var i = 0; i < newLeaves.length; ++i)
    {
        var leaf = newLeaves[i];


        var leafTexture = THREE.ImageUtils.loadTexture('../assets/Leaf Assets/' + prefixes[leaf.color] + '_3.png');
        var leafMaterial = new THREE.MeshBasicMaterial( { map: leafTexture, transparent: true} );
        var leafGeometry = new THREE.PlaneGeometry(1,1,1);
        t3leaf = new THREE.Mesh( leafGeometry, leafMaterial );
        t3leaf.position.x = leaf.leafPos.x;
        t3leaf.position.y = leaf.leafPos.y;

        leaf.t3 = t3leaf;
        scene.add( t3leaf );

        leaves.push(leaf);
    }
}

function pickUpItems() {
    var leaf;
    for (var i = 0; i < leaves.length; ++i)
    {
        leaf = leaves[i];
        if (Math.abs(leaf.leafPos.x - t3player.position.x) < 1 &&
            Math.abs(leaf.leafPos.y - t3player.position.y) < 1)
            break;
    }

    if(i >= leaves.length) return;

    switch(leaf.color)
    {
        case Color.Red: gotRed = true; break;
        case Color.Green: gotGreen = true; break;
        case Color.Yellow: gotYellow = true; break;
    }

    scene.remove(leaf.t3);
    leaves.splice(i,1);
}

var check = true;

function populateTerrain(terrain) {

    for (var i = 0; i < terrain.length; ++i) {

            var tile = terrain[i]
            var geometry = new THREE.BoxGeometry(1,1,1)


            geometry.vertices[0].x = tile[2].x
            geometry.vertices[0].y = tile[2].y
            geometry.vertices[1].x = tile[2].x
            geometry.vertices[1].y = tile[2].y
            geometry.vertices[2].x = tile[1].x
            geometry.vertices[2].y = tile[1].y
            geometry.vertices[3].x = tile[1].x
            geometry.vertices[3].y = tile[1].y
            geometry.vertices[4].x = tile[3].x
            geometry.vertices[4].y = tile[3].y
            geometry.vertices[5].x = tile[3].x
            geometry.vertices[5].y = tile[3].y
            geometry.vertices[6].x = tile[0].x
            geometry.vertices[6].y = tile[0].y
            geometry.vertices[7].x = tile[0].x
            geometry.vertices[7].y = tile[0].y

            var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            var mesh = new THREE.Mesh( geometry, material );

            scene.add( mesh );

        var bodyDef = new b2BodyDef;
        var fixDef = new b2FixtureDef;
        bodyDef.type = b2Body.b2_staticBody;
        fixDef.shape = new b2PolygonShape;

        var vertices = [];
        for(var v = 0; v < tile.length; v++) {

            var vert = new b2Vec2()

            vert.Set(tile[v].x, tile[v].y);

            vertices.push(vert);
        }

        fixDef.shape.SetAsArray(vertices, vertices.length);
        //fixDef.shape.m_radius = 1;

        world.CreateBody(bodyDef).CreateFixture(fixDef);

    }

}

function render() {
    requestAnimationFrame(render);

	// Physics update
	world.Step(
	1 / 60,   //frame-rate
	10,       //velocity iterations
	10       //position iterations
	);
	world.ClearForces();
    var body = player_fixture.GetBody().GetDefinition();

	if(check) {

		check = false;
	}
	t3player.position.x = body.position.x;
	t3player.position.y = body.position.y;
    camera.position.x = t3player.position.x;
	camera.position.y = t3player.position.y + 1;
    bgMesh.position.x = camera.position.x;
    bgMesh.position.y = camera.position.y;

	// End of physics update

    currentTime = Date.now();
    var dTime = currentTime - lastTime;

    if (dTime > interval)
    {
        // The modulo is to take care of the case that we skipped a frame
        lastTime = currentTime - (dTime % interval);

        var steps = Math.floor(dTime / interval);

        dTime = steps * interval / 1000; // Now dTime is in seconds

        renderer.render(scene, camera);

		updateFcts.forEach(function(updateFn){
			updateFn(dTime);
		});
    }

}

function getTerrain(nLevel, startHeight, color)
{
    if (!nLevel)
    {
        return [
            [
                { x: 0, y: -100 },
                { x: levelWidth, y: -100 },
                { x: levelWidth, y: startHeight },
                { x: 0, y: startHeight },
            ]
        ];
    }

    var xLeft = nLevel*levelWidth;
    var xRight = (nLevel+1) * levelWidth;

    var rng = { random: new Math.seedrandom(seed + nLevel) };
    var simplex = new SimplexNoise(rng);

    var segments = 50;

    var samples = [xLeft, xRight];

    var i;
    for (i = 0; i < segments-1; ++i)
    {
        samples.push(rng.random() * levelWidth + xLeft);
    }

    samples.sort(function(a,b){return (a<b)?-1:(a>b)?1:0;});

    var relaxedSamples = [xLeft];

    for (i = 1; i < segments; ++i)
    {
        relaxedSamples.push((samples[i-1] + samples[i] + samples[i+1])/3);
    }

    relaxedSamples.push(xRight);

    console.log(relaxedSamples);

    var heightMap = [];

    var levelType = {
        Red: {
            amplitudes: [20, 5, 2.5],
            frequency: [5, 7, 13],
        },
        Green: {
            amplitudes: [2, 1, 0.5],
            frequency: [5, 7, 13],
        },
        Yellow: {
            amplitudes: [10, 4, 2],
            frequency: [5, 7, 13],
        },
    };

    var amplitudes = levelType[color].amplitudes;
    var frequency = levelType[color].frequency;

    var phase = rng.random() * 1000;
    for (i = 0; i <= segments; ++i)
    {
        var x = relaxedSamples[i];
        var t = (x - xLeft)/levelWidth;
        var height = simplex.noise(0, x) * Math.min(1,amplitudes[amplitudes.length-1]);
        for (var j = 0; j < amplitudes.length; ++j)
            height += Math.sin(frequency[j]*x / levelWidth + (j+1)*phase)*amplitudes[j];

        heightMap.push(height);
    }

    for (i = segments; i >= 0; --i)
        heightMap[i] += -heightMap[0] + startHeight;

    var polygons = [];
    for (i = 0; i < segments; ++i)
    {
        polygons.push([
            { x: relaxedSamples[i], y: -100},
            { x: relaxedSamples[i+1], y: -100},
            { x: relaxedSamples[i+1], y: heightMap[i+1]},
            { x: relaxedSamples[i], y: heightMap[i]},
        ]);
    }

    console.log(polygons);

    return polygons;
}

function getLeafList(terrainArray)
{
    var len = terrainArray.length;
    randList = [Math.floor((Math.random()*len/3-1) + 1),
    Math.floor((Math.random()*len/3-1) + len/3),
    Math.floor((Math.random()*len/3-1) + 2*len/3)];
    leafList = [Color.Red,Color.Green, Color.Yellow];
    outLeafList = [];
    while(randList.length !== 0)
    {
        var selectIndex = Math.floor((Math.random()*leafList.length));
        var selectedLeaf = leafList[selectIndex];
        targetBlock = terrainArray[randList.pop()];
        leaf = {color: selectedLeaf, leafPos:{x:0,y:0}};
        leaf = getLeafPos(leaf, targetBlock);
        outLeafList.push(leaf);
    }
    return outLeafList;
}

function getLeafPos(leaf, targetBlock)
{
    leaf.leafPos = {
        x:(targetBlock[2].x + targetBlock[3].x)/2,
        y:(targetBlock[2].y + targetBlock[3].y)/2 + 1,
    };
    return leaf;
}