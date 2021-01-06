var hours, mins, secs , hrAngle, scAngle, mnAngle;
function setup() {
  createCanvas(800,800);

  angleMode(DEGREES);

}

function draw() {
  background(0);  
  translate (400,400);

  hours=hour();
  mins=minute();
  secs=second();

  scAngle=map(secs,0,60,0,360);
  mnAngle=map(mins,0,60,0,360);
  hrAngle=map(hours,0,60,0,360);

  push ();
  rotate(scAngle);
  stroke("blue");
  strokeWeight(10);
  line(0,0,250,100);
  pop();

  push ();
  rotate(mnAngle);
  stroke("green");
  strokeWeight(10);
  line(0,0,320,50);
  pop();

  push ();
  rotate(hrAngle);
  stroke("red");
  strokeWeight(10);
  line(0,0,150,50);
  pop();

  push();
  noFill();
  stroke("blue");
  strokeWeight(5);
  arc(0,0,700,700,scAngle+20,270);
  pop ();

  push();
  noFill();
  stroke("green");
  strokeWeight(5);
  arc(0,0,680,680,mnAngle+10,270);
  pop ();

  push();
  noFill();
  stroke("red");
  strokeWeight(5);
  arc(0,0,720,720,hrAngle+20,270);
  pop ();

  drawSprites();
}

//arc(x,y,width,height,scAngle/mnAngle,hrAngle);