gdjs.MENUCode = {};
gdjs.MENUCode.localVariables = [];
gdjs.MENUCode.idToCallbackMap = new Map();
gdjs.MENUCode.GDNewSpriteObjects1= [];
gdjs.MENUCode.GDNewSpriteObjects2= [];
gdjs.MENUCode.GDWhiteSleekButtonObjects1= [];
gdjs.MENUCode.GDWhiteSleekButtonObjects2= [];
gdjs.MENUCode.GDWhiteSleekButton2Objects1= [];
gdjs.MENUCode.GDWhiteSleekButton2Objects2= [];
gdjs.MENUCode.GDWhiteSleekButton3Objects1= [];
gdjs.MENUCode.GDWhiteSleekButton3Objects2= [];
gdjs.MENUCode.GDNewTextObjects1= [];
gdjs.MENUCode.GDNewTextObjects2= [];
gdjs.MENUCode.GDBackObjects1= [];
gdjs.MENUCode.GDBackObjects2= [];


gdjs.MENUCode.mapOfGDgdjs_9546MENUCode_9546GDWhiteSleekButtonObjects1Objects = Hashtable.newFrom({"WhiteSleekButton": gdjs.MENUCode.GDWhiteSleekButtonObjects1});
gdjs.MENUCode.mapOfGDgdjs_9546MENUCode_9546GDWhiteSleekButton2Objects1Objects = Hashtable.newFrom({"WhiteSleekButton2": gdjs.MENUCode.GDWhiteSleekButton2Objects1});
gdjs.MENUCode.mapOfGDgdjs_9546MENUCode_9546GDWhiteSleekButton3Objects1Objects = Hashtable.newFrom({"WhiteSleekButton3": gdjs.MENUCode.GDWhiteSleekButton3Objects1});
gdjs.MENUCode.mapOfGDgdjs_9546MENUCode_9546GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.MENUCode.GDBackObjects1});
gdjs.MENUCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WhiteSleekButton"), gdjs.MENUCode.GDWhiteSleekButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MENUCode.mapOfGDgdjs_9546MENUCode_9546GDWhiteSleekButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Juego", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteSleekButton2"), gdjs.MENUCode.GDWhiteSleekButton2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MENUCode.mapOfGDgdjs_9546MENUCode_9546GDWhiteSleekButton2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Contenido", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("WhiteSleekButton3"), gdjs.MENUCode.GDWhiteSleekButton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MENUCode.mapOfGDgdjs_9546MENUCode_9546GDWhiteSleekButton3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Objetivo", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.MENUCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MENUCode.mapOfGDgdjs_9546MENUCode_9546GDBackObjects1Objects, runtimeScene, true, false);
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


let isConditionTrue_0 = false;
{
}

}


};

gdjs.MENUCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MENUCode.GDNewSpriteObjects1.length = 0;
gdjs.MENUCode.GDNewSpriteObjects2.length = 0;
gdjs.MENUCode.GDWhiteSleekButtonObjects1.length = 0;
gdjs.MENUCode.GDWhiteSleekButtonObjects2.length = 0;
gdjs.MENUCode.GDWhiteSleekButton2Objects1.length = 0;
gdjs.MENUCode.GDWhiteSleekButton2Objects2.length = 0;
gdjs.MENUCode.GDWhiteSleekButton3Objects1.length = 0;
gdjs.MENUCode.GDWhiteSleekButton3Objects2.length = 0;
gdjs.MENUCode.GDNewTextObjects1.length = 0;
gdjs.MENUCode.GDNewTextObjects2.length = 0;
gdjs.MENUCode.GDBackObjects1.length = 0;
gdjs.MENUCode.GDBackObjects2.length = 0;

gdjs.MENUCode.eventsList0(runtimeScene);
gdjs.MENUCode.GDNewSpriteObjects1.length = 0;
gdjs.MENUCode.GDNewSpriteObjects2.length = 0;
gdjs.MENUCode.GDWhiteSleekButtonObjects1.length = 0;
gdjs.MENUCode.GDWhiteSleekButtonObjects2.length = 0;
gdjs.MENUCode.GDWhiteSleekButton2Objects1.length = 0;
gdjs.MENUCode.GDWhiteSleekButton2Objects2.length = 0;
gdjs.MENUCode.GDWhiteSleekButton3Objects1.length = 0;
gdjs.MENUCode.GDWhiteSleekButton3Objects2.length = 0;
gdjs.MENUCode.GDNewTextObjects1.length = 0;
gdjs.MENUCode.GDNewTextObjects2.length = 0;
gdjs.MENUCode.GDBackObjects1.length = 0;
gdjs.MENUCode.GDBackObjects2.length = 0;


return;

}

gdjs['MENUCode'] = gdjs.MENUCode;
