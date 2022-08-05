import { Graphics } from "pixi.js"
import { Figure } from "../model/Figure"

export abstract class FigureView{
    protected graphics : Graphics = new Graphics()
    constructor(protected data : Figure)
    {

    }

    protected abstract initGraphics() : void
    getGraphics(): PIXI.Graphics { 
        return this.graphics
    }

    getName()
    {
        return this.graphics.name
    }

    getArea()
    {
        return this.data.computeArea()
    }

    setColor(color : number)
    {
        this.data.setColor(color)
        this.initGraphics()
    }





}