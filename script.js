window.addEventListener('load',function(){
    const pullDownButton = document.getElementById("lists");
    pullDownButton.addEventListener("mouseover", function() {
    console.log("乗る");
    });

    pullDownButton.addEventListener("click", function() {
    console.log("クリック");
    });

    pullDownButton.addEventListener("mouseleave", function() {
    console.log("外れる");
  });
})

