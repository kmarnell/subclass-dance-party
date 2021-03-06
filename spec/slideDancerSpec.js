describe('slideyDancer', function() {

  var slideyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    slideyDancer = new SlideDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(slideyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node slide', function() {
    sinon.spy(slideyDancer.$node, 'animate');
    slideyDancer.step();
    expect(slideyDancer.$node.animate.called).to.be.true;
  });

  it('should have a lineUp method', function() {
    expect(slideyDancer.lineUp).to.be.a('function');
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(slideyDancer, 'step');
      expect(slideyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...

      expect(slideyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(slideyDancer.step.callCount).to.be.equal(2);
    });
  });
});
