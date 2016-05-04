function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
};

function Person1(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
};

Person.prototype.calculate_bmi = function() {
  calculator = new BMICalculator();
  calculator.metric_bmi(this);
};

Person1.prototype.calculate_bmi = function() {
  calculator = new BMICalculator();
  calculator.imperial_bmi(this);
};
