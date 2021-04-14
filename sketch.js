const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hr;
var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add

if (backgroundImg)
background(backgroundImg)
    Engine.update(engine);

    // write code to display time in correct format here
if (hr  >=12 ){
text("time:"+hr%12+"PM",50,100)
}else if (hr===0){
text("time:12AM" ,100,100)
}else {
    text("time:"+hr%12+"PM",50,100)

}

}

async function getBackgroundImg(){

    // write code to fetch time from API
var getinfo=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
var infotype=await getinfo.json();
var time = infotype.datetime
    // write code slice the datetime
hr=time.slice(11,13)

    // add conditions to change the background images from sunrise to sunset
    if (hr  >=04 && hr <=06 ){
      bg="sunrise1.png"
        }else if (hr >=06 && hr <= 08){
            bg="sunrise2.png"
        }else if (hr >=08 && hr <= 10){
            bg="sunrise3.png"
        }else if (hr >=10 && hr <= 12){
            bg="sunrise4.png"
        }else if (hr >=12 && hr <= 14){
            bg="sunrise5.png"
        }else if (hr >=14 && hr <= 16){
            bg="sunrise6.png"
        }else if (hr >=16 && hr <= 18){
            bg="sunset7.png"
        }else if (hr >=18 && hr <= 20){
            bg="sunset8.png"
        }else if (hr >=20 && hr <= 22){
            bg="sunset9.png"
        }else if (hr >=22 && hr <= 24){
            bg="sunset10.png"
        }else if (hr ===0 && hr <= 03){
            bg="sunset11.png"
        }else {
            bg="sunset12.png"
        }






    //load the image in backgroundImg variable here
backgroundImg=loadImage(bg)
}
