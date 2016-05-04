$(document).ready(function () {
  $('#myonoffswitch').click(function () {
    if($('#myonoffswitch:checkbox:checked').length > 0) {
      //use imperial method
      $('#weight').attr('placeholder', 'Weight in KG');
    } else {
      //use metric method
      $('#weight').attr('placeholder', 'Weight in Pounds');
    }

    //$('#weight').attr('placeholder', 'Weight (KG)').val('TEST').focus().blur();
  });
});
