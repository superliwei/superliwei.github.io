/**
 * 矩形组件
 */

$(document).bind(Firefly.Event.UnHandledCommand,function(e,json){
	if(json.cmd == "create" && json.type == "Box")
	{
		var box = new Firefly.Box();
		Firefly.editor.getEditorCanvas().add(box);
		box.moveTo(json.x,json.y);
	}
});

Firefly.Box = function()
{
	Firefly.ComponentBase.call(this);
	this.view.css("border","solid 1px #000000");
	
	this.descriptor = new Firefly.BoxDescriptor(this);
	
	this.toXmlNode = function()
	{
		var xmlNode = this.view.clone();
		xmlNode.attr("ff-type","Box");
		return xmlNode;
	}
}

Firefly.Box.create = function(xmlNode)
{
	var instance = new Firefly.Box();
	instance.view = xmlNode;
	return instance;
}