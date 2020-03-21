
$(document).ready(function(){
  $("input[name=colourPicker]:radio").change(function () {
    $("#selectedColour").html($("input[name=colourPicker]:checked").val());
  });
});
