import { Ticker } from "pixi.js";

export class Animation{
    constructor(private ticker : Ticker, private callback : ()=> void)
    {
    }

    public setAnimationCallback(callback : ()=>void)
    {
       this.callback = callback
    }

    public start()
    {
        this.ticker.add(this.callback,this)
    }

    public stop()
    {
        this.ticker.remove(this.callback, this)
    }


}