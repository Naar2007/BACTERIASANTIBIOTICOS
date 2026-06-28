gdjs.FELICIDADESCode = {};
gdjs.FELICIDADESCode.localVariables = [];
gdjs.FELICIDADESCode.idToCallbackMap = new Map();
gdjs.FELICIDADESCode.GDERRORObjects1= [];
gdjs.FELICIDADESCode.GDERRORObjects2= [];
gdjs.FELICIDADESCode.GDBOTONVOLVERObjects1= [];
gdjs.FELICIDADESCode.GDBOTONVOLVERObjects2= [];


gdjs.FELICIDADESCode.mapOfGDgdjs_9546FELICIDADESCode_9546GDBOTONVOLVERObjects1Objects = Hashtable.newFrom({"BOTONVOLVER": gdjs.FELICIDADESCode.GDBOTONVOLVERObjects1});
gdjs.FELICIDADESCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BOTONVOLVER"), gdjs.FELICIDADESCode.GDBOTONVOLVERObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.FELICIDADESCode.mapOfGDgdjs_9546FELICIDADESCode_9546GDBOTONVOLVERObjects1Objects, runtimeScene, true, false);
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


let isConditionTrue_0 = false;
{
}

}


};

gdjs.FELICIDADESCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FELICIDADESCode.GDERRORObjects1.length = 0;
gdjs.FELICIDADESCode.GDERRORObjects2.length = 0;
gdjs.FELICIDADESCode.GDBOTONVOLVERObjects1.length = 0;
gdjs.FELICIDADESCode.GDBOTONVOLVERObjects2.length = 0;

gdjs.FELICIDADESCode.eventsList0(runtimeScene);
gdjs.FELICIDADESCode.GDERRORObjects1.length = 0;
gdjs.FELICIDADESCode.GDERRORObjects2.length = 0;
gdjs.FELICIDADESCode.GDBOTONVOLVERObjects1.length = 0;
gdjs.FELICIDADESCode.GDBOTONVOLVERObjects2.length = 0;


return;

}

gdjs['FELICIDADESCode'] = gdjs.FELICIDADESCode;
