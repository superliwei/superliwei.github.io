GlobalEditor.ComponentManager.map.CorridorComponent=function(c){GlobalEditor.ComponentManager.map.EntityComponent.call(this,c);this.title="Corridor\u7ec4\u4ef6";this.getEntityOptions=function(){var a=Number(c.gps.lat),b=Number(c.gps.lng);return{corridor:{positions:Cesium.Cartesian3.fromDegreesArray([b-10,a,b,a,b+10,a]),height:0,extrudedHeight:1E5,width:2E5,cornerType:Cesium.CornerType.BEVELED,material:Cesium.Color.BLUE.withAlpha(0.5),outline:!0,outlineColor:Cesium.Color.BLUE},position:Cesium.Cartesian3.fromDegrees(b,
a)}};var d=this.cloneOptionsHandle;this.cloneOptionsHandle=function(a){a=d.call(this,a);a.settings.corridor.positions=void 0;return a}};
