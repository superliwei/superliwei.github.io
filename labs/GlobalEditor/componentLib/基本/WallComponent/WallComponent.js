GlobalEditor.ComponentManager.map.WallComponent=function(c){GlobalEditor.ComponentManager.map.EntityComponent.call(this,c);this.title="Wall\u7ec4\u4ef6";this.getEntityOptions=function(){var a=Number(c.gps.lat),b=Number(c.gps.lng);return{wall:{positions:Cesium.Cartesian3.fromDegreesArray([b-10,a-10,b-5,a-10,b,a-10,b+5,a-10,b+10,a-10,b+10,a,b+10,a+10,b+5,a+10,b,a+10,b-5,a+10,b-10,a+10,b-10,a,b-10,a-10]),maximumHeights:[1E5,2E5,1E5,2E5,1E5,2E5,1E5,2E5,1E5,2E5,1E5,2E5,1E5],minimumHeights:[0,1E5,0,1E5,
0,1E5,0,1E5,0,1E5,0,1E5,0],material:Cesium.Color.BLUE.withAlpha(0.5),outline:!0,outlineColor:Cesium.Color.YELLOW},position:Cesium.Cartesian3.fromDegrees(b,a)}};var d=this.cloneOptionsHandle;this.cloneOptionsHandle=function(a){a=d.call(this,a);a.settings.wall.positions=void 0;return a}};
