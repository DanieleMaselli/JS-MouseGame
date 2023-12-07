class Cheese {
    constructor(gameScreen){
        
        this.gameScreen = gameScreen;
        let rect = gameScreen.getBoundingClientRect();
        //console.log(rect)
        const maxWidth = rect.right - 100;
        const maxHeight = rect.bottom - 100;
        const minWidth = rect.left + 100;
        const minHeight = rect.top + 100;
        ///this.cheeseArray = [];
        let x = getRandomInt(minWidth,maxWidth);
        let y = getRandomInt(minHeight,maxHeight);
        this.width = 60;
        this.top = y;
        this.left = x;
        this.element = document.createElement('img');
        this.element.src = 'Images/cheese.png';
        this.element.classList = 'cheese'
        this.element.style.position = 'absolute';
        this.element.style.width = `${this.width}px`;
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.left}px`;
        this.gameScreen.appendChild(this.element);  
    }  
}

function getRandomInt(min, max) { 
    min = Math.ceil(min); 
    max = Math.floor(max); 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}








 
