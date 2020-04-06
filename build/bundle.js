(function () {
    'use strict';

    const helloWorld = "Hello World";
    class Beispiel extends HTMLElement {
        constructor() {
            super();
            this.innerHTML = "<h1>Hello World</h1>";
        }
    }

    console.log(helloWorld);
    customElements.define('my-beispiel', Beispiel);

}());
