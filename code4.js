gdjs.CreditosCode = {};
gdjs.CreditosCode.localVariables = [];
gdjs.CreditosCode.idToCallbackMap = new Map();
gdjs.CreditosCode.GDCreditosObjects1= [];
gdjs.CreditosCode.GDCreditosObjects2= [];
gdjs.CreditosCode.GDBoton3Objects1= [];
gdjs.CreditosCode.GDBoton3Objects2= [];


gdjs.CreditosCode.mapOfGDgdjs_9546CreditosCode_9546GDBoton3Objects1Objects = Hashtable.newFrom({"Boton3": gdjs.CreditosCode.GDBoton3Objects1});
gdjs.CreditosCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Boton3"), gdjs.CreditosCode.GDBoton3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CreditosCode.mapOfGDgdjs_9546CreditosCode_9546GDBoton3Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Portada", false);
}
}

}


};

gdjs.CreditosCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditosCode.GDCreditosObjects1.length = 0;
gdjs.CreditosCode.GDCreditosObjects2.length = 0;
gdjs.CreditosCode.GDBoton3Objects1.length = 0;
gdjs.CreditosCode.GDBoton3Objects2.length = 0;

gdjs.CreditosCode.eventsList0(runtimeScene);
gdjs.CreditosCode.GDCreditosObjects1.length = 0;
gdjs.CreditosCode.GDCreditosObjects2.length = 0;
gdjs.CreditosCode.GDBoton3Objects1.length = 0;
gdjs.CreditosCode.GDBoton3Objects2.length = 0;


return;

}

gdjs['CreditosCode'] = gdjs.CreditosCode;
