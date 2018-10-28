# homework5
//Exercise 1

<canvas id="canvas" ></canvas>
<script>
	
   const canvas =document.getElementById('canvas');
   const context = canvas.getContext('2d');
   

	let array = [];
	const rand = function(num) {
  return Math.floor(Math.random() * num) + 1;
};

	delta = [-5, 0, 5]
	colorArray=['red', 'green', 'orange']

	const creatbox= function (count, canvasWidth, canvasHeight) {
        canvas.width= canvasWidth;
   		canvas.height =canvasHeight;
        for(let i=0;i<count;i++){
           array[i]= {
           	x:rand(canvas.width-30),
           	y:rand(canvas.height-30), 
           	width: 30,
            height: 30,
            xDelta: delta[rand(3)-1],
            yDelta: delta[rand(3)-1],
            color:colorArray[rand(3)-1],
            draw: function(){
           	 context.fillStyle
    		 context.fillRect(this.x, this.y, this.width, this.height);
    	},
    	    update: function(){
    		this.x += this.xDelta;
    		this.y += this.yDelta;
    	}
           }
           	array[i].draw();
        };
        	
        		};

creatbox(5,500,500)
</script>



//Exercise 2

<canvas id="canvas" ></canvas>
<script>
	
   const canvas =document.getElementById('canvas');
   const context = canvas.getContext('2d');
   

	let array = [];
	const rand = function(num) {
  return Math.floor(Math.random() * num) + 1;
};

	delta = [-5, -3, 1, 3, 5, 7]
	colorArray=['red', 'green', 'orange','blue','purple','black']

	const creatbox= function (count, canvasWidth, canvasHeight) {
        canvas.width= canvasWidth;
   		canvas.height =canvasHeight;
        for(let i=0;i<count;i++){
           array[i]= {
           	x:rand(canvas.width-30),
           	y:rand(canvas.height-30), 
           	width: 30,
            height: 30,
            xDelta: delta[rand(6)-1],
            yDelta: delta[rand(6)-1],
            xdir: 1,
            ydir: -1,	 	
            color:colorArray[rand(6)-1],
            draw: function(){
           	 context.fillStyle = colorArray[rand(6)-1];
    		 context.fillRect(this.x, this.y, this.width, this.height);
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
        creatbox(200,1400,500)


   const loop = function (){
   		context.clearRect(0,0,canvas.width,canvas.height)
      for(i = 0; i < array.length; i++){
      	array[i].draw()
      	array[i].update()
      	
      }
      

              
       requestAnimationFrame(loop);

     };
     
     loop();



</script>


//Exercise 3

<canvas id="c1"></canvas>

<script>
   const canvas =document.getElementById('c1');
   const context = canvas.getContext('2d');
  
   const rand = function(num) {
    return Math.floor(Math.random() * num) + 1;
  }
  delta = [-1, 1, 1];
   array=[];
   canvas.width=40000;
   canvas.height =40000;

   const background = new Image();
    background.src = 'https://vignette.wikia.nocookie.net/mkwikia/images/5/5e/Meteor_Storm_Arena.jpg/revision/latest?cb=20110427161328';

   const Chaxo = new Image ();
   Chaxo.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/d/de/Barney_Gumble.png/220px-Barney_Gumble.png'
;
   const Gesher =new Image();
   Gesher.src = 'https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Waluigi.png/180px-Waluigi.png';
    
       const hero = {
        x: 0,
        y: 223,
        width: 50,
        height: 50,
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

    const gesh= function (count, canvasWidth, canvasHeight) {
        canvas.width= canvasWidth;
      canvas.height =canvasHeight;

        for(let i=0;i<count;i++){
           array[i]= {
            x:rand(canvas.width-30),
            y:rand(canvas.height-30), 
            width: 30,
            height: 30,
            xDelta: delta[rand(3)-1],
            yDelta: delta[rand(3)-1],
            xdir: 1,
            ydir: -1,
            image:Gesher,    
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
    hero.xDelta = 1;
        
    }
    if(event.keyCode === leftKey){
      hero.xDelta = -1;
    }
    if(event.keyCode === upKey){
      hero.yDelta = -1;
    }
    if(event.keyCode === downKey){
      hero.yDelta = 1;
    }

}, false);
document.addEventListener('keyup', function(event) {
  if(event.keyCode === rightKey) {
    hero.xDelta = 0;
        
    }
    if(event.keyCode === leftKey) {
    hero.xDelta = 0;
        
    }
    if(event.keyCode === upKey) {
    hero.yDelta = 0;
        
    }
      if(event.keyCode === downKey){
      hero.yDelta = 0;
    }
}, false);
    
    
     const draw = function(){
      hero.draw();
    for (let i = 0; i < array.length; i++) {
        array[i].draw();
    }
     };

     const update = function(){
      hero.update();
      for (let i = 0; i < array.length; i++) {
        array[i].update();
        if((hero.x+hero.width)>= canvas.width){
          hero.x = 0
        }
        if(hero.x<0){
          (hero.x = canvas.width-hero.width)
        }
        if((hero.y+hero.height)>= canvas.height){
          hero.y = 0
        }
         if(hero.y<0){
          (hero.y = canvas.height-hero.height)
        }

    }

     }
      const Merar = function(){
        for (let i = 0; i < array.length; i++) {
        if(hero.x < array[i].x +array[i].width/2 && hero.x + hero.width/2 > array[i].x && hero.y < array[i].y + array[i].height/2 && hero.y + hero.height/2 > array[i].y){
          
            
            alert("Game Over");

            }
    };
}
gesh(5,500, 400);


     const loop = function (){

       context.drawImage(background, 0, 0, canvas.width, canvas.height);
       draw();
       update();
       Merar();       
       requestAnimationFrame(loop);

     };
     
     loop();


 
</script>
        
