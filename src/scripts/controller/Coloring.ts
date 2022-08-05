import { Graphics } from "pixi.js";
import { Colors } from "../creational/Colors";
import { Engine } from "./Engine";

export class Coloring
{
    color = Colors.getRandomColor()
    clickListeners :Map<string,any> = new Map()
    public static clickedOnFigure = false
    constructor(private engine : Engine)
    {
        
    }

    public static colorAll(engine : Engine, color:number)
    {
        let figures = engine.getAllFigures()
        figures.forEach((value)=>
        {
            engine.setFigureColor(value.getName(), color)
        })
    }

    addClickListeners(graphics : Graphics[])
    {
        graphics.forEach((element)=>{
            this.addClickListener(element)
        })
    }

    addClickListener(graphics : Graphics)
    {
        this.clickListeners.set(graphics.name,
            ()=>{
                Coloring.colorAll(this.engine, this.color)
                Coloring.clickedOnFigure = true
            })
    
        graphics.on("mousedown",this.clickListeners.get(graphics.name))        
    }

    removeClickListener(name : string)
    {
        let listener = this.clickListeners.get(name)
        let graphics = this.engine.getGraphics(name)
        if(listener! && graphics!)
        {
            graphics.removeListener(listener)
        }
    }

    removeClickListeners()
    {
        this.clickListeners.forEach(
        (_,key)=>{
            this.removeClickListener(key)
        })
    }

    setColor(color:number)
    {
        this.color = color
    }

    public static lastClickOnFigure()
    {
        let res = this.clickedOnFigure
        this.clickedOnFigure = false
        return res
    }
}