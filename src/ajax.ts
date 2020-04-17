//__Eigencode__
//Ajax: How to Use Info

export function ajax (){
document.getElementById("textbutton")!.addEventListener("click", function (){
    var xhttp = new XMLHttpRequest ();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
  
        document.getElementById("text")!.innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "howto.txt", true);
    xhttp.send();
    })
  
  var textbutton = document.getElementById("textbutton");
  textbutton!.addEventListener("dblclick", elementEntfernen);
  
  function elementEntfernen (t: any) {
    var textbutton = t.target;
    var text = document.getElementById("text");
    if (text != textbutton){
      var parent = textbutton.parentNode;
      parent.removeChild(text);
      return false;
    }
  }
}