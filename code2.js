gdjs.ObjetivoCode = {};
gdjs.ObjetivoCode.localVariables = [];
gdjs.ObjetivoCode.idToCallbackMap = new Map();
gdjs.ObjetivoCode.GDObjetivoObjects1= [];
gdjs.ObjetivoCode.GDObjetivoObjects2= [];
gdjs.ObjetivoCode.GDBackObjects1= [];
gdjs.ObjetivoCode.GDBackObjects2= [];


gdjs.ObjetivoCode.mapOfGDgdjs_9546ObjetivoCode_9546GDBackObjects1Objects = Hashtable.newFrom({"Back": gdjs.ObjetivoCode.GDBackObjects1});
gdjs.ObjetivoCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.ObjetivoCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ObjetivoCode.mapOfGDgdjs_9546ObjetivoCode_9546GDBackObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENU", false);
}
}

}


};

gdjs.ObjetivoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ObjetivoCode.GDObjetivoObjects1.length = 0;
gdjs.ObjetivoCode.GDObjetivoObjects2.length = 0;
gdjs.ObjetivoCode.GDBackObjects1.length = 0;
gdjs.ObjetivoCode.GDBackObjects2.length = 0;

gdjs.ObjetivoCode.eventsList0(runtimeScene);
gdjs.ObjetivoCode.GDObjetivoObjects1.length = 0;
gdjs.ObjetivoCode.GDObjetivoObjects2.length = 0;
gdjs.ObjetivoCode.GDBackObjects1.length = 0;
gdjs.ObjetivoCode.GDBackObjects2.length = 0;


return;

}

gdjs['ObjetivoCode'] = gdjs.ObjetivoCode;
