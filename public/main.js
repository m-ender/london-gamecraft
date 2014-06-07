window.onload = init;

var scene;
var camera;
var renderer;

var cube;

// Timing
// We need these to fix the framerate
var fps = 60;
var interval = 1000/fps;
var lastTime;

function init()
{
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    var geometry = new THREE.CubeGeometry(1,1,1);
    var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

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

        cube.rotation.x += dTime;
        cube.rotation.y += dTime;

        renderer.render(scene, camera);
    }
}