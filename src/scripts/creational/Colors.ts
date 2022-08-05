export class Colors
{
    constructor()
    {
    }

    public static getRandomColor()
    {
        const genRanHex = (size : number) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
        return Number("0x"+genRanHex(8))
    }
}