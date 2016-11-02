window.onload = function () {
    var pz = document.getElementById("puzzle");
    var size = 9;
    game = new Game(pz);
};

function move(event) {
    game.move(event.target.id);
}