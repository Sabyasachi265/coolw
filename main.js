NoseX=0;
NoseY=0;

function preload(){
   clownNose = loadImage('https://i.postimg.cc/Hk2Hx1sy/Clown-Nose-Download-PNG-Image.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300)
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    fill(0,128,128);
    stroke(128,0,0);
    circle(NoseX, NoseY, 20);
    image(clownNose, NoseX, NoseY, 50, 50)
}

function first(){
    save('pointimage123.png');
    
}

function modelLoaded(){
    console.log("posenet is initialized");
}

function gotPoses(results){
    if(results.length>0){
    console.log(results);
    NoseX = results[0].pose.nose.x-15;
    NoseY = results[0].pose.nose.y-15;
    console.log("nose x = "+NoseX);
    console.log("nose y = "+NoseY);
    }
}

