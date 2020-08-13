var video;
var vScale = 4;
function setup() {
    createCanvas(320,240);
    video = createCapture(VIDEO);
    video.size(width/vScale, height/vScale);
    background(51);

    
}

function draw() {
    video.loadPixels();
}