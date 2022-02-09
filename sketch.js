var background;
var kiwiImg, dragonImg, orangeImg, lemonImg;
var basket_img;
var broccolliImg , cabbageImg , carrotImg , pepperImg;
var virusGreen , virusOrange , virusBlue;
var syringeImg, soapImg , sanitizerImg , bottleImg;


function preload(){
  
 // backgroundImage = loadImage("background0.png");
  
  backImg = loadImage("background.jpg");
  basketImg = loadImage("basket.png");
  kiwiImg = loadImage("kiwi.png");
  dragonImg = loadImage("dragon.png");
  orangeImg = loadImage("orange2.png");
  lemonImg = loadImage("lemon.png");
  broccolliImg = loadImage("broccolli.png");
  cabbageImg = loadImage("cabbage.png");
  carrotImg = loadImage("carrot.png");
  pepperImg = loadImage("pepper2.png");
  virusGreen = loadImage("virus.png");
  virusOrange = loadImage("virus2.png");
  virusBlue = loadImage("virus3.png");
  syringeImg = loadImage("syringe.png");
  soapImg = loadImage("soap.png");
  sanitizerImg = loadImage("sanitizer.png");
  bottleImg = loadImage("bottle.png");
  
}



function setup() {
  createCanvas(1500, 700);
  
  //creating background
 // background = createSprite(1000, 0, 1000 , 800);
 // background.addImage(backImg);
 // background.scale = 5
  
  basket = createSprite(300,425,20,50);
  basket.addImage(basketImg);
  basket.scale = 0.5

  kiwi = createSprite(100,220,20,50);
  kiwi.addImage(kiwiImg);
  kiwi.scale = 0.12

  dragon = createSprite(150,220,20,50);
  dragon.addImage(dragonImg);
  dragon.scale = 0.13

  orange = createSprite(200,220,20,50);
  orange.addImage(orangeImg);
  orange.scale = 1

  lemon = createSprite(250,220,20,50);
  lemon.addImage(lemonImg);
  lemon.scale = 0.1

  broccolli = createSprite(300,220,20,50);
  broccolli.addImage(broccolliImg);
  broccolli.scale = 0.12

  carrot = createSprite(350,220,20,50);
  carrot.addImage(carrotImg);
  carrot.scale = 0.12

  cabbage = createSprite(400,220,20,50);
  cabbage.addImage(cabbageImg);
  cabbage.scale = 0.12

  pepper = createSprite(200,300,20,50);
  pepper.addImage(pepperImg);
  pepper.scale = 0.12

  virusG = createSprite(480,220,20,50);
  virusG.addImage(virusGreen);
  virusG.scale = 0.25

  virusO = createSprite(550,220,20,50);
  virusO.addImage(virusOrange);
  virusO.scale = 0.25

  virusB = createSprite(50,220,20,50);
  virusB.addImage(virusBlue);
  virusB.scale = 0.25

  syringe = createSprite(480,300,20,50);
  syringe.addImage(syringeImg);
  syringe.scale = 0.15

  soap = createSprite(410,300,20,50);
  soap.addImage(soapImg);
  soap.scale = 0.13

  sanitizer = createSprite(350,300,20,50);
  sanitizer.addImage(sanitizerImg);
  sanitizer.scale = 0.15

  bottle = createSprite(300,300,20,50);
  bottle.addImage(bottleImg);
  bottle.scale = 0.15

 }

 function draw() {
 background(backImg)

 basket.x = World.mouseX;
 edges= createEdgeSprites();
 basket.collide(edges);
  
   drawSprites();

   var select_sprites = Math.round(random(1,3));
  
  /* if (frameCount % 80 == 0) {
     if (select_sprites == 1) {
       createApples();
     } else if (select_sprites == 2) {
       createOrange();
     } else if  {
       createRed();
       else if {
         
         
       }
     }*/
   }
// }

 function createKiwi() {
  kiwi = createSprite(random(50, 350),40, 10, 10);
  kiwi.addImage(kiwiImg);
  //kiwi.scale=0.07;
  kiwi.velocityY = 3;
  kiwi.lifetime = 150;
    
  }
  
  function createDragon() {
  dragon = createSprite(random(50, 350),40, 10, 10);
  dragon.addImage(dragonImg);
  //dragon.scale=0.08;
  dragon.velocityY = 3;
  dragon.lifetime = 150;
  }
  
  function createLemon() {
  lemon = createSprite(random(50, 350),40, 10, 10);
  lemon.addImage(lemonImg);
  //lemon.scale=0.06;
  lemon.velocityY = 3;
  lemon.lifetime = 150;
  }

  function createOrange() {
    orange = createSprite(random(50, 350),40, 10, 10);
    orange.addImage(orangeImg);
   // orange.scale=0.07;
    orange.velocityY = 3;
    orange.lifetime = 150;
      
    }
    
    function createBroccolli() {
    broccolli = createSprite(random(50, 350),40, 10, 10);
    broccolli.addImage(broccolliImg);
    //broccolli.scale=0.08;
    broccolli.velocityY = 3;
    broccolli.lifetime = 150;
    }
    
    function createCarrot() {
    carrot = createSprite(random(50, 350),40, 10, 10);
    carrot.addImage(carrotImg);
    //carrot.scale=0.06;
    carrot.velocityY = 3;
    carrot.lifetime = 150;
    }

    function createCabbage() {
      cabbage = createSprite(random(50, 350),40, 10, 10);
      cabbage.addImage(cabbageImg);
     // cabbage.scale=0.07;
      cabbage.velocityY = 3;
      cabbage.lifetime = 150;
        
      }
      
      function createPepper() {
      pepper = createSprite(random(50, 350),40, 10, 10);
      pepper.addImage(pepperImg);
      //pepper.scale=0.08;
      pepper.velocityY = 3;
      pepper.lifetime = 150;
      }
      
      function createVirusG() {
      virusG = createSprite(random(50, 350),40, 10, 10);
      virusG.addImage(virusGreen);
     // virusG.scale=0.06;
      virusG.velocityY = 3;
      virusG.lifetime = 150;
      }

      function createVirusO() {
        virusG = createSprite(random(50, 350),40, 10, 10);
        virusG.addImage(virusGreen);
       // virusG.scale=0.07;
        virusG.velocityY = 3;
        virusG.lifetime = 150;
          
        }
        
        function createVirusB() {
        virusB = createSprite(random(50, 350),40, 10, 10);
        virusB.addImage(virusBlue);
       // virusB.scale=0.08;
        virusB.velocityY = 3;
        virusB.lifetime = 150;
        }
        
        function createSyringe() {
        syringe = createSprite(random(50, 350),40, 10, 10);
        syringe.addImage(syringeImg);
        //syringe.scale=0.06;
        syringe.velocityY = 3;
        syringe.lifetime = 150;
        }
        function createSoap() {
          soap = createSprite(random(50, 350),40, 10, 10);
          soap.addImage(soapImg);
         // soap.scale=0.07;
          soap.velocityY = 3;
          soap.lifetime = 150;
            
          }
          
          function createSanitizer() {
          sanitizer = createSprite(random(50, 350),40, 10, 10);
          sanitizer.addImage(sanitizerImg);
         // sanitizer.scale=0.08;
          sanitizer.velocityY = 3;
          sanitizer.lifetime = 150;
          }
          
          function createBottle() {
          bottle = createSprite(random(50, 350),40, 10, 10);
          bottle.addImage(bottleImg);
         // bottle.scale=0.06;
          bottle.velocityY = 3;
          bottle.lifetime = 150;
          }
                              