var pastoImg,perroImg,comidaImg,huesoImg,rockImg,pelotaImg,pasto2Img,endImg;
var treasureCollection = 0;
var comidaG,huesoG,pelotaG,rockG;
var pasto,perro,comida,hueso,rock,pelota,pasto2,end;

//GameState (Estados del juego)
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pastoImg = loadImage("pasto.gif");
  pasto2Img = loadImage("pasto2.jpg");
  perroImg = loadImage("perro.png");
  comidaImg = loadImage("croquetas.png");
  huesoImg = loadImage("hueso.png");
  rockImg = loadImage("Roca.png");
  pelotaImg = loadImage("pelota.png");
  endImg =loadImage("gameOver.png");
}

function setup() {
    
    createCanvas(400,450);
    // Mover el fondo
    pasto=createSprite(200,100);
    pasto.addImage(pastoImg);
    pasto.velocityY = 4;

   




    perro = createSprite(150,350,20,20);
    perro.scale =0.3;
    perro.addImage(perroImg);
  
  
comidaG=new Group();
huesoG=new Group();
pelotaG=new Group();
rockG=new Group();
}

function draw() {

    
    if(gameState===PLAY){
        background(0);
        perro.x = World.mouseX;
        
        edges= createEdgeSprites();
        perro.collide(edges);
        
  
        
        
        //código para reiniciar el fondo
        if(pasto.y > 100 ){
          pasto.y = height/2;
        }
              
        createComida();
        createHueso();
        createPelota();
        createRock();

        


        if (comidaG.isTouching(perro)) {
            comidaG.destroyEach();
            treasureCollection=treasureCollection+50;
        }
        else if (huesoG.isTouching(perro)) {
            huesoG.destroyEach();
            treasureCollection=treasureCollection+100;
        }
        else if(pelotaG.isTouching(perro)) {
            pelotaG.destroyEach();
            treasureCollection= treasureCollection + 150;
        }
        else if(rockG.isTouching(perro)) {
            gameState=END;
            pasto2=createSprite(200,230);
             pasto2.addImage(pasto2Img);
             end=createSprite(200,230);
             end.addImage(endImg);
             end.scale =0.5;
             

        
            
    
            
            
            comidaG.destroyEach();
            huesoG.destroyEach();
            pelotaG.destroyEach();
            rockG.destroyEach();
            
            comidaG.setVelocityYEach(0);
            huesoG.setVelocityYEach(0);
            pelotaG.setVelocityYEach(0);
            rockG.setVelocityYEach(0);
        }
    }

    drawSprites();
    textSize(20);
    fill(255);
    text("Puntos: "+ treasureCollection,10,30);    
}

    

    function createComida() {
      if (World.frameCount % 200 == 0) {
      var comida = createSprite(Math.round(random(50, 350),40, 10, 10));
      comida.addImage(comidaImg);
      comida.scale=0.2;
      comida.velocityY = 3;
      comida.lifetime = 150;
      comidaG.add(comida);
      }
    }
    
    function createHueso() {
      if (World.frameCount % 320 == 0) {
      var hueso = createSprite(Math.round(random(50, 350),40, 10, 10));
      hueso.addImage(huesoImg);
      hueso.scale=0.03;
      hueso.velocityY = 3;
      hueso.lifetime = 150;
      huesoG.add(hueso);
    }
    }
    
    function createPelota() {
      if (World.frameCount % 410 == 0) {
      var pelota = createSprite(Math.round(random(50, 350),40, 10, 10));
      pelota.addImage(pelotaImg);
      pelota.scale=0.13;
      pelota.velocityY = 3;
      pelota.lifetime = 150;
      pelotaG.add(pelota);
      }
    }
    
    function createRock(){
      if (World.frameCount % 530 == 0) {
      var rock = createSprite(Math.round(random(50, 350),40, 10, 10));
      rock.addImage(rockImg);
      rock.scale=0.1;
      rock.velocityY = 3;
      rock.lifetime = 150;
      rockG.add(rock);
      }
    }
    

        
