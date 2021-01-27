function Snake(){
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale * 1;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];

    // draw snek
    this.draw = function(){
        context.fillStyle = "#FFFFFF";
        for(var i = 0; i < this.tail.length; i++){
            context.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
        }
        context.fillRect(this.x, this.y, scale, scale);
    }

    this.update = function(){
        // each object gets its value reassigned equal to the square next to it
        for(var i = 0; i < this.tail.length - 1; i++){
            this.tail[i] = this.tail[i + 1];
        }
        
        // the square next to the head gets an x and y equal to the head
        this.tail[this.total - 1] = {x: this.x, y: this.y};

        // the snake's head moves ahead
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x > canvas.width){
            this.x = 0;
        }
        
        if(this.y > canvas.height){
            this.y = 0;
        }

        if(this.x < 0){
            this.x = canvas.width;
        }
        
        if(this.y < 0){
            this.y = canvas.height;
        }
    }

    this.changeDirection = function(direction){
        switch(direction){
            case "Up":
                this.xSpeed = 0;
                this.ySpeed = -scale * 1;
                break;
            case "Down":
                this.xSpeed = 0;
                this.ySpeed = scale * 1;
                break;
            case "Left":
                this.xSpeed = -scale * 1;
                this.ySpeed = 0;
                break;
            case "Right":
                this.xSpeed = scale * 1;
                this.ySpeed = 0;
                break;
        }
    }

    this.eat = function(){
        console.log(fruit);
        if(this.x == fruit.x && this.y == fruit.y){
            this.total++;
            return true;
        }

        return false;
    }

    this.bite = function(){
        for(var i = 0; i < this.tail.length; i++){
            if(this.x == this.tail[i].x && this.y == this.tail[i].y){
                return true;
            }
        }
        return false;
    }
    
    this.reset = function(){
        this.tail = [];
        this.total = 0; 
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
    }

    // make snake spawn randomly on the board
}