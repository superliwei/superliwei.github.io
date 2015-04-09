define(function(require){
    require('../utils/Custom');
    require('jquery');
    require('threejs');
    require('../utils/OrbitControls');

    var PageContainer = require('../components/PageContainer');

    var container,camera,scene,renderer,controls;

    init();
    animate();

    function init()
    {
        container = $("<div>");
        container.appendTo('body');

        //camera
        camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,1000);
        camera.position.set(0,150,400);

        //scene
        scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0x050505,400,1000);

        //lights
        scene.add(new THREE.AmbientLight(0x222222));

        var light = new THREE.SpotLight( 0xffffff, 2, 1000 );
        light.position.set( 200, 250, 500 );

        light.castShadow = true;
        light.shadowMapWidth = 1024;
        light.shadowMapHeight = 1024;
        light.shadowMapDarkness = 0.95;
        //light.shadowCameraVisible = true;

        scene.add( light );

        light = new THREE.SpotLight( 0xffffff, 1.5, 500 );
        light.position.set( -100, 350, 250 );

        light.castShadow = true;
        light.shadowMapWidth = 1024;
        light.shadowMapHeight = 1024;
        light.shadowMapDarkness = 0.95;
        //light.shadowCameraVisible = true;

        scene.add( light );

        //ground
        var gt = THREE.ImageUtils.loadTexture("assets/libs/mrdoob-three.js-f73593b/examples/textures/terrain/grasslight-big.jpg");
        var gg = new THREE.PlaneBufferGeometry(2000,2000);
        var gm = new THREE.MeshPhongMaterial({ color: 0xffffff, map: gt });

        var ground = new THREE.Mesh(gg, gm);
        ground.rotation.x = - Math.PI / 2;
        ground.material.map.repeat.set(8,8);
        ground.material.map.wrapS = ground.material.map.wrapT = THREE.RepeatWrapping;
        ground.receiveShadow = true;
        scene.add(ground);

        //objects
        var pageContainer = new PageContainer();
        scene.add(pageContainer.view3d);

        //renderer
        renderer = new THREE.WebGLRenderer({antialias:true});
        renderer.setClearColor(scene.fog.color);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth,window.innerHeight);
        $(renderer.domElement).appendTo(container);

        renderer.gammaInput = true;
        renderer.gammaOutput = true;
        renderer.shadowMapEnabled = true;

        //events
        $(window).resize(windowResizeHandler);

        //controls
        controls = new THREE.OrbitControls(camera,renderer.domElement);
        controls.target.set(0,100,0);
        controls.enabled = true;
    }

    function animate()
    {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene,camera);
    }

    function windowResizeHandler()
    {
        renderer.setSize(window.innerWidth,window.innerHeight);
        camera.aspect = window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
    }
});