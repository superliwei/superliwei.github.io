seajs.config({
    base:'.',
    alias:{
        'jquery':'assets/libs/jquery/jquery-1.11.1.min.js',
        'threejs':'assets/libs/mrdoob-three.js-f73593b/build/three.min.js',
        'tweenlite':'assets/libs/greensock-v12-js/src/minified/TweenLite.min.js',
        'easing':'assets/libs/greensock-v12-js/src/minified/easing/EasePack.min.js'
    }
});

seajs.use("assets/js/scenes/MainScene");