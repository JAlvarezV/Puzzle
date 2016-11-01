class Game {
    constructor(div,image,size){
        this.puzzle = new Puzzle();
        this.result = this.puzzle.randomize();
        this.drawer = new Drawer(div);
        this.drawer.draw(this.puzzle.puzz);
    }

    move(id){
        if(id!=0){
            var pos = this.puzzle.getPos(id);
            //pos[0] = row
            //pos[1] = column
            //Check if the 0 is close to the clicked cell +1row,-1row,+1column,-1column
            if(pos[0]+1<this.puzzle.puzz.length){
                if(this.puzzle.puzz[pos[0]+1][pos[1]]==0){
                    this.puzzle.whitePos(pos[0],pos[1]);
                }
            }
            if(pos[0]-1>=0){
                if(this.puzzle.puzz[pos[0]-1][pos[1]]==0){
                    this.puzzle.whitePos(pos[0],pos[1]);
                }
            }
            if(pos[1]+1<this.puzzle.puzz[pos[0]].length){
                if(this.puzzle.puzz[pos[0]][pos[1]+1]==0){
                    this.puzzle.whitePos(pos[0],pos[1]);
                }
            }

            if(pos[1]-1>=0){
                if(this.puzzle.puzz[pos[0]][pos[1]-1]==0){
                    this.puzzle.whitePos(pos[0],pos[1]);
                }
            }

            this.drawer.draw(this.puzzle.puzz);
        }
    }
}