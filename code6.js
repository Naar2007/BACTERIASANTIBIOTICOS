gdjs.PERDISTECode = {};
gdjs.PERDISTECode.localVariables = [];
gdjs.PERDISTECode.idToCallbackMap = new Map();
gdjs.PERDISTECode.GDBCObjects1= [];
gdjs.PERDISTECode.GDBCObjects2= [];
gdjs.PERDISTECode.GDNewSpriteObjects1= [];
gdjs.PERDISTECode.GDNewSpriteObjects2= [];
gdjs.PERDISTECode.GDRedButtonWithShadowObjects1= [];
gdjs.PERDISTECode.GDRedButtonWithShadowObjects2= [];


gdjs.PERDISTECode.mapOfGDgdjs_9546PERDISTECode_9546GDRedButtonWithShadowObjects1Objects = Hashtable.newFrom({"RedButtonWithShadow": gdjs.PERDISTECode.GDRedButtonWithShadowObjects1});
gdjs.PERDISTECode.mapOfGDgdjs_9546PERDISTECode_9546GDBCObjects1Objects = Hashtable.newFrom({"BC": gdjs.PERDISTECode.GDBCObjects1});
gdjs.PERDISTECode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithShadow"), gdjs.PERDISTECode.GDRedButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PERDISTECode.mapOfGDgdjs_9546PERDISTECode_9546GDRedButtonWithShadowObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Portada", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BC"), gdjs.PERDISTECode.GDBCObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PERDISTECode.mapOfGDgdjs_9546PERDISTECode_9546GDBCObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Juego", false);
}
}

}


};

gdjs.PERDISTECode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PERDISTECode.GDBCObjects1.length = 0;
gdjs.PERDISTECode.GDBCObjects2.length = 0;
gdjs.PERDISTECode.GDNewSpriteObjects1.length = 0;
gdjs.PERDISTECode.GDNewSpriteObjects2.length = 0;
gdjs.PERDISTECode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.PERDISTECode.GDRedButtonWithShadowObjects2.length = 0;

gdjs.PERDISTECode.eventsList0(runtimeScene);
gdjs.PERDISTECode.GDBCObjects1.length = 0;
gdjs.PERDISTECode.GDBCObjects2.length = 0;
gdjs.PERDISTECode.GDNewSpriteObjects1.length = 0;
gdjs.PERDISTECode.GDNewSpriteObjects2.length = 0;
gdjs.PERDISTECode.GDRedButtonWithShadowObjects1.length = 0;
gdjs.PERDISTECode.GDRedButtonWithShadowObjects2.length = 0;


return;

}

gdjs['PERDISTECode'] = gdjs.PERDISTECode;
