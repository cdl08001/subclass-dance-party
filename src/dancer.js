var Dancer = function(top, left, timeBetweenSteps) {
  // i: numbers, three
  // o: object, new object instance
  // c: inputs have to be numeric values
  // e: what happens if there are two instances with the same input arguments

  // create a span element with the class 'dancer'
  // schedule the next step after timeBetweenSteps miliseconds
  //  establishes the time between each step for the dancer
  // establishes where the dancer sits on the page

  this.$node = $('<span class="dancer"></span>');

  setTimeout(this.step.bind(this, timeBetweenSteps), 1000);
  setTimeout(this.setPosition.bind(this, top, left), 1000);
};

Dancer.prototype.step = function(time) {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step, time);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

/*

// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  // i: numbers, three
  // o: object, new object instance

  // create a span element with the class 'dancer'
  // schedule the next step after timeBetweenSteps miliseconds
  //  establishes the time between each step for the dancer
  // establishes where the dancer sits on the page


  // var dancer = {};

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step(timeBetweenSteps);


  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

  // return dancer;
};

Dancer.prototype.step = function(time) {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step, time);
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};



*/