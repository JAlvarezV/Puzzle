class Drawer {
    constructor(div) {
        this.div = div;

    }

    generateMap(puzzle){
        while (this.div.firstChild) {
            this.div.removeChild(this.div.firstChild);
        }
        for(var i=0;i<puzzle.length;i++) {
            for(var j=0;j<puzzle[i].length;j++){
                var tempDiv = document.createElement('div');
                tempDiv.id = puzzle[i][j];
                tempDiv.addEventListener("click",move);
                this.div.appendChild(tempDiv);
            }
        }
    }

    draw(puzzle){
        this.generateMap(puzzle);
        var divs = this.div.getElementsByTagName('div');
        for(var i = 0;i<divs.length;i++){
            this.drawSubImage(divs[i]);
        }
    }

    drawSubImage(div){
        if(div.id!=0)
            div.style.backgroundImage = "url(img/img"+div.id+".jpg)";
    }

}