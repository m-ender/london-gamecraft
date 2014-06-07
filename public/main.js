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