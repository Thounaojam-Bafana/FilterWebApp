function preload(){}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded)
}
function draw(){
    image(video, 0,0,300,300);
}
function take_snapshot(){
    save("Filtered Image");
}
function modelLoaded(){
    console.log("Posenet is instialize");
    poseNet.on('pose',gotposes);
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
        console.log("NoseX: " + results[0].pose.nose.x);
        console.log("NoseY: " + results[0].pose.nose.y);
    }
}
