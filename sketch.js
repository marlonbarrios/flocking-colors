//Bubbles
//Code by Marlon Barrios Solano
// Separation
// Via Reynolds: http://www.red3d.com/cwr/steer/

// A list of vehicles/Particles
var vehicles = [];

 
function setup() {
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
  let string = "1.- Click and drag the mouse to create bubbles";
  let string2 = "2.- Move cursor and the will flock and cluster" ;
  let string3 = "3.- They react to your voice or sound level of the room";
  let string4 = "4.- Pop them one by one with the Space Bar";
  let string5 = "5.- Press E to erase the canvas.";
  let string6 = `Number of bubbles: ${particlesNumber}`


//text in canvas
  textSize(15);
  fill("white");
  textFont('Arial');  
  text(string, 50, 30);
  text(string2, 50, 60);
  text(string3, 50, 90);
  text(string4, 50, 120);
  text(string5, 50, 150);
  textSize(18);
  text(string6, 50, windowHeight - 20);
 


//Keys interaction
  function keyPressed() 
{
  if (key == 'P') 
  saveFrames('colorflock', 'png', 1, 1)

  if (key == ' ') 
  vehicles.splice(0, 1);

  if (key == "E")
  vehicles.splice(0, vehicles.length);

  }
}

//Bubble creation
function mouseDragged() {
  vehicles.push(new Vehicle(mouseX,mouseY));
}

function keyPressed() 
{
  if (key == 'P') 
  saveFrames('bubbles', 'png', 1, 1)

  if (key == ' ') 
  vehicles.splice(0, 1);

  if (key == "E")
  vehicles.splice(0, vehicles.length);

  }

