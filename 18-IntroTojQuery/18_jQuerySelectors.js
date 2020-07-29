// Select all divs and give them a purple background
$("div").css("background-color", "purple");

// Select the divs with class "highlight" and make them 200px wide
$(".highlight").css("width", "200px");
// OR more specifically $("div.highlight")

// Select the div with id "third" and give it a orange border
$("#third").css("border", "2px solid yellow")

// Bonus: Select the first div only and change its font color to pink
$("div:first-of-type").css("color", "pink");

// OR
// $("div").first().css("color", "pink");
// note: first() = built-in jQuery selector whereas first-of-type = built-in CSS selector hence the latter is faster and preferred
