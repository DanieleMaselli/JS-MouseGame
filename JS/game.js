class Game {
    constructor(){
        this.gameScreen = document.getElementById('game-screen')
        this.startScreen = document.getElementById('start-screen')
        this.endScreen = document.getElementById('end-screen')
        this.navBar = document.getElementById('navBar')
        this.height = 80;
        //this.width = 100;
        this.mouse = null;
        this.animateId = null;
        this.gameScreen.style.height = `${this.height}vh`;
        this.gameScreen.style.width = `${this.width}vw`;
        this.score = 0;
        this.lives = 1000;
        this.isGameOver = false;
        this.winTheGame = false;
        this.poisonStarted = false;
        this.obstacles = [];
        this.cheeseArray = [];
        
        for (let i = 0; i < 5; i++) {
            this.cheeseArray.push(new Cheese(this.gameScreen));              
        }
    }

    update(){
        this.gameScreen.style.height = `${this.height}vh`;
        this.gameScreen.style.width = `${this.width}vw`;
    }

    start(){
        this.gameScreen.style.visibility = 'visible'
        this.navBar.style.visibility = 'visible'
        this.startScreen.style.display = 'none'
        this.endScreen.style.visibility = 'none'
        this.mouse = new Mouse(this.gameScreen)
        this.gameloop()  
    }

    gameloop(){

        let audio = new Audio('cat.wav');
        document.getElementById('score').innerText = this.score
        document.getElementById('lives').innerText = this.lives
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

        ///Cat Obstacles
        const nextObstacles = []
       
        this.obstacles.forEach(currentObstacle => {
            currentObstacle.move()
        })

        this.obstacles.forEach((obst) => {
            if(this.mouse.obstacleCat(obst)){
                //console.log('collision cat')
                obst.element.remove()
                audio.play();
                this.lives -= 1;
                if (this.lives <= 0) {
                    this.isGameOver = true
                    console.log(this.isGameOver)
                }
            }          
        })

        if (this.animateId % 40 === 0) {
            this.obstacles.push(new Obstacle(this.gameScreen))
        }

        const mouseWidth = this.mouse.getWidth();
        console.log('Mouse width:', mouseWidth);

        if (this.score === 10) {
            this.mouse.setWidth(60);        
        } else if(this.score === 20) {
            this.mouse.setWidth(80);
        } else if (this.score === 20) {
            this.mouse.setWidth(100);
        }
     
        if(this.isGameOver) {
            this.endScreen.style.display = 'flex'
            this.gameScreen.style.display = 'none'
            this.navBar.style.visibility = 'hidden'
        } 

        this.animateId = requestAnimationFrame(() => this.gameloop())

        
    }  
}













