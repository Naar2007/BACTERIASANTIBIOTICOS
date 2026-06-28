gdjs.PortadaCode = {};
gdjs.PortadaCode.localVariables = [];
gdjs.PortadaCode.idToCallbackMap = new Map();
gdjs.PortadaCode.GDNewSpriteObjects1= [];
gdjs.PortadaCode.GDNewSpriteObjects2= [];
gdjs.PortadaCode.GDPortadaObjects1= [];
gdjs.PortadaCode.GDPortadaObjects2= [];
gdjs.PortadaCode.GDSmallBlueButtonObjects1= [];
gdjs.PortadaCode.GDSmallBlueButtonObjects2= [];


gdjs.PortadaCode.mapOfGDgdjs_9546PortadaCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.PortadaCode.GDNewSpriteObjects1});
gdjs.PortadaCode.mapOfGDgdjs_9546PortadaCode_9546GDSmallBlueButtonObjects1Objects = Hashtable.newFrom({"SmallBlueButton": gdjs.PortadaCode.GDSmallBlueButtonObjects1});
gdjs.PortadaCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.PortadaCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PortadaCode.mapOfGDgdjs_9546PortadaCode_9546GDNewSpriteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tema", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallBlueButton"), gdjs.PortadaCode.GDSmallBlueButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PortadaCode.mapOfGDgdjs_9546PortadaCode_9546GDSmallBlueButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Creditos", false);
}
}

}


};

gdjs.PortadaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PortadaCode.GDNewSpriteObjects1.length = 0;
gdjs.PortadaCode.GDNewSpriteObjects2.length = 0;
gdjs.PortadaCode.GDPortadaObjects1.length = 0;
gdjs.PortadaCode.GDPortadaObjects2.length = 0;
gdjs.PortadaCode.GDSmallBlueButtonObjects1.length = 0;
gdjs.PortadaCode.GDSmallBlueButtonObjects2.length = 0;

gdjs.PortadaCode.eventsList0(runtimeScene);
gdjs.PortadaCode.GDNewSpriteObjects1.length = 0;
gdjs.PortadaCode.GDNewSpriteObjects2.length = 0;
gdjs.PortadaCode.GDPortadaObjects1.length = 0;
gdjs.PortadaCode.GDPortadaObjects2.length = 0;
gdjs.PortadaCode.GDSmallBlueButtonObjects1.length = 0;
gdjs.PortadaCode.GDSmallBlueButtonObjects2.length = 0;


return;

}

gdjs['PortadaCode'] = gdjs.PortadaCode;
