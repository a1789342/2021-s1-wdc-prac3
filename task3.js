//<!-- Task 3.1-->

var num = 1;

function mouseOver() {
	document.getElementById("mcount").innerHTML = num++;
  }

//<!-- Task 3.2-->

function mouseClick() {


    var date = new Date();

    var time = document.getElementsByClassName("post-time")[0].innerHTML = date;

    var contents = document.getElementsByClassName("post-content")[0].innerHTML = document.getElementById("box").value;


}

//<!-- Task 3.3-->

function clickMenu() {
    var main = document.querySelector("#main");
    main.style.display = "none";

    var menu = document.querySelector("#menu");
    menu.style.display = "";

}

function clickBack() {
    var main = document.querySelector("#main");
    main.style.display = "";

    var menu = document.querySelector("#menu");
    menu.style.display = "none";

}


//<-- Task 3.5-->

function changeColor(event) {
	document.body.style.backgroundColor = event.target.value;
}

