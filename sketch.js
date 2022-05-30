// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 3: Separation and Seek

// Separation
// Via Reynolds: http://www.red3d.com/cwr/steer/

// A list of vehicles
var vehicles = [];
var mic;
 


function setup() {
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
  createCanvas(windowWidth,windowHeight);
  // We are now making random vehicles and storing them in an array
  for (var i = 0; i < vehicles.length; i++) {
    vehicles.push(new Vehicle(random(width),random(height)));
  }
  
 

}




function draw() {
 

background(0);

  for (var i = 0; i < vehicles.length; i++) {
    vehicles[i].applyBehaviors(vehicles);
    vehicles[i].update();
    vehicles[i].borders();
    vehicles[i].display(); 
  }

  let particlesNumber = vehicles.length;
  let string = "1.- Click and drag the mouse to create particles. 2.- Move cursor and the will flock. 3.- They react to your voice or sound level of the room. "
  let string2 = `4.- Use Spacebar to delete particles one by one. 5.- Press E to clear the canvas. `
let string3 = `Number of particles: ${vehicles.length}`
  textSize(20);
  fill("white");
  textFont('Helvetica');  
  text(string, 50, 30);
  text(string2, 50, 60);
  textSize(25);
  text(string3, 50, 90);
}


function mouseDragged() {
  vehicles.push(new Vehicle(mouseX,mouseY));
}

function keyPressed() 
{
  if (key == 'P') 
  saveFrames('colorflock', 'png', 1, 1)

  if (key == ' ') 
  vehicles.splice(0, 1);

  if (key == "E")
  vehicles.splice(0, vehicles.length);

  }








