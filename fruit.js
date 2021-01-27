function Fruit(){
    this.x;
    this.y;

    // self-explanatory
    this.pickLocation = function(){
        this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
        this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
    }

    this.draw = function(){
        context.fillStyle = "#999999";
        context.fillRect(this.x, this.y, scale, scale);
    }

    // make it so that fruit doesn't spawn in snake's tail
}