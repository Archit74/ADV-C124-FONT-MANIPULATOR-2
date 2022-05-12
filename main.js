difference = 0;
right_wrist_x = 0;
left_wrist_x = 0

function setup()
{
canvas = createCanvas(500, 500);
canvas.position(800, 140);
video = createCapture(VIDEO);
video.size(500, 500)
posenet = ml5.poseNet(video, modelloaded)
posenet.on('pose', gotPoses);
}

function modelloaded() 
{
    console.log("posenet is initialised");
}

function gotPoses(error, results) 
{
    if(error)
    {
        console.log(error);
    }
    else if(results.length>0)
    {
console.log(results);
left_wrist_x = results[0].pose.leftWrist.x;
console.log(left_wrist_x);

right_wrist_x =  results[0].pose.rightWrist.x;
console.log(right_wrist_x);

difference = Math.floor(left_wrist_x - right_wrist_x);
console.log(difference);
    }
}

function draw()
{
background('#969A97');
document.getElementById("span_result").innerHTML = " Font size will be  "+difference +"px" ;
fill('#F90093');
stroke('#F90093');
textSize(difference);
text("Archit", 90, 350);
}