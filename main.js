function setup(){
    canvas = createCanvas(550,400);

    canvas.position(900, 245);

    video = createCapture(VIDEO);

video.size(550, 400);

poseNet = ml5.poseNet(video, modelloaded); 

poseNet.on('pose', gotPoses);
}

function preload(){

}

function draw(){
background("lightyellow");
}

function modelloaded(){
    console.log("Posenet is Initialized");
}

function gotPoses(error, results){
    if(error){
        console.log(error);
    }

    else{
        console.log(results);
    }
}