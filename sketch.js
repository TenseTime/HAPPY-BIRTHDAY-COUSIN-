
function preload(){
  m1 = loadImage("1.png"); 
  m2 = loadImage("2.png");
  m3 = loadImage("3.png");
  m4 = loadImage("4.png");
  m5 = loadImage("5.png"); 
  m6 = loadImage("6.png");
  m7 = loadImage("7.png");
  m8 = loadImage("8.png");
  m9 = loadImage("9.png"); 
  m10 = loadImage("10.png");
  m11 = loadImage("11.png");
  m12 = loadImage("12.png");

  p1 = loadImage("Pawn1.png");
  p2 = loadImage("Pawn2.png");
  p3 = loadImage("Pawn3.png");
  p4 = loadImage("Pawn4.png");
  p51 = loadImage("Pawn5.png"); 
  p6 = loadImage("Pawn6.png");
  p7 = loadImage("Pawn7.png");
  p8 = loadImage("Pawn8.png");
  p9 = loadImage("Pawn9.png"); 
  p10 = loadImage("Pawn10.png");
  p11 = loadImage("Pawn11.png");
  p12 = loadImage("Pawn12.png");

  fire = loadImage("Ice.png")

  color12 = loadImage("Background gradient.jpg");
  engine = loadImage("Sun.png");

  
  
}

function setup(){

  background1 = createSprite(0,0,1000000,100000);
  background1.visible=false;

  

  handle = createSprite(1200,400,500,600)
  handle.addImage(engine);

  b1 = createSprite(200,200,200,200);
  b1.addImage(m12);
  b2 = createSprite(401,200,200,200);
  b2.addImage(m11);
  b3 = createSprite(602,200,200,200);
  b3.addImage(m10);
  b4 = createSprite(803,200,200,200);
  b4.addImage(m9);

  b21 = createSprite(200,401,200,200);
  b21.addImage(m8);
  b22 = createSprite(401,401,200,200);
  b22.addImage(m7);
  b23 = createSprite(602,401,200,200);
  b23.addImage(m6);
  b24 = createSprite(803,401,200,200);
  b24.addImage(m5);

  b31 = createSprite(200,602,200,200);
  b31.addImage(m4);
  b32 = createSprite(401,602,200,200);
  b32.addImage(m3);
  b33 = createSprite(602,602,200,200);
  b33.addImage(m2);
  b34 = createSprite(803,602,200,200);
  b34.addImage(m1);

}

function draw(){
  createCanvas(windowWidth,windowHeight);
  //background(color12);
  fill("white")
  text("X:"+mouseX, 100,50);
  text("Y:"+mouseY,100,70);


  
  if(mousePressedOver(background1)){
    cursor1 = createSprite(mouseX,mouseY,10,10);
    cursor1.addImage(fire);
    cursor1.scale=0.1;
    cursor1.shapeColor="red";
    cursor1.lifetime = 50;
    if(cursor1.isTouching(b34)){
      b34.addImage(p1);
      cursor1.destroy();
    }
    if(cursor1.isTouching(b33)){
      b33.addImage(p2);
      cursor1.destroy();
    }
    if(cursor1.isTouching(b32)){
      b32.addImage(p3);
      cursor1.destroy();
    }
    if(cursor1.isTouching(b31)){
      b31.addImage(p4);
      cursor1.destroy();
    }
    if(cursor1.isTouching(b24)){
      b24.addImage(p51);
      cursor1.destroy();
    }
    if(cursor1.isTouching(b23)){
      b23.addImage(p6);
      cursor1.destroy();
    }
    if(cursor1.isTouching(b22)){
      b22.addImage(p7);
      cursor1.destroy();
    }
    if(cursor1.isTouching(b21)){
      b21.addImage(p8);
      cursor1.destroy();
    }
    if(cursor1.isTouching(b4)){
      b4.addImage(p9);
      cursor1.destroy();
    }
    if(cursor1.isTouching(b3)){
      b3.addImage(p10);
      cursor1.destroy();
    }
    if(cursor1.isTouching(b2)){
      b2.addImage(p11);
      cursor1.destroy();
    }
    if(cursor1.isTouching(b1)){
      b1.addImage(p12);
      cursor1.destroy();
    }
    
    
  }
  
  //console.log(cursor1.x)

  drawSprites();
}