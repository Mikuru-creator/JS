window.addEventListener('load',function(){
    const pullDownButton = document.getElementById("lists");
    const pullDownParents = document.getElementById("pull-down")

    pullDownButton.addEventListener("mouseover", function() {
        this.setAttribute("style","background-color:blue;")
        console.log("乗った時は青色");
    });

    pullDownButton.addEventListener("click", function() {
        if (pullDownParents.getAttribute("style") == "display:block;"){
            pullDownParents.removeAttribute("style", "display:block;");
            console.log("非表示");
        } else {
            pullDownParents.setAttribute("style","display:block;");
            console.log("表示");
        }
    });

    pullDownButton.addEventListener("mouseleave", function() {
        console.log("外れた時は赤色");
        this.removeAttribute("style","background-color:red;");
  });
})