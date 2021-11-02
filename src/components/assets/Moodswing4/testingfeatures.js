function preload() {
    moon=loadImage("assets/moonwalk.jpg", img => moonCopy = img.get());
}
 
function setup()   {
    createCanvas(windowWidth, windowHeight);
    imageRatio = moon.height/moon.width;
    print("imageRatio: "+imageRatio);
}
 
function draw() {
    background(255);
    image(moonCopy,0,0);
}
 
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    print("resizing to: "+windowWidth+" "+windowHeight);
    if (windowWidth < moon.width){
        moonCopy = moon.get();
        moonCopy.resize(windowWidth,0);
    }
}