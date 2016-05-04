$(document).ready(function () {
  $('#myonoffswitch').click(function () {
    $('#weight').attr('placeholder', 'Weight (KG)').val('TEST').focus().blur();
  });
});
