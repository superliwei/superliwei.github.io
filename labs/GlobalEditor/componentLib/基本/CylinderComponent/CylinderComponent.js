GlobalEditor.ComponentManager.map.CylinderComponent=function(a){GlobalEditor.ComponentManager.map.EntityComponent.call(this,a);this.title="Cylinder\u7ec4\u4ef6";this.getEntityOptions=function(){var b=Number(a.gps.lat),c=Number(a.gps.lng);return{cylinder:{length:4E5,topRadius:2E5,bottomRadius:2E5,material:Cesium.Color.GREEN.withAlpha(0.5),outline:!0,outlineColor:Cesium.Color.DARK_GREEN},position:Cesium.Cartesian3.fromDegrees(c,b)}}};
