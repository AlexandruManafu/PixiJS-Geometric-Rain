import { FigureView } from "../view/FigureView";
import { Animation } from "./Animation";
import { Coloring } from "./Coloring";
import { Engine } from "./Engine";

export class Gravity{

    private areas : Map<string,number> = new Map()
    private animations : Map<string,Animation> = new Map()

    constructor(
        public engine : Engine,
        public coloring:Coloring,
        private gravityValue = 0.2,
        private view : {info : HTMLElement | null, buttons : HTMLElement | null})
    {
        this.setDefaultValues()
        this.addButtonListeners()
    }

    addFigure(figure : FigureView)
    {
        this.engine.addFigure(figure)
        let object = this.engine.getGraphics(figure.getName())
        this.coloring.addClickListener(object)

        let animation = new Animation(
            this.engine.ticker,
            ()=>{
                object.y += this.gravityValue
                if(object.y - 300 > this.engine.getCanvasHeight() && object.name!)
                {
                    this.coloring.removeClickListener(object.name)
                    this.removeGraphics(object.name)
                    this.removeArea(object.name)
                }
                else if(object.y > 100 && !this.areas.has(object.name))
                {
                    this.areas.set(figure.getName(),figure.getArea())
                }
            })

        animation.start()
        this.animations.set(object.name,animation)
    }

    private removeGraphics(name:string)
    {
        let animation = this.animations.get(name)
        if(animation!= undefined)
            animation.stop()

        this.animations.delete(name)
        this.engine.removeGraphics(name)
        this.engine.removeFigure(name)
    }

    private removeArea(name:string)
    {
        if(this.areas.has(name))
            this.areas.delete(name)
    }

    public getValue()
    {
        return this.gravityValue
    }

    public getCurrentArea()
    {
        let res = 0
        this.areas.forEach((value) => {
            res+=value
        });
        return res
    }

    public updateValue(number:number)
    {
        this.gravityValue+=number
    }

    private updateText(cssId : string, value : string)
    {
        if(this.view.info)
        {
            let text = this.view.info.querySelector("#"+cssId)
            if(text != null)
                text!.innerHTML = value
        }
    }

    public updateAreaText()
    {
        this.updateText("area",this.getCurrentArea().toFixed().toString())
    }

    public getFigureCount()
    {
        return this.areas.size
    }

    public updateFigureCountText()
    {
        if(this.view.info)
        {
            let text = this.view.info.querySelector("#area")
            if(text != null)
                text!.innerHTML = this.getCurrentArea().toFixed().toString()
        }
        this.updateText("numberShapes",this.getFigureCount().toString())
    }

    private setDefaultValues()
    {
        if(this.view.buttons!)
        {
            let text2 = this.view.buttons!.querySelector("#gravity")
            if(text2 != null)
                text2!.innerHTML = this.gravityValue.toPrecision(3).toString()
        }
    }

    private updateGravityValue(number : number)
    {
        this.updateValue(number)
        this.setDefaultValues()
    }

    private addButtonListeners()
    {
        if(this.view.buttons!)
        {
            let buttons = this.view.buttons!
            let gravityIncrement = buttons.querySelector("#increaseGravity")
            let gravityDecrement = buttons.querySelector("#decreaseGravity")

            gravityIncrement!.addEventListener("click",
                () =>{
                    this.updateGravityValue(0.2)
                },false
                )
            
            gravityDecrement!.addEventListener("click",
                () =>{
                    this.updateGravityValue(-0.2)
                })
        }
        
    }

    stopAll()
    {
        this.animations.forEach((value)=>
        {
            value.stop()
        })
    }


}