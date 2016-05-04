describe("Person", function() {
  var person;

  beforeEach(function() {
    person = new Person({weight: 90, height: 186});
  });

  it("should have weight of 90", function() {
    expect(person.weight).toEqual(90);
  });

  it("should have height of 186", function() {
    expect(person.height).toEqual(186);
  });

  it("should calculate BMI value", function(){
    person.calculate_bmi();
    expect(person.bmiValue).toEqual(26.01)
  });

  it("should have a BMI Message", function(){
    person.calculate_bmi();
    expect(person.bmiMessage).toEqual("'Overweight'")
  });
});

describe("Person1", function() {
  var person1;

  beforeEach(function() {
    person1 = new Person1({weight: 190, height: 73});
  });

  it("should have weight of 190", function() {
    expect(person1.weight).toEqual(190);
  });

  it("should have height of 73", function() {
    expect(person1.height).toEqual(73);
  });

  it("should calculate BMI value", function(){
    person1.calculate_bmi();
    expect(person1.bmiValue).toEqual(25.06)
  });

  it("should have a BMI Message", function(){
    person1.calculate_bmi();
    expect(person1.bmiMessage).toEqual("'Overweight'")
  });
});
