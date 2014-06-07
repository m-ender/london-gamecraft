window.onload = init;

var scene;
var camera;
var renderer;

var t3player;

var world;
var player_fixture;

// Timing
// We need these to fix the framerate
var fps = 60;
var interval = 1000/fps;
var lastTime;

var levelWidth = 100;

var Color = {
    Blue: "Blue",
    Green: "Green",
    Red: "Red",
};

var keyboard;
var updateFcts	= [];

var objects = [];

function t3toD2(object) {
	var bodyDef = new b2BodyDef;

	//create ground
	bodyDef.type = b2Body.b2_staticBody;
	bodyDef.position.x = object.position.x;
	bodyDef.position.y = object.position.y;
	fixDef.shape = new b2PolygonShape;
	fixDef.shape.SetAsBox(object.scale.x / 2, object.scale.y / 2);

	return world.CreateBody(bodyDef).CreateFixture(fixDef);
}



function init()
{
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
	camera.position.x = 0
	camera.position.y = 1.5
	camera.position.z = 4.0
	camera.lookAt(new THREE.Vector3(0,0,0))

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth * 0.7, window.innerHeight * 0.7);
    document.body.appendChild( renderer.domElement );

    var geometry = new THREE.BoxGeometry(1,1,1);
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    t3player = new THREE.Mesh( geometry, material );
    t3player.position.y = 50
    scene.add( t3player );
	var b2player

	//var t3ground = new THREE.Mesh(new THREE.BoxGeometry(100,1,100), new THREE.MeshBasicMaterial({color: 0x0000ff}));
	var t3ground = new THREE.Mesh( new THREE.BoxGeometry(5,5,1), new THREE.MeshBasicMaterial( { color: 0x0000ff } ) );


//	t3ground.scale.x = 500;
//	t3ground.scale.y = 500;
	t3ground.position.y = -3;
	scene.add(t3ground);

    camera.position.z = 5;

	// Box2D
	var b2Vec2 = Box2D.Common.Math.b2Vec2
	, b2World = Box2D.Dynamics.b2World
	, b2FixtureDef = Box2D.Dynamics.b2FixtureDef
	, b2BodyDef = Box2D.Dynamics.b2BodyDef
	, b2Body = Box2D.Dynamics.b2Body
	, b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;

	world = new b2World(
	new b2Vec2(0, -50),    //gravity
	true                  //allow sleep
	);

//	var b2groundFixDef = new b2FixtureDef;
//	fixDef.density = 1.0;
//	fixDef.friction = 0.5;
//	fixDef.restitution = 0.0;

//	var bdGround = new b2BodyDef;
//
//	//create b2ground
//	bdGround.type = b2Body.b2_staticBody;
//	bdGround.position.x = t3ground.position.x;
//	bdGround.position.y = t3ground.position.y;
//	b2groundFixDef.shape = new b2PolygonShape;
//	b2groundFixDef.shape.SetAsBox(t3ground.scale.x, t3ground.scale.y);
//	world.CreateBody(bodyDef).CreateFixture(fixDef);
//
//	// b2player
//	var bdPlayer = new b2BodyDef;
//	bdPlayer.type = b2Body.b2_dynamicBody;
//	b2groundFixDef.shape = new b2PolygonShape;
//	fixDef.shape.SetAsBox(t3player.scale.x, t3player.scale.y);
//
//	bodyDef.position.x = 0;
//	bodyDef.position.y = 0;
//
//	b2player = world.CreateBody(bodyDef);
//	player_fixture = b2player.CreateFixture(fixDef);

	// End of Box2D

    console.log(getTerrain(1, Color.Red));
    console.log(getTerrain(2, Color.Blue));


	// Keyboard code
	keyboard	= new THREEx.KeyboardState(renderer.domElement);
	renderer.domElement.setAttribute("tabIndex", "0");
	renderer.domElement.focus();

	updateFcts.push(function(delta){
		var vector = new b2Vec2(0, 0);

		if( keyboard.pressed('left') ){
			vector = new b2Vec2(-10, 0)
		}else if( keyboard.pressed('right') ){
			vector = new b2Vec2(10, 0)
		}

//		console.log(b2player.GetWorldCenter());
//		console.log(player_fixture);
		var foo = player_fixture.GetBody().GetWorldCenter();
		b2player.ApplyImpulse(vector,foo);

//		if( keyboard.pressed('down') ){
//			t3player.rotation.x += 1 * delta;
//		}else if( keyboard.pressed('up') ){
//			t3player.rotation.x -= 1 * delta;
//		}


	})

	// only on keydown
	keyboard.domElement.addEventListener('keydown', function(event){
		var vector
//		if( keyboard.eventMatches(event, 'w') )
//
//		if( keyboard.eventMatches(event, 's') )	t3player.scale.y	*= 2
	})
	// only on keyup
	keyboard.domElement.addEventListener('keyup', function(event){
		if( keyboard.eventMatches(event, 'a') )	t3player.scale.x	*= 2
		if( keyboard.eventMatches(event, 'd') )	t3player.scale.x	/= 2
	})
	// End of keyboard code


    lastTime = Date.now();
    render();
}

var check = true

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
	console.debug(t3player.position)
	console.debug(body.position)

		check = false
	}
	t3player.position.x = body.position.x /100;
	t3player.position.y = body.position.y /100;

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
		})
    }

}

function getTerrain(nLevel, color)
{
    var xLeft = (nLevel-1)*levelWidth;
    var xRight = nLevel * levelWidth;
    return [
        [
            {x: xLeft, y: 1},
            {x: xLeft, y: 0},
            {x: xLeft + levelWidth/2, y: 0},
            {x: xLeft + levelWidth/2, y: 1},
        ],
        [
            {x: xLeft + levelWidth/2, y: 1},
            {x: xLeft + levelWidth/2, y: 0},
            {x: xRight, y: 0},
            {x: xRight, y: 1},
        ],
    ];
}