gdjs.GameCode = {};
gdjs.GameCode.GDfondoObjects1= [];
gdjs.GameCode.GDfondoObjects2= [];
gdjs.GameCode.GDfondoObjects3= [];
gdjs.GameCode.GDfondoObjects4= [];
gdjs.GameCode.GDBloqueObjects1= [];
gdjs.GameCode.GDBloqueObjects2= [];
gdjs.GameCode.GDBloqueObjects3= [];
gdjs.GameCode.GDBloqueObjects4= [];
gdjs.GameCode.GDBush2Objects1= [];
gdjs.GameCode.GDBush2Objects2= [];
gdjs.GameCode.GDBush2Objects3= [];
gdjs.GameCode.GDBush2Objects4= [];
gdjs.GameCode.GDScoreObjects1= [];
gdjs.GameCode.GDScoreObjects2= [];
gdjs.GameCode.GDScoreObjects3= [];
gdjs.GameCode.GDScoreObjects4= [];
gdjs.GameCode.GDTextoVidaObjects1= [];
gdjs.GameCode.GDTextoVidaObjects2= [];
gdjs.GameCode.GDTextoVidaObjects3= [];
gdjs.GameCode.GDTextoVidaObjects4= [];
gdjs.GameCode.GDHeart_95Objects1= [];
gdjs.GameCode.GDHeart_95Objects2= [];
gdjs.GameCode.GDHeart_95Objects3= [];
gdjs.GameCode.GDHeart_95Objects4= [];
gdjs.GameCode.GDWalkingEnemyObjects1= [];
gdjs.GameCode.GDWalkingEnemyObjects2= [];
gdjs.GameCode.GDWalkingEnemyObjects3= [];
gdjs.GameCode.GDWalkingEnemyObjects4= [];
gdjs.GameCode.GDSpinkyObjects1= [];
gdjs.GameCode.GDSpinkyObjects2= [];
gdjs.GameCode.GDSpinkyObjects3= [];
gdjs.GameCode.GDSpinkyObjects4= [];
gdjs.GameCode.GDbalaObjects1= [];
gdjs.GameCode.GDbalaObjects2= [];
gdjs.GameCode.GDbalaObjects3= [];
gdjs.GameCode.GDbalaObjects4= [];
gdjs.GameCode.GDMuroObjects1= [];
gdjs.GameCode.GDMuroObjects2= [];
gdjs.GameCode.GDMuroObjects3= [];
gdjs.GameCode.GDMuroObjects4= [];
gdjs.GameCode.GDMuro_952Objects1= [];
gdjs.GameCode.GDMuro_952Objects2= [];
gdjs.GameCode.GDMuro_952Objects3= [];
gdjs.GameCode.GDMuro_952Objects4= [];
gdjs.GameCode.GDPuntoizquierdaObjects1= [];
gdjs.GameCode.GDPuntoizquierdaObjects2= [];
gdjs.GameCode.GDPuntoizquierdaObjects3= [];
gdjs.GameCode.GDPuntoizquierdaObjects4= [];
gdjs.GameCode.GDPuntoderechaObjects1= [];
gdjs.GameCode.GDPuntoderechaObjects2= [];
gdjs.GameCode.GDPuntoderechaObjects3= [];
gdjs.GameCode.GDPuntoderechaObjects4= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.condition3IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};
gdjs.GameCode.condition3IsTrue_1 = {val:false};


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "salto");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("izquierda");
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(250);
}{gdjs.evtTools.sound.playSound(runtimeScene, "musica de fondo.wav", true, 100, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "start.wav", false, 100, 1);
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.GameCode.GDSpinkyObjects1, gdjs.GameCode.GDSpinkyObjects2);

{for(var i = 0, len = gdjs.GameCode.GDSpinkyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSpinkyObjects2[i].setAnimationName("walking");
}
}{for(var i = 0, len = gdjs.GameCode.GDSpinkyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSpinkyObjects2[i].flipX(false);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDSpinkyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDSpinkyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSpinkyObjects1[i].setAnimationName("walking");
}
}{for(var i = 0, len = gdjs.GameCode.GDSpinkyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSpinkyObjects1[i].flipX(true);
}
}}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7969364);
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "sonido de salt.wav", false, 30, 1);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbalaObjects1Objects = Hashtable.newFrom({"bala": gdjs.GameCode.GDbalaObjects1});gdjs.GameCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDSpinkyObjects1, gdjs.GameCode.GDSpinkyObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDSpinkyObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDSpinkyObjects2[i].isFlippedX() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDSpinkyObjects2[k] = gdjs.GameCode.GDSpinkyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDSpinkyObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.GameCode.GDbalaObjects1, gdjs.GameCode.GDbalaObjects2);

{for(var i = 0, len = gdjs.GameCode.GDbalaObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbalaObjects2[i].addPolarForce(180, 480, 1);
}
}}

}


{

gdjs.copyArray(gdjs.GameCode.GDSpinkyObjects1, gdjs.GameCode.GDSpinkyObjects2);


gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDSpinkyObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDSpinkyObjects2[i].isFlippedX()) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDSpinkyObjects2[k] = gdjs.GameCode.GDSpinkyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDSpinkyObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.GameCode.GDbalaObjects1, gdjs.GameCode.GDbalaObjects2);

{for(var i = 0, len = gdjs.GameCode.GDbalaObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbalaObjects2[i].addPolarForce(0, 480, 1);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7973108);
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "shoot.wav", false, 100, 1);
}}

}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "z");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) != 0;
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition2IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7970364);
}
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Heart_"), gdjs.GameCode.GDHeart_95Objects1);
gdjs.copyArray(runtimeScene.getObjects("Spinky"), gdjs.GameCode.GDSpinkyObjects1);
gdjs.GameCode.GDbalaObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbalaObjects1Objects, (( gdjs.GameCode.GDSpinkyObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDSpinkyObjects1[0].getPointX("center")), (( gdjs.GameCode.GDSpinkyObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDSpinkyObjects1[0].getPointY("center")), "");
}{for(var i = 0, len = gdjs.GameCode.GDHeart_95Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDHeart_95Objects1[i].setWidth(gdjs.GameCode.GDHeart_95Objects1[i].getWidth() - (65));
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}
{ //Subevents
gdjs.GameCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("WalkingEnemy"), gdjs.GameCode.GDWalkingEnemyObjects3);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDWalkingEnemyObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDWalkingEnemyObjects3[i].getVariableString(gdjs.GameCode.GDWalkingEnemyObjects3[i].getVariables().get("direccion")) == "izquierda" ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDWalkingEnemyObjects3[k] = gdjs.GameCode.GDWalkingEnemyObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDWalkingEnemyObjects3.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDWalkingEnemyObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDWalkingEnemyObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDWalkingEnemyObjects3[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WalkingEnemy"), gdjs.GameCode.GDWalkingEnemyObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDWalkingEnemyObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDWalkingEnemyObjects2[i].getVariableString(gdjs.GameCode.GDWalkingEnemyObjects2[i].getVariables().get("direccion")) == "derecha" ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDWalkingEnemyObjects2[k] = gdjs.GameCode.GDWalkingEnemyObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDWalkingEnemyObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDWalkingEnemyObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDWalkingEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDWalkingEnemyObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWalkingEnemyObjects2Objects = Hashtable.newFrom({"WalkingEnemy": gdjs.GameCode.GDWalkingEnemyObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMuroObjects2Objects = Hashtable.newFrom({"Muro": gdjs.GameCode.GDMuroObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWalkingEnemyObjects2Objects = Hashtable.newFrom({"WalkingEnemy": gdjs.GameCode.GDWalkingEnemyObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMuro_95952Objects2Objects = Hashtable.newFrom({"Muro_2": gdjs.GameCode.GDMuro_952Objects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbalaObjects2Objects = Hashtable.newFrom({"bala": gdjs.GameCode.GDbalaObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWalkingEnemyObjects2Objects = Hashtable.newFrom({"WalkingEnemy": gdjs.GameCode.GDWalkingEnemyObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWalkingEnemyObjects2Objects = Hashtable.newFrom({"WalkingEnemy": gdjs.GameCode.GDWalkingEnemyObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbalaObjects2Objects = Hashtable.newFrom({"bala": gdjs.GameCode.GDbalaObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWalkingEnemyObjects2Objects = Hashtable.newFrom({"WalkingEnemy": gdjs.GameCode.GDWalkingEnemyObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWalkingEnemyObjects2Objects = Hashtable.newFrom({"WalkingEnemy": gdjs.GameCode.GDWalkingEnemyObjects2});gdjs.GameCode.eventsList7 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Muro"), gdjs.GameCode.GDMuroObjects2);
gdjs.copyArray(runtimeScene.getObjects("WalkingEnemy"), gdjs.GameCode.GDWalkingEnemyObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWalkingEnemyObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMuroObjects2Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDWalkingEnemyObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDWalkingEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDWalkingEnemyObjects2[i].returnVariable(gdjs.GameCode.GDWalkingEnemyObjects2[i].getVariables().get("direccion")).setString("derecha");
}
}{for(var i = 0, len = gdjs.GameCode.GDWalkingEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDWalkingEnemyObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Muro_2"), gdjs.GameCode.GDMuro_952Objects2);
gdjs.copyArray(runtimeScene.getObjects("WalkingEnemy"), gdjs.GameCode.GDWalkingEnemyObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWalkingEnemyObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDMuro_95952Objects2Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDWalkingEnemyObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDWalkingEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDWalkingEnemyObjects2[i].returnVariable(gdjs.GameCode.GDWalkingEnemyObjects2[i].getVariables().get("direccion")).setString("izquierda");
}
}{for(var i = 0, len = gdjs.GameCode.GDWalkingEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDWalkingEnemyObjects2[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WalkingEnemy"), gdjs.GameCode.GDWalkingEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("bala"), gdjs.GameCode.GDbalaObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbalaObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWalkingEnemyObjects2Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "izquierda";
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Heart_"), gdjs.GameCode.GDHeart_95Objects2);
gdjs.copyArray(runtimeScene.getObjects("Puntoderecha"), gdjs.GameCode.GDPuntoderechaObjects2);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.GameCode.GDScoreObjects2);
/* Reuse gdjs.GameCode.GDWalkingEnemyObjects2 */
/* Reuse gdjs.GameCode.GDbalaObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDWalkingEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDWalkingEnemyObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "destroy_the enemy.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.GameCode.GDbalaObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbalaObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWalkingEnemyObjects2Objects, (( gdjs.GameCode.GDPuntoderechaObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPuntoderechaObjects2[0].getPointX("center")), (( gdjs.GameCode.GDPuntoderechaObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPuntoderechaObjects2[0].getPointY("center")), "");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("derecha");
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(20);
}{for(var i = 0, len = gdjs.GameCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreObjects2[i].setString("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) * 1.1);
}{for(var i = 0, len = gdjs.GameCode.GDWalkingEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDWalkingEnemyObjects2[i].getBehavior("PlatformerObject").setMaxSpeed(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.GameCode.GDHeart_95Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDHeart_95Objects2[i].setWidth(gdjs.GameCode.GDHeart_95Objects2[i].getWidth() + (65));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("WalkingEnemy"), gdjs.GameCode.GDWalkingEnemyObjects2);
gdjs.copyArray(runtimeScene.getObjects("bala"), gdjs.GameCode.GDbalaObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDbalaObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWalkingEnemyObjects2Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) == "derecha";
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Heart_"), gdjs.GameCode.GDHeart_95Objects2);
gdjs.copyArray(runtimeScene.getObjects("Puntoizquierda"), gdjs.GameCode.GDPuntoizquierdaObjects2);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.GameCode.GDScoreObjects2);
/* Reuse gdjs.GameCode.GDWalkingEnemyObjects2 */
/* Reuse gdjs.GameCode.GDbalaObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDWalkingEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDWalkingEnemyObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "destroy_the enemy.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.GameCode.GDbalaObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDbalaObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWalkingEnemyObjects2Objects, (( gdjs.GameCode.GDPuntoizquierdaObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPuntoizquierdaObjects2[0].getPointX("center")), (( gdjs.GameCode.GDPuntoizquierdaObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPuntoizquierdaObjects2[0].getPointY("center")), "");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("izquierda");
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(20);
}{for(var i = 0, len = gdjs.GameCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDScoreObjects2[i].setString("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) * 1.1);
}{for(var i = 0, len = gdjs.GameCode.GDWalkingEnemyObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDWalkingEnemyObjects2[i].getBehavior("PlatformerObject").setMaxSpeed(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{for(var i = 0, len = gdjs.GameCode.GDHeart_95Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDHeart_95Objects2[i].setWidth(gdjs.GameCode.GDHeart_95Objects2[i].getWidth() + (65));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "salto");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("WalkingEnemy"), gdjs.GameCode.GDWalkingEnemyObjects1);
{for(var i = 0, len = gdjs.GameCode.GDWalkingEnemyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDWalkingEnemyObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "salto");
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWalkingEnemyObjects1Objects = Hashtable.newFrom({"WalkingEnemy": gdjs.GameCode.GDWalkingEnemyObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSpinkyObjects1Objects = Hashtable.newFrom({"Spinky": gdjs.GameCode.GDSpinkyObjects1});gdjs.GameCode.eventsList8 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "game over.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "perder", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Spinky"), gdjs.GameCode.GDSpinkyObjects1);
gdjs.copyArray(runtimeScene.getObjects("WalkingEnemy"), gdjs.GameCode.GDWalkingEnemyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDWalkingEnemyObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDSpinkyObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "game over.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "perder", false);
}}

}


};gdjs.GameCode.eventsList9 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0(runtimeScene);
}


{


gdjs.GameCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Spinky"), gdjs.GameCode.GDSpinkyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDSpinkyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDSpinkyObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDSpinkyObjects1[k] = gdjs.GameCode.GDSpinkyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDSpinkyObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDSpinkyObjects1 */
{gdjs.evtTools.camera.centerCameraWithinLimits(runtimeScene, (gdjs.GameCode.GDSpinkyObjects1.length !== 0 ? gdjs.GameCode.GDSpinkyObjects1[0] : null), 0, 0, 1660, 706, true, "", 0);
}
{ //Subevents
gdjs.GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Spinky"), gdjs.GameCode.GDSpinkyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDSpinkyObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDSpinkyObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDSpinkyObjects1[k] = gdjs.GameCode.GDSpinkyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDSpinkyObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDSpinkyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDSpinkyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSpinkyObjects1[i].setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Spinky"), gdjs.GameCode.GDSpinkyObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDSpinkyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDSpinkyObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDSpinkyObjects1[k] = gdjs.GameCode.GDSpinkyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDSpinkyObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDSpinkyObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDSpinkyObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDSpinkyObjects1[i].setAnimationName("jump");
}
}
{ //Subevents
gdjs.GameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


{


gdjs.GameCode.eventsList7(runtimeScene);
}


{


gdjs.GameCode.eventsList8(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDfondoObjects1.length = 0;
gdjs.GameCode.GDfondoObjects2.length = 0;
gdjs.GameCode.GDfondoObjects3.length = 0;
gdjs.GameCode.GDfondoObjects4.length = 0;
gdjs.GameCode.GDBloqueObjects1.length = 0;
gdjs.GameCode.GDBloqueObjects2.length = 0;
gdjs.GameCode.GDBloqueObjects3.length = 0;
gdjs.GameCode.GDBloqueObjects4.length = 0;
gdjs.GameCode.GDBush2Objects1.length = 0;
gdjs.GameCode.GDBush2Objects2.length = 0;
gdjs.GameCode.GDBush2Objects3.length = 0;
gdjs.GameCode.GDBush2Objects4.length = 0;
gdjs.GameCode.GDScoreObjects1.length = 0;
gdjs.GameCode.GDScoreObjects2.length = 0;
gdjs.GameCode.GDScoreObjects3.length = 0;
gdjs.GameCode.GDScoreObjects4.length = 0;
gdjs.GameCode.GDTextoVidaObjects1.length = 0;
gdjs.GameCode.GDTextoVidaObjects2.length = 0;
gdjs.GameCode.GDTextoVidaObjects3.length = 0;
gdjs.GameCode.GDTextoVidaObjects4.length = 0;
gdjs.GameCode.GDHeart_95Objects1.length = 0;
gdjs.GameCode.GDHeart_95Objects2.length = 0;
gdjs.GameCode.GDHeart_95Objects3.length = 0;
gdjs.GameCode.GDHeart_95Objects4.length = 0;
gdjs.GameCode.GDWalkingEnemyObjects1.length = 0;
gdjs.GameCode.GDWalkingEnemyObjects2.length = 0;
gdjs.GameCode.GDWalkingEnemyObjects3.length = 0;
gdjs.GameCode.GDWalkingEnemyObjects4.length = 0;
gdjs.GameCode.GDSpinkyObjects1.length = 0;
gdjs.GameCode.GDSpinkyObjects2.length = 0;
gdjs.GameCode.GDSpinkyObjects3.length = 0;
gdjs.GameCode.GDSpinkyObjects4.length = 0;
gdjs.GameCode.GDbalaObjects1.length = 0;
gdjs.GameCode.GDbalaObjects2.length = 0;
gdjs.GameCode.GDbalaObjects3.length = 0;
gdjs.GameCode.GDbalaObjects4.length = 0;
gdjs.GameCode.GDMuroObjects1.length = 0;
gdjs.GameCode.GDMuroObjects2.length = 0;
gdjs.GameCode.GDMuroObjects3.length = 0;
gdjs.GameCode.GDMuroObjects4.length = 0;
gdjs.GameCode.GDMuro_952Objects1.length = 0;
gdjs.GameCode.GDMuro_952Objects2.length = 0;
gdjs.GameCode.GDMuro_952Objects3.length = 0;
gdjs.GameCode.GDMuro_952Objects4.length = 0;
gdjs.GameCode.GDPuntoizquierdaObjects1.length = 0;
gdjs.GameCode.GDPuntoizquierdaObjects2.length = 0;
gdjs.GameCode.GDPuntoizquierdaObjects3.length = 0;
gdjs.GameCode.GDPuntoizquierdaObjects4.length = 0;
gdjs.GameCode.GDPuntoderechaObjects1.length = 0;
gdjs.GameCode.GDPuntoderechaObjects2.length = 0;
gdjs.GameCode.GDPuntoderechaObjects3.length = 0;
gdjs.GameCode.GDPuntoderechaObjects4.length = 0;

gdjs.GameCode.eventsList9(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
