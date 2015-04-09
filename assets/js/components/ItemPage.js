define(function(require){
    var IconItem = require('./IconItem');
    var ItemPage = function()
    {
        this.view3d = new THREE.Object3D();
        var row = 3;
        var col = 5;
        var w = 65;
        for(var i=0;i<15;i++)
        {
            var item = new IconItem();
            var tx = -140 + w*(i - Math.floor(i / col) * col);
            var ty = 60 + w*Math.floor(i/col);
            var tz = 0;
            item.view3d.position.set(tx,ty,tz);
            this.view3d.add(item.view3d);
        }
    }
    return ItemPage;
});