GlobalEditor.ComponentManager.map.BillboardComponent=function(a){GlobalEditor.ComponentManager.map.EntityComponent.call(this,a);this.title="Billboard\u7ec4\u4ef6";this.getEntityOptions=function(){return{billboard:{image:a.url==void 0?"assets/image/Cesium_Logo_overlay.png":a.url},position:Cesium.Cartesian3.fromDegrees(Number(a.gps.lng),Number(a.gps.lat))}}};
