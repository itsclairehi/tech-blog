//basic create element function. don't forget to add jquery cdn script source to html

//combines finding element, then adding click function. must append new element. can define element as the argument inside sppend function
$("#btn").click(function(){
    $("#ol").append("<li>Appended item</li>");
})




$("#ol").on("click", "li", function(){
    console.log(this);
  });
  