$(function() {
  console.log("javascript hooked up");
  $("#shout-form").submit(function(event){
    $("#output").text(
      $("#user-input").val().toUpperCase()
    );
    event.preventDefault();
  });
});
