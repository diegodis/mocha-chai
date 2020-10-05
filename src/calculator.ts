export class Calculator{
    value:number
    description:string

    constructor(){
        this.value = 0;
    }

    add (n:number):number{
        this.value += n;
        return this.value;
    }

    addText(s:string):string{
        this.description += s;
        return this.description;
    }
}