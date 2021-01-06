gdjs.menuCode = {};
gdjs.menuCode.GDbackgroundMENUObjects1= [];
gdjs.menuCode.GDbackgroundMENUObjects2= [];
gdjs.menuCode.GDPlayObjects1= [];
gdjs.menuCode.GDPlayObjects2= [];
gdjs.menuCode.GDtextObjects1= [];
gdjs.menuCode.GDtextObjects2= [];

gdjs.menuCode.conditionTrue_0 = {val:false};
gdjs.menuCode.condition0IsTrue_0 = {val:false};
gdjs.menuCode.condition1IsTrue_0 = {val:false};
gdjs.menuCode.condition2IsTrue_0 = {val:false};


gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.menuCode.GDPlayObjects1});gdjs.menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.menuCode.GDPlayObjects1);

gdjs.menuCode.condition0IsTrue_0.val = false;
gdjs.menuCode.condition1IsTrue_0.val = false;
{
gdjs.menuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.menuCode.mapOfGDgdjs_46menuCode_46GDPlayObjects1Objects, runtimeScene, true, false);
}if ( gdjs.menuCode.condition0IsTrue_0.val ) {
{
gdjs.menuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.menuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDbackgroundMENUObjects1.length = 0;
gdjs.menuCode.GDbackgroundMENUObjects2.length = 0;
gdjs.menuCode.GDPlayObjects1.length = 0;
gdjs.menuCode.GDPlayObjects2.length = 0;
gdjs.menuCode.GDtextObjects1.length = 0;
gdjs.menuCode.GDtextObjects2.length = 0;

gdjs.menuCode.eventsList0(runtimeScene);
return;

}

gdjs['menuCode'] = gdjs.menuCode;
