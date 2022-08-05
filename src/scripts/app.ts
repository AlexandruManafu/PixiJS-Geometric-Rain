
import { Engine } from "./controller/Engine";
import { Gravity } from "./controller/Gravity";
import { FigureSpawner } from "./controller/FigureSpawner";
import { Coloring } from "./controller/Coloring";

const scene = new Engine({
    containerId: 'game',
    width: window.innerWidth,
    height: window.innerHeight-200, 
    antialias: true
});

window.addEventListener("resize",updateOnResize)

function updateOnResize()
{
    scene.setCanvasSize(window.innerWidth,window.innerHeight-200)
}

let topBar = document.getElementById("infoText")
let bottomBar = document.getElementById("buttons")
let canvas = document.getElementById("game")

let view = {info:topBar,buttons:bottomBar}
let coloring = new Coloring(scene)
let gravity = new Gravity(scene, coloring, 0.2, view)
let spawner = new FigureSpawner(gravity, canvas, 1, view)
spawner.start() 





