// Come up with 4 different ways to select the first <p> tag
document.getElementById("first");
document.getElementsByTagName("p");
document.getElementsByClassName("special")[0];

document.querySelector("#first");
document.querySelector("p");
document.querySelector("h1 + p");

document.querySelectorAll("#first")[0];
document.querySelectorAll("p")[0];
document.querySelectorAll(".special")[0];