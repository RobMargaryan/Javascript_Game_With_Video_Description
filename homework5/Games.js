
   const canvas =document.getElementById('canvas');
   const context = canvas.getContext('2d');
  
   const rand = function(num) {
    return Math.floor(Math.random() * num) + 1;
  }
  delta = [-3, 1, 3];
   array=[];
   canvas.width=4000;
   canvas.height =4000;

   const background = new Image();
    background.src = 'https://vignette.wikia.nocookie.net/mkwikia/images/5/5e/Meteor_Storm_Arena.jpg/revision/latest?cb=20110427161328';

   const Chaxo = new Image ();
   Chaxo.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Barney_Gumble.png/220px-Barney_Gumble.png'
;
   const Dinozavr =new Image();
   Dinozavr.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Waluigi.png/180px-Waluigi.png';
    
       const GexiHeros = {
        x: 0,
        y: 223,
        width: 100,
        height: 100,
        xDelta: 0,
        yDelta: 0,
      image: Chaxo,
      draw: function(){
         context.drawImage(this.image, this.x, this.y, this.width, this.height);
      },
      update: function(){
        this.x += this.xDelta;
        this.y += this.yDelta;
      }
    };  

    const Gesher= function (count, canvasWidth, canvasHeight) {
        canvas.width= canvasWidth;
      canvas.height =canvasHeight;

        for(let i=0;i<count;i++){
           array[i]= {
            x:rand(canvas.width-50),
            y:rand(canvas.height-50), 
            width: 100,
            height: 100,
            xDelta: delta[rand(3)-1],
            yDelta: delta[rand(3)-1],
            xdir: 1,
            ydir: -1,
            image:Dinozavr,    
            draw: function(){
          context.drawImage(this.image,this.x,this.y,this.width,this.height);
      },
          update: function(){
              if(this.x + this.width >= canvasWidth || this.x <= 0){
                this.xdir = this.xdir*(-1);
                  }
            
            if(this.y + this.height >= canvasHeight || this.y <= 0){
                this.ydir = this.ydir*(-1);
                }
             
            this.x += this.xdir * this.xDelta;
            this.y += this.ydir * this.yDelta;
        }
           }
        };
          
    };



   const leftKey = 37;
const upKey = 38;
const rightKey = 39;
const downKey = 40;
document.addEventListener('keydown', function(event) {
  if(event.keyCode === rightKey) {
    GexiHeros.xDelta = 1;
        
    }
    if(event.keyCode === leftKey){
      GexiHeros.xDelta = -1;
    }
    if(event.keyCode === upKey){
      GexiHeros.yDelta = -1;
    }
    if(event.keyCode === downKey){
      GexiHeros.yDelta = 1;
    }

}, false);
document.addEventListener('keyup', function(event) {
  if(event.keyCode === rightKey) {
    GexiHeros.xDelta = 0;
        
    }
    if(event.keyCode === leftKey) {
    GexiHeros.xDelta = 0;
        
    }
    if(event.keyCode === upKey) {
    GexiHeros.yDelta = 0;
        
    }
      if(event.keyCode === downKey){
      GexiHeros.yDelta = 0;
    }
}, false);
    
    
     const draw = function(){
      GexiHeros.draw();
    for (let i = 0; i < array.length; i++) {
        array[i].draw();
    }
     };

     const update = function(){
      GexiHeros.update();
      for (let i = 0; i < array.length; i++) {
        array[i].update();
        if((GexiHeros.x+GexiHeros.width)>= canvas.width){
          GexiHeros.x = 0
        }
        if(GexiHeros.x<0){
          (GexiHeros.x = canvas.width-GexiHeros.width)
        }
        if((GexiHeros.y+GexiHeros.height)>= canvas.height){
          GexiHeros.y = 0
        }
         if(GexiHeros.y<0){
          (GexiHeros.y = canvas.height-GexiHeros.height)
        }

    }

     }
      const Merar = function(){
        for (let i = 0; i < array.length; i++) {
        if(GexiHeros.x < array[i].x +array[i].width/2 && GexiHeros.x + GexiHeros.width/2 > array[i].x && GexiHeros.y < array[i].y + array[i].height/2 && GexiHeros.y + GexiHeros.height/2 > array[i].y){
          
            
            alert("Game Over");

            }
    };
}
Gesher(3,900, 700);


     const loop = function (){

       context.drawImage(background, 0, 0, canvas.width, canvas.height);
       draw();
       update();
       Merar();       
       requestAnimationFrame(loop);

     };
     
     loop();
