gdjs.MenuCode = {};
gdjs.MenuCode.GDbackgroundObjects1= [];
gdjs.MenuCode.GDbackgroundObjects2= [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDEmptyObjects1= [];
gdjs.MenuCode.GDEmptyObjects2= [];
gdjs.MenuCode.GDGuideObjects1= [];
gdjs.MenuCode.GDGuideObjects2= [];
gdjs.MenuCode.GDEarth_95logoObjects1= [];
gdjs.MenuCode.GDEarth_95logoObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};


gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDbackgroundObjects1Objects = Hashtable.newFrom({"background": gdjs.MenuCode.GDbackgroundObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDTitleObjects1Objects = Hashtable.newFrom({"Title": gdjs.MenuCode.GDTitleObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDEmptyObjects1Objects = Hashtable.newFrom({"Empty": gdjs.MenuCode.GDEmptyObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDEarth_9595logoObjects1Objects = Hashtable.newFrom({"Earth_logo": gdjs.MenuCode.GDEarth_95logoObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDTitleObjects1Objects = Hashtable.newFrom({"Title": gdjs.MenuCode.GDTitleObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDEarth_9595logoObjects1Objects = Hashtable.newFrom({"Earth_logo": gdjs.MenuCode.GDEarth_95logoObjects1});gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDTitleObjects1Objects = Hashtable.newFrom({"Title": gdjs.MenuCode.GDTitleObjects1});gdjs.MenuCode.eventsList0x5b7338 = function(runtimeScene) {

{

gdjs.MenuCode.GDbackgroundObjects1.createFrom(runtimeScene.getObjects("background"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDbackgroundObjects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
gdjs.MenuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Gameplay", true);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDGuideObjects1.createFrom(runtimeScene.getObjects("Guide"));
gdjs.MenuCode.GDTitleObjects1.createFrom(runtimeScene.getObjects("Title"));
{gdjs.evtTools.sound.playMusic(runtimeScene, "Dancing_on_Green_Grass.mp3", true, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), 1);
}{for(var i = 0, len = gdjs.MenuCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTitleObjects1[i].addForceTowardPosition(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)), gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)), gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)), 1);
}
}{for(var i = 0, len = gdjs.MenuCode.GDGuideObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDGuideObjects1[i].hide();
}
}}

}


{

gdjs.MenuCode.GDEmptyObjects1.createFrom(runtimeScene.getObjects("Empty"));
gdjs.MenuCode.GDTitleObjects1.createFrom(runtimeScene.getObjects("Title"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDTitleObjects1Objects, gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDEmptyObjects1Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)), false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.MenuCode.GDEarth_95logoObjects1.createFrom(runtimeScene.getObjects("Earth_logo"));
gdjs.MenuCode.GDGuideObjects1.createFrom(runtimeScene.getObjects("Guide"));
/* Reuse gdjs.MenuCode.GDTitleObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTitleObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.MenuCode.GDGuideObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDGuideObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.MenuCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDTitleObjects1[i].showShadow(true);
}
}{for(var i = 0, len = gdjs.MenuCode.GDGuideObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDGuideObjects1[i].showShadow(true);
}
}{for(var i = 0, len = gdjs.MenuCode.GDEarth_95logoObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDEarth_95logoObjects1[i].addForceTowardObject((gdjs.MenuCode.GDTitleObjects1.length !== 0 ? gdjs.MenuCode.GDTitleObjects1[0] : null), 80, 1);
}
}}

}


{

gdjs.MenuCode.GDEarth_95logoObjects1.createFrom(runtimeScene.getObjects("Earth_logo"));
gdjs.MenuCode.GDTitleObjects1.createFrom(runtimeScene.getObjects("Title"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDEarth_9595logoObjects1Objects, gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDTitleObjects1Objects, false, runtimeScene, true);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.MenuCode.GDEarth_95logoObjects1 */
{for(var i = 0, len = gdjs.MenuCode.GDEarth_95logoObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDEarth_95logoObjects1[i].clearForces();
}
}}

}


{

gdjs.MenuCode.GDEarth_95logoObjects1.createFrom(runtimeScene.getObjects("Earth_logo"));
gdjs.MenuCode.GDTitleObjects1.createFrom(runtimeScene.getObjects("Title"));

gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDEarth_9595logoObjects1Objects, gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDTitleObjects1Objects, true, runtimeScene, false);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Cartoon_Boing.mp3", 3, false, gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)), 1);
}}

}


}; //End of gdjs.MenuCode.eventsList0x5b7338


gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDbackgroundObjects1.length = 0;
gdjs.MenuCode.GDbackgroundObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDEmptyObjects1.length = 0;
gdjs.MenuCode.GDEmptyObjects2.length = 0;
gdjs.MenuCode.GDGuideObjects1.length = 0;
gdjs.MenuCode.GDGuideObjects2.length = 0;
gdjs.MenuCode.GDEarth_95logoObjects1.length = 0;
gdjs.MenuCode.GDEarth_95logoObjects2.length = 0;

gdjs.MenuCode.eventsList0x5b7338(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
