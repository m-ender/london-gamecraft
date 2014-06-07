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
    console.log(getTerrain(2, Color.Blue));

    lastTime = Date.now();
    render();
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

function getTerrain(nLevel, color)
{
    var xLeft = (nLevel-1)*levelWidth;
    var xRight = nLevel * levelWidth;

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

    var heightMap = [0];

    for (i = 1; i < segments; ++i)
    {
        heightMap.push(simplex.noise(0, relaxedSamples[i]));
    }

    heightMap.push(0);

    var polygons = [];
    for (i = 0; i < segments; ++i)
    {
        polygons.push([
            { x: relaxedSamples[i], y: -10},
            { x: relaxedSamples[i+1], y: -10},
            { x: relaxedSamples[i+1], y: heightMap[i+1]},
            { x: relaxedSamples[i], y: heightMap[i]},
        ]);
    }

    return polygons;
}