describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
    console.log(blinkyDancer);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });
 
  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('SpinnyDancer', function() {
  var spinnyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    spinnyDancer = new SpinnyDancer(10, 20, timeBetweenSteps);
    console.log(SpinnyDancer);
  });
  
  it('should have a w3-spin class', function() {
    expect(spinnyDancer.$node.hasClass('w3-spin')).to.be.true;
  });
});


describe('GetUpDancer', function() {
  var getUpDancer, clock;
  var timeBetweenSteps = 100;
  

  
  beforeEach(function() {
    clock = sinon.useFakeTimers();
    getUpDancer = new upArrow(15, 25, timeBetweenSteps);
    
    console.log(getUpDancer);
  });
  
  it('getUpDancers should fade in upon creation', function() {
    expect(getUpDancer.$node.hasClass('w3-animate-fading')).to.be.true;
  });
});

