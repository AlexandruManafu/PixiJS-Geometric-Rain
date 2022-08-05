import { IPoint } from "../model/interfaces/IPoint"
export class PolygonPathBuilder{
    public path : IPoint[] = []
    constructor(x:number,y:number)
    {
        this.start(x,y)
    }

    private getLastPoint()
    {
        if(this.path.length > 0)
            return this.path[this.path.length-1]
        else
        {
            this.path.push({x:0,y:0})
            return this.path[0]
        }
    }

    private degreesToRad(degrees:number)
    {
        return degrees*0.01745329
    }

    start(x : number, y : number)
    {
        this.path = []
        this.path.push({x:x,y:y})
        return this;
    }

    addPoint(angleDegrees : number, distance: number)
    {
        let angleRad = this.degreesToRad(angleDegrees)
        let prev = this.getLastPoint()
        let p = {
            x : prev.x + distance * Math.cos(angleRad),
            y : prev.y + distance * Math.sin(angleRad)
        }
        this.path.push(p)
        return this
    }

    addPoints(distance : number, number : number)
    {
        let angleChange = 360/number
        let angle = 0
        for(let i = 0; i < number - 1;i++)
        {
            this.addPoint(angle,distance)
            angle += angleChange
        }
    }


}