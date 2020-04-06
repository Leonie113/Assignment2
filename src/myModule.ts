export const helloWorld: string = "Hello World";

export class Beispiel extends HTMLElement{
    constructor(){
    super();
    this.innerHTML = "<h1>Hello World</h1>";
    }
}
