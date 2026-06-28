gdjs.JuegoCode = {};
gdjs.JuegoCode.localVariables = [];
gdjs.JuegoCode.idToCallbackMap = new Map();
gdjs.JuegoCode.GDPortadajuegoObjects1= [];
gdjs.JuegoCode.GDPortadajuegoObjects2= [];
gdjs.JuegoCode.GDYOObjects1= [];
gdjs.JuegoCode.GDYOObjects2= [];
gdjs.JuegoCode.GDBacteriaObjects1= [];
gdjs.JuegoCode.GDBacteriaObjects2= [];
gdjs.JuegoCode.GDMitocondriaObjects1= [];
gdjs.JuegoCode.GDMitocondriaObjects2= [];
gdjs.JuegoCode.GDCelula_9595vegetalObjects1= [];
gdjs.JuegoCode.GDCelula_9595vegetalObjects2= [];
gdjs.JuegoCode.GDTejidoObjects1= [];
gdjs.JuegoCode.GDTejidoObjects2= [];
gdjs.JuegoCode.GDMetaObjects1= [];
gdjs.JuegoCode.GDMetaObjects2= [];
gdjs.JuegoCode.GDAvatar_9595corriendoObjects1= [];
gdjs.JuegoCode.GDAvatar_9595corriendoObjects2= [];
gdjs.JuegoCode.GDPreguntaObjects1= [];
gdjs.JuegoCode.GDPreguntaObjects2= [];
gdjs.JuegoCode.GDOpcionAObjects1= [];
gdjs.JuegoCode.GDOpcionAObjects2= [];
gdjs.JuegoCode.GDOpcionBObjects1= [];
gdjs.JuegoCode.GDOpcionBObjects2= [];
gdjs.JuegoCode.GDOpcionCObjects1= [];
gdjs.JuegoCode.GDOpcionCObjects2= [];
gdjs.JuegoCode.GDTextoPuntosObjects1= [];
gdjs.JuegoCode.GDTextoPuntosObjects2= [];
gdjs.JuegoCode.GDTextoVidasObjects1= [];
gdjs.JuegoCode.GDTextoVidasObjects2= [];
gdjs.JuegoCode.GDTextoFeedbackObjects1= [];
gdjs.JuegoCode.GDTextoFeedbackObjects2= [];
gdjs.JuegoCode.GDVida1Objects1= [];
gdjs.JuegoCode.GDVida1Objects2= [];
gdjs.JuegoCode.GDVida2Objects1= [];
gdjs.JuegoCode.GDVida2Objects2= [];
gdjs.JuegoCode.GDVida3Objects1= [];
gdjs.JuegoCode.GDVida3Objects2= [];
gdjs.JuegoCode.GDMENBRANAObjects1= [];
gdjs.JuegoCode.GDMENBRANAObjects2= [];


gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDAvatar_95959595corriendoObjects1Objects = Hashtable.newFrom({"Avatar_corriendo": gdjs.JuegoCode.GDAvatar_9595corriendoObjects1});
gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDCelula_95959595vegetalObjects1Objects = Hashtable.newFrom({"Celula_vegetal": gdjs.JuegoCode.GDCelula_9595vegetalObjects1});
gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDAvatar_95959595corriendoObjects1Objects = Hashtable.newFrom({"Avatar_corriendo": gdjs.JuegoCode.GDAvatar_9595corriendoObjects1});
gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDTejidoObjects1Objects = Hashtable.newFrom({"Tejido": gdjs.JuegoCode.GDTejidoObjects1});
gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDAvatar_95959595corriendoObjects1Objects = Hashtable.newFrom({"Avatar_corriendo": gdjs.JuegoCode.GDAvatar_9595corriendoObjects1});
gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDBacteriaObjects1Objects = Hashtable.newFrom({"Bacteria": gdjs.JuegoCode.GDBacteriaObjects1});
gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDAvatar_95959595corriendoObjects1Objects = Hashtable.newFrom({"Avatar_corriendo": gdjs.JuegoCode.GDAvatar_9595corriendoObjects1});
gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDMitocondriaObjects1Objects = Hashtable.newFrom({"Mitocondria": gdjs.JuegoCode.GDMitocondriaObjects1});
gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDAvatar_95959595corriendoObjects1Objects = Hashtable.newFrom({"Avatar_corriendo": gdjs.JuegoCode.GDAvatar_9595corriendoObjects1});
gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDMENBRANAObjects1Objects = Hashtable.newFrom({"MENBRANA": gdjs.JuegoCode.GDMENBRANAObjects1});
gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDAvatar_95959595corriendoObjects1Objects = Hashtable.newFrom({"Avatar_corriendo": gdjs.JuegoCode.GDAvatar_9595corriendoObjects1});
gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDMetaObjects1Objects = Hashtable.newFrom({"Meta": gdjs.JuegoCode.GDMetaObjects1});
gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDAvatar_95959595corriendoObjects1Objects = Hashtable.newFrom({"Avatar_corriendo": gdjs.JuegoCode.GDAvatar_9595corriendoObjects1});
gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDMetaObjects1Objects = Hashtable.newFrom({"Meta": gdjs.JuegoCode.GDMetaObjects1});
gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDOpcionAObjects1Objects = Hashtable.newFrom({"OpcionA": gdjs.JuegoCode.GDOpcionAObjects1});
gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDOpcionBObjects1Objects = Hashtable.newFrom({"OpcionB": gdjs.JuegoCode.GDOpcionBObjects1});
gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDOpcionCObjects1Objects = Hashtable.newFrom({"OpcionC": gdjs.JuegoCode.GDOpcionCObjects1});
gdjs.JuegoCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("OpcionA"), gdjs.JuegoCode.GDOpcionAObjects1);
gdjs.copyArray(runtimeScene.getObjects("OpcionB"), gdjs.JuegoCode.GDOpcionBObjects1);
gdjs.copyArray(runtimeScene.getObjects("OpcionC"), gdjs.JuegoCode.GDOpcionCObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pregunta"), gdjs.JuegoCode.GDPreguntaObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextoFeedback"), gdjs.JuegoCode.GDTextoFeedbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextoPuntos"), gdjs.JuegoCode.GDTextoPuntosObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextoVidas"), gdjs.JuegoCode.GDTextoVidasObjects1);
gdjs.copyArray(runtimeScene.getObjects("Vida1"), gdjs.JuegoCode.GDVida1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Vida2"), gdjs.JuegoCode.GDVida2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Vida3"), gdjs.JuegoCode.GDVida3Objects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}
{for(var i = 0, len = gdjs.JuegoCode.GDPreguntaObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDPreguntaObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDOpcionAObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDOpcionAObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDOpcionBObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDOpcionBObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDOpcionCObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDOpcionCObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDTextoFeedbackObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTextoFeedbackObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDTextoPuntosObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTextoPuntosObjects1[i].getBehavior("Text").setText("Puntos = " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Puntos"))));
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDTextoVidasObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTextoVidasObjects1[i].getBehavior("Text").setText("Vidas: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Vidas"))));
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDVida1Objects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDVida1Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDVida2Objects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDVida2Objects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDVida3Objects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDVida3Objects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Avatar_corriendo"), gdjs.JuegoCode.GDAvatar_9595corriendoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Celula_vegetal"), gdjs.JuegoCode.GDCelula_9595vegetalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDAvatar_95959595corriendoObjects1Objects, gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDCelula_95959595vegetalObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10543868);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JuegoCode.GDCelula_9595vegetalObjects1 */
gdjs.copyArray(runtimeScene.getObjects("TextoFeedback"), gdjs.JuegoCode.GDTextoFeedbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextoPuntos"), gdjs.JuegoCode.GDTextoPuntosObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(5);
}
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}
{for(var i = 0, len = gdjs.JuegoCode.GDCelula_9595vegetalObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDCelula_9595vegetalObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDTextoPuntosObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTextoPuntosObjects1[i].getBehavior("Text").setText("Puntos = " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Puntos"))));
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDTextoFeedbackObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTextoFeedbackObjects1[i].getBehavior("Text").setText("¡Muy bien! Recogiste una evidencia correcta.");
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDTextoFeedbackObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTextoFeedbackObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Avatar_corriendo"), gdjs.JuegoCode.GDAvatar_9595corriendoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tejido"), gdjs.JuegoCode.GDTejidoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDAvatar_95959595corriendoObjects1Objects, gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDTejidoObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8615412);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JuegoCode.GDTejidoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("TextoFeedback"), gdjs.JuegoCode.GDTextoFeedbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextoPuntos"), gdjs.JuegoCode.GDTextoPuntosObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(5);
}
{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}
{for(var i = 0, len = gdjs.JuegoCode.GDTejidoObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTejidoObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDTextoPuntosObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTextoPuntosObjects1[i].getBehavior("Text").setText("Puntos = " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Puntos"))));
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDTextoFeedbackObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTextoFeedbackObjects1[i].getBehavior("Text").setText("¡Muy bien! Ya puedes ir a la meta.");
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDTextoFeedbackObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTextoFeedbackObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Avatar_corriendo"), gdjs.JuegoCode.GDAvatar_9595corriendoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Bacteria"), gdjs.JuegoCode.GDBacteriaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDAvatar_95959595corriendoObjects1Objects, gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDBacteriaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10729132);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JuegoCode.GDBacteriaObjects1 */
gdjs.copyArray(runtimeScene.getObjects("TextoFeedback"), gdjs.JuegoCode.GDTextoFeedbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextoVidas"), gdjs.JuegoCode.GDTextoVidasObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}
{for(var i = 0, len = gdjs.JuegoCode.GDBacteriaObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDBacteriaObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDTextoVidasObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTextoVidasObjects1[i].getBehavior("Text").setText("Vidas: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Vidas"))));
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDTextoFeedbackObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTextoFeedbackObjects1[i].getBehavior("Text").setText("Incorrecto. Ese objeto no era una evidencia correcta.");
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDTextoFeedbackObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTextoFeedbackObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Avatar_corriendo"), gdjs.JuegoCode.GDAvatar_9595corriendoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mitocondria"), gdjs.JuegoCode.GDMitocondriaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDAvatar_95959595corriendoObjects1Objects, gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDMitocondriaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13268820);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JuegoCode.GDMitocondriaObjects1 */
gdjs.copyArray(runtimeScene.getObjects("TextoFeedback"), gdjs.JuegoCode.GDTextoFeedbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextoVidas"), gdjs.JuegoCode.GDTextoVidasObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}
{for(var i = 0, len = gdjs.JuegoCode.GDMitocondriaObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDMitocondriaObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDTextoVidasObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTextoVidasObjects1[i].getBehavior("Text").setText("Vidas: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Vidas"))));
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDTextoFeedbackObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTextoFeedbackObjects1[i].getBehavior("Text").setText("Incorrecto. Perdiste una vida.");
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDTextoFeedbackObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTextoFeedbackObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Avatar_corriendo"), gdjs.JuegoCode.GDAvatar_9595corriendoObjects1);
gdjs.copyArray(runtimeScene.getObjects("MENBRANA"), gdjs.JuegoCode.GDMENBRANAObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDAvatar_95959595corriendoObjects1Objects, gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDMENBRANAObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9642572);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JuegoCode.GDMENBRANAObjects1 */
gdjs.copyArray(runtimeScene.getObjects("TextoFeedback"), gdjs.JuegoCode.GDTextoFeedbackObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextoVidas"), gdjs.JuegoCode.GDTextoVidasObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}
{for(var i = 0, len = gdjs.JuegoCode.GDMENBRANAObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDMENBRANAObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDTextoVidasObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTextoVidasObjects1[i].getBehavior("Text").setText("Vidas: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("Vidas"))));
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDTextoFeedbackObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTextoFeedbackObjects1[i].getBehavior("Text").setText("Incorrecto. Perdiste una vida.");
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDTextoFeedbackObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTextoFeedbackObjects1[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Vida3"), gdjs.JuegoCode.GDVida3Objects1);
{for(var i = 0, len = gdjs.JuegoCode.GDVida3Objects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDVida3Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Vida2"), gdjs.JuegoCode.GDVida2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Vida3"), gdjs.JuegoCode.GDVida3Objects1);
{for(var i = 0, len = gdjs.JuegoCode.GDVida3Objects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDVida3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDVida2Objects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDVida2Objects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10827244);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Vida1"), gdjs.JuegoCode.GDVida1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Vida2"), gdjs.JuegoCode.GDVida2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Vida3"), gdjs.JuegoCode.GDVida3Objects1);
{for(var i = 0, len = gdjs.JuegoCode.GDVida3Objects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDVida3Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDVida2Objects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDVida2Objects1[i].hide();
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDVida1Objects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDVida1Objects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PERDISTE", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Avatar_corriendo"), gdjs.JuegoCode.GDAvatar_9595corriendoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Meta"), gdjs.JuegoCode.GDMetaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDAvatar_95959595corriendoObjects1Objects, gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDMetaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() < 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8274772);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextoFeedback"), gdjs.JuegoCode.GDTextoFeedbackObjects1);
{for(var i = 0, len = gdjs.JuegoCode.GDTextoFeedbackObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTextoFeedbackObjects1[i].getBehavior("Text").setText("Primero debes recoger las 2 evidencias correctas.");
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDTextoFeedbackObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTextoFeedbackObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Avatar_corriendo"), gdjs.JuegoCode.GDAvatar_9595corriendoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Meta"), gdjs.JuegoCode.GDMetaObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDAvatar_95959595corriendoObjects1Objects, gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDMetaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10911916);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("OpcionA"), gdjs.JuegoCode.GDOpcionAObjects1);
gdjs.copyArray(runtimeScene.getObjects("OpcionB"), gdjs.JuegoCode.GDOpcionBObjects1);
gdjs.copyArray(runtimeScene.getObjects("OpcionC"), gdjs.JuegoCode.GDOpcionCObjects1);
gdjs.copyArray(runtimeScene.getObjects("Pregunta"), gdjs.JuegoCode.GDPreguntaObjects1);
gdjs.copyArray(runtimeScene.getObjects("TextoFeedback"), gdjs.JuegoCode.GDTextoFeedbackObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1);
}
{for(var i = 0, len = gdjs.JuegoCode.GDPreguntaObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDPreguntaObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDOpcionAObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDOpcionAObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDOpcionBObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDOpcionBObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDOpcionCObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDOpcionCObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDTextoFeedbackObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTextoFeedbackObjects1[i].getBehavior("Text").setText("Responde la pregunta para continuar.");
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDTextoFeedbackObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTextoFeedbackObjects1[i].hide(false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OpcionA"), gdjs.JuegoCode.GDOpcionAObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDOpcionAObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8651124);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextoFeedback"), gdjs.JuegoCode.GDTextoFeedbackObjects1);
{for(var i = 0, len = gdjs.JuegoCode.GDTextoFeedbackObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTextoFeedbackObjects1[i].getBehavior("Text").setText("Respuesta incorrecta. El núcleo no produce energía, esa función corresponde principalmente a la mitocondria.");
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDTextoFeedbackObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTextoFeedbackObjects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PERDISTE", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OpcionB"), gdjs.JuegoCode.GDOpcionBObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDOpcionBObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10908868);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextoFeedback"), gdjs.JuegoCode.GDTextoFeedbackObjects1);
{for(var i = 0, len = gdjs.JuegoCode.GDTextoFeedbackObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTextoFeedbackObjects1[i].getBehavior("Text").setText("Respuesta incorrecta. El núcleo no produce energía, esa función corresponde principalmente a la mitocondria.");
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDTextoFeedbackObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTextoFeedbackObjects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FELICIDADES", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OpcionC"), gdjs.JuegoCode.GDOpcionCObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.JuegoCode.mapOfGDgdjs_9546JuegoCode_9546GDOpcionCObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9944628);
}
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TextoFeedback"), gdjs.JuegoCode.GDTextoFeedbackObjects1);
{for(var i = 0, len = gdjs.JuegoCode.GDTextoFeedbackObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTextoFeedbackObjects1[i].getBehavior("Text").setText("Respuesta incorrecta. Formar tejidos no es la función principal del núcleo.");
}
}
{for(var i = 0, len = gdjs.JuegoCode.GDTextoFeedbackObjects1.length ;i < len;++i) {
    gdjs.JuegoCode.GDTextoFeedbackObjects1[i].hide(false);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "PERDISTE", false);
}
}

}


};

gdjs.JuegoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.JuegoCode.GDPortadajuegoObjects1.length = 0;
gdjs.JuegoCode.GDPortadajuegoObjects2.length = 0;
gdjs.JuegoCode.GDYOObjects1.length = 0;
gdjs.JuegoCode.GDYOObjects2.length = 0;
gdjs.JuegoCode.GDBacteriaObjects1.length = 0;
gdjs.JuegoCode.GDBacteriaObjects2.length = 0;
gdjs.JuegoCode.GDMitocondriaObjects1.length = 0;
gdjs.JuegoCode.GDMitocondriaObjects2.length = 0;
gdjs.JuegoCode.GDCelula_9595vegetalObjects1.length = 0;
gdjs.JuegoCode.GDCelula_9595vegetalObjects2.length = 0;
gdjs.JuegoCode.GDTejidoObjects1.length = 0;
gdjs.JuegoCode.GDTejidoObjects2.length = 0;
gdjs.JuegoCode.GDMetaObjects1.length = 0;
gdjs.JuegoCode.GDMetaObjects2.length = 0;
gdjs.JuegoCode.GDAvatar_9595corriendoObjects1.length = 0;
gdjs.JuegoCode.GDAvatar_9595corriendoObjects2.length = 0;
gdjs.JuegoCode.GDPreguntaObjects1.length = 0;
gdjs.JuegoCode.GDPreguntaObjects2.length = 0;
gdjs.JuegoCode.GDOpcionAObjects1.length = 0;
gdjs.JuegoCode.GDOpcionAObjects2.length = 0;
gdjs.JuegoCode.GDOpcionBObjects1.length = 0;
gdjs.JuegoCode.GDOpcionBObjects2.length = 0;
gdjs.JuegoCode.GDOpcionCObjects1.length = 0;
gdjs.JuegoCode.GDOpcionCObjects2.length = 0;
gdjs.JuegoCode.GDTextoPuntosObjects1.length = 0;
gdjs.JuegoCode.GDTextoPuntosObjects2.length = 0;
gdjs.JuegoCode.GDTextoVidasObjects1.length = 0;
gdjs.JuegoCode.GDTextoVidasObjects2.length = 0;
gdjs.JuegoCode.GDTextoFeedbackObjects1.length = 0;
gdjs.JuegoCode.GDTextoFeedbackObjects2.length = 0;
gdjs.JuegoCode.GDVida1Objects1.length = 0;
gdjs.JuegoCode.GDVida1Objects2.length = 0;
gdjs.JuegoCode.GDVida2Objects1.length = 0;
gdjs.JuegoCode.GDVida2Objects2.length = 0;
gdjs.JuegoCode.GDVida3Objects1.length = 0;
gdjs.JuegoCode.GDVida3Objects2.length = 0;
gdjs.JuegoCode.GDMENBRANAObjects1.length = 0;
gdjs.JuegoCode.GDMENBRANAObjects2.length = 0;

gdjs.JuegoCode.eventsList0(runtimeScene);
gdjs.JuegoCode.GDPortadajuegoObjects1.length = 0;
gdjs.JuegoCode.GDPortadajuegoObjects2.length = 0;
gdjs.JuegoCode.GDYOObjects1.length = 0;
gdjs.JuegoCode.GDYOObjects2.length = 0;
gdjs.JuegoCode.GDBacteriaObjects1.length = 0;
gdjs.JuegoCode.GDBacteriaObjects2.length = 0;
gdjs.JuegoCode.GDMitocondriaObjects1.length = 0;
gdjs.JuegoCode.GDMitocondriaObjects2.length = 0;
gdjs.JuegoCode.GDCelula_9595vegetalObjects1.length = 0;
gdjs.JuegoCode.GDCelula_9595vegetalObjects2.length = 0;
gdjs.JuegoCode.GDTejidoObjects1.length = 0;
gdjs.JuegoCode.GDTejidoObjects2.length = 0;
gdjs.JuegoCode.GDMetaObjects1.length = 0;
gdjs.JuegoCode.GDMetaObjects2.length = 0;
gdjs.JuegoCode.GDAvatar_9595corriendoObjects1.length = 0;
gdjs.JuegoCode.GDAvatar_9595corriendoObjects2.length = 0;
gdjs.JuegoCode.GDPreguntaObjects1.length = 0;
gdjs.JuegoCode.GDPreguntaObjects2.length = 0;
gdjs.JuegoCode.GDOpcionAObjects1.length = 0;
gdjs.JuegoCode.GDOpcionAObjects2.length = 0;
gdjs.JuegoCode.GDOpcionBObjects1.length = 0;
gdjs.JuegoCode.GDOpcionBObjects2.length = 0;
gdjs.JuegoCode.GDOpcionCObjects1.length = 0;
gdjs.JuegoCode.GDOpcionCObjects2.length = 0;
gdjs.JuegoCode.GDTextoPuntosObjects1.length = 0;
gdjs.JuegoCode.GDTextoPuntosObjects2.length = 0;
gdjs.JuegoCode.GDTextoVidasObjects1.length = 0;
gdjs.JuegoCode.GDTextoVidasObjects2.length = 0;
gdjs.JuegoCode.GDTextoFeedbackObjects1.length = 0;
gdjs.JuegoCode.GDTextoFeedbackObjects2.length = 0;
gdjs.JuegoCode.GDVida1Objects1.length = 0;
gdjs.JuegoCode.GDVida1Objects2.length = 0;
gdjs.JuegoCode.GDVida2Objects1.length = 0;
gdjs.JuegoCode.GDVida2Objects2.length = 0;
gdjs.JuegoCode.GDVida3Objects1.length = 0;
gdjs.JuegoCode.GDVida3Objects2.length = 0;
gdjs.JuegoCode.GDMENBRANAObjects1.length = 0;
gdjs.JuegoCode.GDMENBRANAObjects2.length = 0;


return;

}

gdjs['JuegoCode'] = gdjs.JuegoCode;
