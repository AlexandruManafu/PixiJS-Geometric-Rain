export class RandomDimensions{
    constructor()
    {}

    public static getRandomSize(min: number, max:number)
    {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

}