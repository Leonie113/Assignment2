   //__Eigencode__
   //Switch Color Button
var color = ["#58D3F7", "#FF0000", "#01DF3A", "#FACC2E", "#F5A9BC", "#fff"];
var i = 0;

export function changeColor() {
    document.querySelector("#color")!.addEventListener("click", function() {
      i = i < color.length ? ++i : 0;
    document.querySelector("body")!.style.background = color[i]
    })
}