window.onload = function () {
    var pz = document.getElementById("puzzle");
    var img = document.getElementById("image");
    var size = 9;
    game = new Game(pz,img,size);
};

function move(event) {
    game.move(event.target.id);
}