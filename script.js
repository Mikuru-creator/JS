function pullDown() {
    const pullDownButton = document.getElementById("lists");
    const pullDownParents = document.getElementById("pull-down");
    const pullDownChild = document.querySelectorAll(".pull-down-list");
    const currentList = document.getElementById("current-list");

    pullDownButton.addEventListener("mouseover", function() {
        this.setAttribute("style","background-color:blue;");
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

    pullDownChild.forEach(function(list, index) {
        list.addEventListener('click', function() {
            const value = list.innerHTML;
            currentList.innerHTML = value;
            console.log(value);

            if (index === 0) {
                location.href = "https://fp-curriculum.com/";
            }
        });
    });
}

window.addEventListener('load',pullDown)