const canvas = document.querySelector(".canvas");
const context = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;



var snake;
var fruit;

(function setup(){
    snake = new Snake();
    fruit = new Fruit();

    snake.reset();
    fruit.pickLocation();
    console.log(fruit);

    window.setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        snake.update();
        snake.draw();
        fruit.draw();

        if(snake.eat()){
            console.log("eating");
            fruit.pickLocation();
        }

        if(snake.bite()){
            console.log("biting");
            snake.reset();
            fruit.pickLocation();
        }
    }, 250)
}());


window.addEventListener("keydown", ((event) => {
    console.log(event);
    const direction = event.key.replace("Arrow", "");
    console.log(direction);
    snake.changeDirection(direction);
}))