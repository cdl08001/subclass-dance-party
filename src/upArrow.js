var upArrow = function(top, left, timeBetweenSteps) {
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  Dancer.call(this, top, left, timeBetweenSteps);

  this.step(timeBetweenSteps);
  this.$node = $('<span class="upArrow w3-animate-fading"></span>');
  this.setPosition(top, left);
  // this.$node.toggle();
  // this.$node.fadeIn('slow');
};

upArrow.prototype.fadeIn = function () {
  
  this.$node.fadeIn('slow');
  this.fadeOut();
};

upArrow.prototype.fadeOut = function () {
  
  this.$node.fadeOut('slow');
  this.fadeIn();
};


upArrow.prototype = Object.create(Dancer.prototype);
upArrow.constructor = upArrow;

upArrow.prototype.step = function(time) {

  Dancer.prototype.step.call(this, time);
  // this.$node.toggle();

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};
