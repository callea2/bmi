$(document).ready(function () {
  $getElementById("myonoffswitch").click = function() {
    if (this.checked) {
      $('#calculate').click(function () {
        var w = parseFloat($('#weight').val());
        var h = parseFloat($('#height').val());
        var person = new Person1({weight: w, height: h});
        person1.calculate_bmi();
        $('#display_value').html('Your BMI is ' + person1.bmiValue);
        $('#display_message').html('and your status is '+ person1.bmiMessage);
      });
    }
    else {
      $('#calculate').click(function () {
        var w = parseFloat($('#weight').val());
        var h = parseFloat($('#height').val());
        var person = new Person({weight: w, height: h});
        person.calculate_bmi();
        $('#display_value').html('Your BMI is ' + person.bmiValue);
        $('#display_message').html('and your status is '+ person.bmiMessage);
      });
    }
  };
});
