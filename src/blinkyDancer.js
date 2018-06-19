var BlinkyDancer = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // var oldStep = this.step();
  this.$node = $('<span class="dancer"></span>');
  Dancer.call(this, top, left, timeBetweenSteps);
  // return blinkyDancer;
};



BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.constructor = BlinkyDancer;

BlinkyDancer.prototype.newStep = function(time) {
  // i: number, miliseconds
  // o: side effect

  // invoking the step method in the Dancer class

  Dancer.prototype.step.call(this, time);


  // call the old version of step at the beginning of any call to this new version of step
  // oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

//bob.oldStep(1000)
//bob.step(1000)



/*
var BlinkyDancer = function(top, left, timeBetweenSteps) {

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.oldStep
  var oldStep = blinkyDancer.step;


  return blinkyDancer;
};

var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

blinkyDancer.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  blinkyDancer.$node.toggle();
};
*/
