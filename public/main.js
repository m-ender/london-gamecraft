window.onload = init;

var scene;
var camera;
var renderer;

var cube;

var world;

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

var seed = 123;

function init()
{
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    var geometry = new THREE.BoxGeometry(1,1,1);
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    // var worldAABB = new b2AABB();
    // worldAABB.minVertex.Set(-1000, -1000);
    // worldAABB.maxVertex.Set(1000, 1000);
    // var gravity = new b2Vec2(0, 10000);
    // var doSleep = true;
    // world = new b2World(worldAABB, gravity, doSleep);

    // var box = new b2PolygonShape();
    // box.SetAsBox(0.5,0.5);

    console.log(getTerrain(1, Color.Red));
    terrain = getTerrain(2, Color.Blue);
    console.log(terrain);

    lastTime = Date.now();
    render();
    getLeafList(terrain);
}


function render() {
    requestAnimationFrame(render);

    currentTime = Date.now();
    var dTime = currentTime - lastTime;

    if (dTime > interval)
    {
        // The modulo is to take care of the case that we skipped a frame
        lastTime = currentTime - (dTime % interval);

        var steps = Math.floor(dTime / interval);

        dTime = steps * interval / 1000; // Now dTime is in seconds

        renderer.render(scene, camera);
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
        Blue: {
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
    Math.floor((Math.random()*len/3-1) + 2*len/3)]
    leafList = ["red","green", "blue"];
    outLeafList = []
    while(randList.length != 0)
    {
        var selectIndex = Math.floor((Math.random()*leafList.length));
        var selectedLeaf = leafList[selectIndex];
        targetBlock = terrainArray[randList.pop()];
        leaf = {color: selectedLeaf, leafPos:{x:0,y:0}};
        leaf = getLeafPos(leaf, targetBlock);
        outLeafList.push(leaf);
    }
    console.log(outLeafList);
    return outLeafList
    }
    
function getLeafPos(leaf, targetBlock)
{
    leaf.leafPos = {
        x:(targetBlock[2].x + targetBlock[3].x)/2,
        y:(targetBlock[2].y + targetBlock[3].y)/2,
    };
    console.log(leaf.leafPos);
    return leaf
}