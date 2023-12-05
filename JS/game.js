class Game {
    constructor(){
        this.gameScreen = document.getElementById('game-screen')
        this.height = 80;
        this.width = 100;
        this.mouse = null;
        this.animateId = null;
        this.gameScreen.style.height = `${this.height}vh`;
        this.gameScreen.style.width = `${this.width}vw`;
        this.score = 0;
        this.lives = 3
        //this.cheese = new Cheese(this.gameScreen);
        this.obstacles = [];
        this.cheeseArray = [];
        
        for (let i = 0; i < 5; i++) {
           // new Cheese(this.gameScreen);
            //console.log(this.cheeseArray)
            this.cheeseArray.push(new Cheese(this.gameScreen));       
            //console.log(this.cheeseArray)              
        }
    }

    update(){
        this.gameScreen.style.height = `${this.height}vh`;
        this.gameScreen.style.width = `${this.width}vw`;
    }

    start(){
        this.mouse = new Mouse(this.gameScreen)
        this.gameloop()
    }

    gameloop(){

        document.getElementById('score').innerText = this.score

        this.cheeseArray.forEach((cheese, index) => {
            if (this.mouse.eatCheese(cheese)) {
                console.log('collision');
                cheese.element.remove();
                this.cheeseArray.splice(index, 1); 
                this.score += 1;
            }
        });
    
        if (this.cheeseArray.length === 0) {
            for (let i = 0; i < 5; i++) {
                this.cheeseArray.push(new Cheese(this.gameScreen));
            }
        }

        const nextObstacles = []
        this.obstacles.forEach(currentObstacle => {
            currentObstacle.move()
        })

        if (this.animateId % 40 === 0) {
            this.obstacles.push(new Obstacle(this.gameScreen))
          }
      

        this.animateId = requestAnimationFrame(() => this.gameloop())
    }  
}












