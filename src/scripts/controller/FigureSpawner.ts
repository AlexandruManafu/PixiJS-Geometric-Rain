import { FigureViewFactory } from "../creational/FigureViewFactory";
import { Coloring } from "./Coloring";
import { Gravity } from "./Gravity";

export class FigureSpawner{
    private interval : any
    constructor(
        private gravity : Gravity, 
        private canvas : HTMLElement | null,
        private figuresPerSecond = 1,
        private view : {info : HTMLElement | null, buttons : HTMLElement | null}
        )
    {
        this.setDefaultValues()
        this.addButtonListeners()
        this.addKeyboardListeners()

    }

    start()
    {
        let gravity = this.gravity
        let perSecond = this.figuresPerSecond
        this.interval = setInterval(function() {
            if(!document.hidden)
            {
                for(let i = 0; i<perSecond;i++)
                {
                    let view = FigureViewFactory.createTop(window.innerWidth)
                    gravity.addFigure(view)
                }
                gravity.updateAreaText()
                gravity.updateFigureCountText()
            }
            
          }, 1000);
    }

    stop()
    {
        clearInterval(this.interval)
    }

    pause()
    {
        this.gravity.stopAll()
        this.stop()
    }

    restart()
    {
        this.stop()
        this.start()
    }

    public setFiguresPerSecond(number : number)
    {   
        this.figuresPerSecond = number
        this.restart()
    }

    public updateValue(number : number)
    {
        this.figuresPerSecond += number
        this.restart()
    }

    public getFiguresPerSecond()
    {
        return this.figuresPerSecond
    }

    setDefaultValues()
    {
        if(this.view.buttons!)
        {
            let text2 = this.view.buttons!.querySelector("#shapesPerSecond")
            if(text2 != null)
                text2!.innerHTML = this.figuresPerSecond.toString()
        }
    }

    private updateFiguresPerSecond(number : number)
    {
        this.updateValue(number)
        this.setDefaultValues()
    }

    addButtonListeners()
    {
        if(this.view.buttons!)
        {
            let buttons = this.view.buttons!
            let increment = buttons.querySelector("#increaseFigures")
            let decrement = buttons.querySelector("#decreaseFigures")

            if(increment)
                increment.addEventListener("click",
                    () =>{
                        this.updateFiguresPerSecond(1)
                    },
                    false)
            if(decrement)
                decrement.addEventListener("click",
                    () =>{
                        this.updateFiguresPerSecond(-1)
                    },
                    false)
            if(this.canvas)
                this.canvas.addEventListener("click",
                    (event:any)=>{
                        if(!Coloring.lastClickOnFigure())
                        {
                            let view = FigureViewFactory.createRandom(event.clientX,event.clientY-50)
                            this.gravity.addFigure(view)
                        }
                    })
        }
        
    }

    addKeyboardListeners()
    {
        document.addEventListener("keydown",
        (event)=>{
            console.log(event)
            if(event.key==" ")
            {
                this.pause()
            }
            else if(event.key=="Enter")
            {
                this.start()
            }
        })
    }






}