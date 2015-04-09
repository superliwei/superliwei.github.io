define(function(require){
    require('assets/libs/CanvasTextWrapper-master/CanvasTextWrapper.min.js');
    require('../utils/SubdivisionModifier');
    var IconItem = function()
    {
        require('assets/libs/mrdoob-three.js-f73593b/examples/fonts/helvetiker_regular.typeface.js');
        this.view3d = new THREE.Object3D();
        var geometry = new THREE.BoxGeometry( 32, 32, 10,2,2,1 );
        var modifier = new THREE.SubdivisionModifier(3);
        modifier.modify(geometry);
        var material = new THREE.MeshPhongMaterial({color: 0xffffff*Math.random()});
        //material.wireframe = true;
        var cube = new THREE.Mesh(geometry,material);
        this.view3d.add( cube );
        cube.castShadow = true;

        //create image
        var text = "hello中文123";
        var bitmap = document.createElement('canvas');
        bitmap.width = 275;
        bitmap.height = 90;
        var g = bitmap.getContext('2d');
        g.fillStyle = 'white';
        g.strokeStyle = 'black';

        CanvasTextWrapper(bitmap, text, {
            font:"Bold 30px Arial",
            textAlign: "center",
            strokeText: false
        });

        // canvas contents will be used for a texture
        var texture = new THREE.Texture(bitmap);
        texture.needsUpdate = true;
        texture.minFilter = THREE.NearestFilter;

        var m = new THREE.MeshLambertMaterial( {map:texture} );
        m.transparent = true;
        m.side = THREE.DoubleSide;
        var geo = new THREE.PlaneBufferGeometry(55,18);
        var pl = new THREE.Mesh(geo,m);
        pl.position.set(0,-29,0);
        this.view3d.add(pl);
    }
    return IconItem;
});