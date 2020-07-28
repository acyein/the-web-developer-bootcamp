// Strikethrough specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("done");
});

// Click on bin to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){                         // 13 is the enter key
        // Grab new todo from input
        var todoText = $(this).val();
        $(this).val("");
        // Create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

$(".fa-pen").click(function(){
    $("input[type='text']").fadeToggle();
});