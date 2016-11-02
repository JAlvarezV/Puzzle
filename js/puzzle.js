class Puzzle {

    constructor(){
        this.puzz = [
            [1,2,3],
            [4,5,6],
            [7,8,0]
        ];
    }

    randomize(){
        for(var i=0;i<this.puzz.length;i++){
            for(var j=0;j<this.puzz[i].length;j++){
                var aux = this.puzz[i][j];
                var rnd = parseInt(Math.random()*this.puzz[i].length-1);
                if(this.puzz[i][j]!=0 && this.puzz[i][rnd]!=0){
                    this.puzz[i][j] = this.puzz[i][rnd];
                    this.puzz[i][rnd] = aux;
                }

            }
        }

        return this.puzz;
    }

    getPos(n){
        for(var i=0;i<this.puzz.length;i++) {
            for (var j = 0; j < this.puzz[i].length; j++) {
                if(this.puzz[i][j]==n)
                    return [i,j];
            }
        }

        return false;
    }

    whitePos(row,col){
        var zero = this.getPos(0);
        var aux = this.puzz[row][col];
        this.puzz[row][col] = 0;
        this.puzz[zero[0]][zero[1]] = aux;

    }

}