gdjs.ContenidoCode = {};
gdjs.ContenidoCode.localVariables = [];
gdjs.ContenidoCode.idToCallbackMap = new Map();
gdjs.ContenidoCode.GDBackObjects1= [];
gdjs.ContenidoCode.GDBackObjects2= [];
gdjs.ContenidoCode.GDNewSpriteObjects1= [];
gdjs.ContenidoCode.GDNewSpriteObjects2= [];


gdjs.ContenidoCode.mapOfGDgdjs_9546ContenidoCode_9546GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.ContenidoCode.GDBackObjects1});
gdjs.ContenidoCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.ContenidoCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ContenidoCode.mapOfGDgdjs_9546ContenidoCode_9546GDBackObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENU", false);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.ContenidoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ContenidoCode.GDBackObjects1.length = 0;
gdjs.ContenidoCode.GDBackObjects2.length = 0;
gdjs.ContenidoCode.GDNewSpriteObjects1.length = 0;
gdjs.ContenidoCode.GDNewSpriteObjects2.length = 0;

gdjs.ContenidoCode.eventsList0(runtimeScene);
gdjs.ContenidoCode.GDBackObjects1.length = 0;
gdjs.ContenidoCode.GDBackObjects2.length = 0;
gdjs.ContenidoCode.GDNewSpriteObjects1.length = 0;
gdjs.ContenidoCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['ContenidoCode'] = gdjs.ContenidoCode;
