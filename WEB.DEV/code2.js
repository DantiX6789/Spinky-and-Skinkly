gdjs.perderCode = {};
gdjs.perderCode.GDFondoperderObjects1= [];
gdjs.perderCode.GDFondoperderObjects2= [];
gdjs.perderCode.GDPuntuacionFinalObjects1= [];
gdjs.perderCode.GDPuntuacionFinalObjects2= [];
gdjs.perderCode.GDjugarOTRAvezObjects1= [];
gdjs.perderCode.GDjugarOTRAvezObjects2= [];
gdjs.perderCode.GDTextodeMUERTEObjects1= [];
gdjs.perderCode.GDTextodeMUERTEObjects2= [];

gdjs.perderCode.conditionTrue_0 = {val:false};
gdjs.perderCode.condition0IsTrue_0 = {val:false};
gdjs.perderCode.condition1IsTrue_0 = {val:false};
gdjs.perderCode.condition2IsTrue_0 = {val:false};


gdjs.perderCode.mapOfGDgdjs_46perderCode_46GDjugarOTRAvezObjects1Objects = Hashtable.newFrom({"jugarOTRAvez": gdjs.perderCode.GDjugarOTRAvezObjects1});gdjs.perderCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("jugarOTRAvez"), gdjs.perderCode.GDjugarOTRAvezObjects1);

gdjs.perderCode.condition0IsTrue_0.val = false;
gdjs.perderCode.condition1IsTrue_0.val = false;
{
gdjs.perderCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.perderCode.mapOfGDgdjs_46perderCode_46GDjugarOTRAvezObjects1Objects, runtimeScene, true, false);
}if ( gdjs.perderCode.condition0IsTrue_0.val ) {
{
gdjs.perderCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.perderCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{


gdjs.perderCode.condition0IsTrue_0.val = false;
{
gdjs.perderCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.perderCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PuntuacionFinal"), gdjs.perderCode.GDPuntuacionFinalObjects1);
{for(var i = 0, len = gdjs.perderCode.GDPuntuacionFinalObjects1.length ;i < len;++i) {
    gdjs.perderCode.GDPuntuacionFinalObjects1[i].setString("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}}

}


};

gdjs.perderCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.perderCode.GDFondoperderObjects1.length = 0;
gdjs.perderCode.GDFondoperderObjects2.length = 0;
gdjs.perderCode.GDPuntuacionFinalObjects1.length = 0;
gdjs.perderCode.GDPuntuacionFinalObjects2.length = 0;
gdjs.perderCode.GDjugarOTRAvezObjects1.length = 0;
gdjs.perderCode.GDjugarOTRAvezObjects2.length = 0;
gdjs.perderCode.GDTextodeMUERTEObjects1.length = 0;
gdjs.perderCode.GDTextodeMUERTEObjects2.length = 0;

gdjs.perderCode.eventsList0(runtimeScene);
return;

}

gdjs['perderCode'] = gdjs.perderCode;
