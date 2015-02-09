window.onload = function () {
    var links = document.getElementsByTagName("a");    
    for (var i=0;i<links.length;i++) {
        if (links[i].className.indexOf("menulink") > -1) {
            links[i].onclick = function () {return false;}
            links[i].onmouseover = function () { // toggleMenu
                var startMenu = this.href.lastIndexOf("/")+1;
                var stopMenu = this.href.lastIndexOf(".");
                var thisMenuName = this.href.substring(startMenu,stopMenu);
 
                document.getElementById(thisMenuName).style.display="block";
 
                this.parentNode.className = thisMenuName;
                this.parentNode.onmouseout = function () { //toggleDivOff;
                    document.getElementById(this.className).style.display = "none"; 
                } 
                this.parentNode.onmouseover = function () {  //toggleDivOn;
                    document.getElementById(this.className).style.display = "block"; 
                }
            }
        }
    }
}