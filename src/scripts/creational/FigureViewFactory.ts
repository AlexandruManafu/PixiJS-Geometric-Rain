import { Colors } from "./Colors";
import { FourSides } from "../model/figures/FourSides";
import { FigureView } from "../view/FigureView";
import { PolygonView } from "../view/PolygonView";
import { RandomDimensions } from "./RandomDimensions";
import { Circle } from "../model/figures/Circle";
import { CircleView } from "../view/CircleView";
import { Elipse } from "../model/figures/Elipse";
import { ElipseView } from "../view/ElipseView";
import { Triangle } from "../model/figures/Triangle";
import { PolygonPathBuilder } from "./PolygonPathBuilder";
import { NSides } from "../model/figures/NSides";

export class FigureViewFactory{

    static options = ["rectangle","circle","elipse","triangle","five","six","n"]

    private static yIni = -200
    private static sideMargins = 50

    constructor(){
    }

    private static getRandomId()
    {
        return (Math.random() + 1).toString(36).substring(7);      
    }

    private static createRectangle(x:number, y:number)
    {
        let size = RandomDimensions.getRandomSize(50,100)
        let figure = new FourSides(
            undefined,
            Colors.getRandomColor(),
            this.getRandomId()
        )
        figure.setPoints(
            [{x : x, y : y},
            {x : x+size, y : y},
            {x : x+size, y : y+size},
            {x : x, y : y+size}]
        )
        return new PolygonView(figure)
    }

    private static createTriangle(x:number, y:number)
    {
        let size = RandomDimensions.getRandomSize(50,100)
        let figure = new Triangle(
            undefined,
            Colors.getRandomColor(),
            this.getRandomId()
        )
        figure.setPoints(
            [{x : x, y : y},
            {x : x+size, y : y},
            {x : x+size/2, y : y+size}])
        return new PolygonView(figure)
    }

    private static createCircle(x:number,y:number)
    {
        let size = RandomDimensions.getRandomSize(40,80)
        let figure = new Circle(
            {x:x, y:y},
            size,
            Colors.getRandomColor(),
            this.getRandomId()
        )
        return new CircleView(figure)
    }

    private static createElipse(x:number,y:number)
    {
        let width = RandomDimensions.getRandomSize(50,100)
        let height = RandomDimensions.getRandomSize(50,100)
        let figure = new Elipse(
            {x:x, y:y},
            width,
            height,
            Colors.getRandomColor(),
            this.getRandomId()
        )
        return new ElipseView(figure)
    }

    private static createPolygon(x:number,y:number, numberSides : number, size : number)
    {
        let builder = new PolygonPathBuilder(x,y)
        builder.addPoints(size,numberSides)

        let figure = new NSides(
            builder,
            Colors.getRandomColor(),
            this.getRandomId()
        )
        return new PolygonView(figure)
    }

    public static create(type : string, x:number, y:number) : FigureView
    {
        switch(type)
        {
            case "rectangle":
                return FigureViewFactory.createRectangle(x,y)
            case "circle":
                return FigureViewFactory.createCircle(x,y)
            case "elipse":
                return FigureViewFactory.createElipse(x,y)
            case "triangle":
                return FigureViewFactory.createTriangle(x,y)
            case "five":
                return FigureViewFactory.createPolygon(x,y,5,RandomDimensions.getRandomSize(30,60))
            case "six":
                return FigureViewFactory.createPolygon(x,y,6,RandomDimensions.getRandomSize(30,60))
            case "n":
                let size = RandomDimensions.getRandomSize(20,40)
                let rand = RandomDimensions.getRandomSize(7,12)
                return FigureViewFactory.createPolygon(x,y,rand,size)

            default:
                throw new Error("No such figure type")
        }
    }

    public static createRandom(x:number,y:number)
    {
        let randomIndex = RandomDimensions.getRandomSize(0, this.options.length)
        return this.create(this.options[randomIndex], x , y)
    }

    public static createTop(maxWidth : number)
    {
        let randomIndex = RandomDimensions.getRandomSize(0, this.options.length)
        let xRand = RandomDimensions.getRandomSize(this.sideMargins, maxWidth-this.sideMargins)
        let y = FigureViewFactory.yIni
        return this.create(this.options[randomIndex], xRand , y)

    }
}