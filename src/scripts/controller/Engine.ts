import * as PIXI from 'pixi.js'
import { FigureView } from '../view/FigureView'

export class Engine{
    private figures : Map<string,FigureView> = new Map()

    public application : PIXI.Application
    public ticker : PIXI.Ticker 

    constructor(params: any) {
        this.application = new PIXI.Application(params)
        this.application.renderer.view.style.position = "relative"
        this.ticker = this.application.ticker
        
        document.getElementById(params.containerId)!.appendChild(this.application.view)
    }

    reinitGraphics()
    {
        this.figures.forEach(
            (value,key)=>
            {
                this.removeGraphics(key)
                this.addGraphics(value.getGraphics(),key)
            })
    }

    addFigure(figure : FigureView)
    {
        this.figures.set(figure.getName()!, figure)
        this.addGraphics(figure.getGraphics(), figure.getName()!)
    }

    addGraphics(object : PIXI.Graphics, name? : string)
    {
        if(name != undefined)
        {
            object.name = name
        }
        //this.graphics.set(object.name,object)
        this.application.stage.addChild(object)
    }

    removeGraphics(name : string)
    {
        let object = this.application.stage.getChildByName(name)
        if(object!)
        {
            this.application.stage.removeChild(object)
        }
    }

    removeFigure(name:string)
    {
        this.figures.delete(name)
    }

    getGraphics(name : string) : PIXI.Graphics
    {
        try{
            let object = this.figures.get(name)
            return object!.getGraphics()
        }catch(e)
        {
            throw new Error("Graphics object not found")
        }

    }

    getAllFigures()
    {
        return this.figures
    }

    getAllGraphics()
    {
        return this.application.stage.children
    }

    setFigureColor(name:string,color:number)
    {
        let figure = this.figures.get(name)
        let graphics = this.getGraphics(name)
        if(figure! && graphics!)
        {
            figure?.setColor(color)
            graphics.fill.color = color
        }
    }
    
    public setBackgroundColor(color : number)
    {
        this.application.renderer.backgroundColor = color
    }

    public setCanvasSize(width : number, height:number)
    {
        this.application.renderer.resize(width,height)
    }

    public getCanvasHeight()
    {
        return this.application.renderer.height
    }

    public getStage()
    {
        return this.application.stage
    }

    public getInteraction()
    {
        return this.application.renderer.plugins.interaction
    }

}