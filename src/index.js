import {gridGenerator} from "./grids/grids";

window.onload = function () {
    document.getElementById("demo").innerHTML = "Here is an active JS running...";
    document.getElementById("grid1").innerHTML = gridGenerator(10, 10);
    document.getElementById("grid2").innerHTML = gridGenerator(10, 10);
    document.getElementById("grid1a").innerHTML = gridGenerator(10, 10);
    document.getElementById("grid2a").innerHTML = gridGenerator(10, 10);
}