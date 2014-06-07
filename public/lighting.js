function addLighting() {
    var ambientLight = new THREE.AmbientLight(0x000044);
    scene.add(ambientLight);

    // directional lighting
    var directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(100, 100, 1);//.normalize();
    directionalLight.shadowCameraRight    =  5;
    directionalLight.shadowCameraLeft     = -5;
    directionalLight.shadowCameraTop      =  5;
    directionalLight.shadowCameraBottom   = -5;
    scene.add(directionalLight);
    
    renderer.shadowMapEnabled = true;
    renderer.shadowMapSoft = false;

    renderer.shadowCameraNear = 0.11;
    renderer.shadowCameraFar = 10000;
    renderer.shadowCameraFov = 50;

    renderer.shadowMapBias = 0.0039;
    renderer.shadowMapDarkness = 0.5;
    renderer.shadowMapWidth = 1024;
    renderer.shadowMapHeight = 1024;
    
}