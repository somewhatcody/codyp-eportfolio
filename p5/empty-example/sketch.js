var textx=-1000;

function setup() {   
   createCanvas(600,400);
}

function draw() { 
   background(10,20,25);     
   fill(255,255,255);
   ellipse(300,150,100,100);
   fill(255,255,255);
   triangle(250,300,300,200,350,300); 
   fill(0,0,0);
   rect(260,130,10,40);
   rect(330,130,10,40);//right eye
   noFill(); 
   stroke(0, 0, 0);
   strokeWeight(3)
   arc(300, 160, 110, 50, 0, PI / 1.0);
        
   fill(255,255,0);
   noStroke();
   textSize(30);   
   textFont("Georgia");   
   textStyle(ITALIC);   
   textAlign(LEFT);   
   text("HELLO AND WELCOME, TAKE OFF YOUR SHOES ON YOUR WAY IN!",textx,24);     
          //add a conditional
  if (textx< -1000){     
     textx = 600;   
  }else{     
     textx=textx  -4     ;   
  }
}
