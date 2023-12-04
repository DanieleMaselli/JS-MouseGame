class Mouse {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.mouseX = 0;
        this.mouseY = 0;
        this.width = 50;
        this.element = document.createElement('img');
        this.element.src = '../Images/mice.png';
        this.element.style.position = 'absolute';
        this.element.style.width = `${this.width}px`
        this.gameScreen.appendChild(this.element);

        window.addEventListener('mousemove', (event) => {
            this.mouseX = event.clientX;
            this.mouseY = event.clientY;
            this.move();  
                   
        });
    }

    move(){
        this.element.style.left = this.mouseX + 'px';
	      this.element.style.top = this.mouseY + 'px';     
    }

    //collision
    eatCheese(cheese) {
        const playerRect = this.element.getBoundingClientRect()
        const cheeseRect = cheese.element.getBoundingClientRect()
             
        if (
          playerRect.left < cheeseRect.right &&
          playerRect.right > cheeseRect.left &&
          playerRect.top < cheeseRect.bottom &&
          playerRect.bottom > cheeseRect.top
        ) {
      
      //cheese.element.remove()
      return true
      } else {
      return false
      }

    }
    
}













