import { PolygonPathBuilder } from "../creational/PolygonPathBuilder"
import { NSides } from "../model/figures/NSides"

export class AreaMock{
    constructor()
    {
    
    }

    public static mockBasicFigures(){
        let b2 = new PolygonPathBuilder(0,0)
        b2.addPoints(10,3)
        let three = new NSides(b2)
        console.log(three.computeArea())

        //43.3

        let b3 = new PolygonPathBuilder(0,0)
        b3.addPoints(10,4)
        let four = new NSides(b3)
        console.log(four.computeArea())

        //100

        let b4 = new PolygonPathBuilder(0,0)
        b4.addPoints(10,5)
        let five = new NSides(b4)
        console.log(five.computeArea())

        //172

        let b5 = new PolygonPathBuilder(0,0)
        b5.addPoints(10,6)
        let six = new NSides(b5)
        console.log(six.computeArea())

        //259
    }

    public static mockNSides()
    {
        let builder = new PolygonPathBuilder(0,0)
        builder.addPoints(10,8)
        let eight = new NSides(builder)
        console.log(builder)
        console.log(eight.computeArea())

        //482
    }
}