define(function(require){
    var ItemPage = require('./ItemPage');
    require('tweenlite');
    require('easing');

    var PageContainer = function()
    {
        this.view3d = new THREE.Object3D();

        var pageNum = 5;
        for(var i= 0;i<pageNum;i++)
        {
            var page = new ItemPage();
            var tx = 800*i;
            page.view3d.position.set(tx,0,0);
            this.view3d.add(page.view3d);
        }

        //test
        var pageIdx = 0;
        $(window).keyup(function(e){
            switch(e.keyCode)
            {
                case 65: //a
                    pre();
                    break;
                case 68: //d
                    next();
                    break;
            }
        });

        function pre()
        {
            if(pageIdx>1)
            {
                go(pageIdx-1);
            }
        }

        function next()
        {
            if(pageIdx<pageNum-1)
            {
                go(pageIdx+1);
            }
        }

        var self = this;
        function go(idx)
        {
            pageIdx = idx;
            TweenLite.to(self.view3d.position,1,{x:-800*idx,ease:Cubic.easeInOut});
        }
    }
    return PageContainer;
});