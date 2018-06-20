var subClass1 = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  Dancer.call(this, top, left, timeBetweenSteps);

  this.step(timeBetweenSteps);
  this.$node = $('<span class="subClass1 w3-animate-zoom w3-spin"></span>');
  this.setPosition(top, left);

};



subClass1.prototype = Object.create(Dancer.prototype);
subClass1.constructor = subClass1;

subClass1.prototype.step = function(time) {

  Dancer.prototype.step.call(this, time);
  this.$node.toggle();

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};