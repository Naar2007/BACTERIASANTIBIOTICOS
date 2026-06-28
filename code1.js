gdjs.TemaCode = {};
gdjs.TemaCode.localVariables = [];
gdjs.TemaCode.idToCallbackMap = new Map();
gdjs.TemaCode.GDTemaObjects1= [];
gdjs.TemaCode.GDTemaObjects2= [];
gdjs.TemaCode.GDBoton1Objects1= [];
gdjs.TemaCode.GDBoton1Objects2= [];
gdjs.TemaCode.GDNewSpriteObjects1= [];
gdjs.TemaCode.GDNewSpriteObjects2= [];
gdjs.TemaCode.GDTextoIntroObjects1= [];
gdjs.TemaCode.GDTextoIntroObjects2= [];
gdjs.TemaCode.GDOrangeBubbleButtonObjects1= [];
gdjs.TemaCode.GDOrangeBubbleButtonObjects2= [];
gdjs.TemaCode.GDBackObjects1= [];
gdjs.TemaCode.GDBackObjects2= [];


gdjs.TemaCode.mapOfGDgdjs_9546TemaCode_9546GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.TemaCode.GDBackObjects1});
gdjs.TemaCode.mapOfGDgdjs_9546TemaCode_9546GDBoton1Objects1Objects = Hashtable.newFrom({"Boton1": gdjs.TemaCode.GDBoton1Objects1});
gdjs.TemaCode.mapOfGDgdjs_9546TemaCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.TemaCode.GDNewSpriteObjects1});
gdjs.TemaCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.TemaCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TemaCode.mapOfGDgdjs_9546TemaCode_9546GDBackObjects1Objects, runtimeScene, true, false);
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

gdjs.copyArray(runtimeScene.getObjects("Boton1"), gdjs.TemaCode.GDBoton1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TemaCode.mapOfGDgdjs_9546TemaCode_9546GDBoton1Objects1Objects, runtimeScene, true, false);
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
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("OrangeBubbleButton"), gdjs.TemaCode.GDOrangeBubbleButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextoIntro"), gdjs.TemaCode.GDTextoIntroObjects1);
{for(var i = 0, len = gdjs.TemaCode.GDOrangeBubbleButtonObjects1.length ;i < len;++i) {
    gdjs.TemaCode.GDOrangeBubbleButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.TemaCode.GDTextoIntroObjects1.length ;i < len;++i) {
    gdjs.TemaCode.GDTextoIntroObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.TemaCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.TemaCode.mapOfGDgdjs_9546TemaCode_9546GDNewSpriteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("OrangeBubbleButton"), gdjs.TemaCode.GDOrangeBubbleButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextoIntro"), gdjs.TemaCode.GDTextoIntroObjects1);
{for(var i = 0, len = gdjs.TemaCode.GDTextoIntroObjects1.length ;i < len;++i) {
    gdjs.TemaCode.GDTextoIntroObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.TemaCode.GDOrangeBubbleButtonObjects1.length ;i < len;++i) {
    gdjs.TemaCode.GDOrangeBubbleButtonObjects1[i].hide(false);
}
}
}

}


};

gdjs.TemaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TemaCode.GDTemaObjects1.length = 0;
gdjs.TemaCode.GDTemaObjects2.length = 0;
gdjs.TemaCode.GDBoton1Objects1.length = 0;
gdjs.TemaCode.GDBoton1Objects2.length = 0;
gdjs.TemaCode.GDNewSpriteObjects1.length = 0;
gdjs.TemaCode.GDNewSpriteObjects2.length = 0;
gdjs.TemaCode.GDTextoIntroObjects1.length = 0;
gdjs.TemaCode.GDTextoIntroObjects2.length = 0;
gdjs.TemaCode.GDOrangeBubbleButtonObjects1.length = 0;
gdjs.TemaCode.GDOrangeBubbleButtonObjects2.length = 0;
gdjs.TemaCode.GDBackObjects1.length = 0;
gdjs.TemaCode.GDBackObjects2.length = 0;

gdjs.TemaCode.eventsList0(runtimeScene);
gdjs.TemaCode.GDTemaObjects1.length = 0;
gdjs.TemaCode.GDTemaObjects2.length = 0;
gdjs.TemaCode.GDBoton1Objects1.length = 0;
gdjs.TemaCode.GDBoton1Objects2.length = 0;
gdjs.TemaCode.GDNewSpriteObjects1.length = 0;
gdjs.TemaCode.GDNewSpriteObjects2.length = 0;
gdjs.TemaCode.GDTextoIntroObjects1.length = 0;
gdjs.TemaCode.GDTextoIntroObjects2.length = 0;
gdjs.TemaCode.GDOrangeBubbleButtonObjects1.length = 0;
gdjs.TemaCode.GDOrangeBubbleButtonObjects2.length = 0;
gdjs.TemaCode.GDBackObjects1.length = 0;
gdjs.TemaCode.GDBackObjects2.length = 0;


return;

}

gdjs['TemaCode'] = gdjs.TemaCode;
