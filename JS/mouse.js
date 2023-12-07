class Mouse {
    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.mouseX = 0;
        this.mouseY = 0;
        this.rotation = 0;
        this.width = 50;
        this.element = document.createElement('img');
        this.element.src = 'Images/mice.png';
        this.element.style.position = 'absolute';
        this.element.style.width = `${this.width}px`
        this.element.style.transition = 'none'
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

    
    getWidth(){
      return this.width;
    }

    setWidth(newWidth) {
      this.width = newWidth;
      this.element.style.width = `${this.width}px`;
   
    }

    stopTransition(transition){
      this.transition = transition;
      this.element.style.transition = 'none'
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
      
      return true
      } else {
      return false
      }

    }

    //collision
    obstacleCat(obst) {
      const playerRect = this.element.getBoundingClientRect()
      const obstacleRect = obst.element.getBoundingClientRect()
            
      if (
        playerRect.left < obstacleRect.right &&
        playerRect.right > obstacleRect.left &&
        playerRect.top < obstacleRect.bottom &&
        playerRect.bottom > obstacleRect.top
      ) {
    
    return true
    } else {
    return false
    }

  }

  poisonTrap(poison) {
    const playerRect = this.element.getBoundingClientRect()
    const poisonRect = poison.element.getBoundingClientRect()
 
         
    if (
      playerRect.left < poisonRect.right &&
      playerRect.right > poisonRect.left &&
      playerRect.top < poisonRect.bottom &&
      playerRect.bottom > poisonRect.top
    ) {
  
  return true
  } else {
  return false
  }

}
    
}













