describe('fadeyDancer', function() {

  var fadeyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    fadeyDancer = new fadeDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(fadeyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node fade in and out', function() {
    sinon.spy(fadeyDancer.$node, 'fadeToggle');
    fadeyDancer.step();
    expect(fadeyDancer.$node.fadeToggle.called).to.be.true;
  });

  it('should have a lineUp method', function() {
    expect(fadeyDancer.lineUp).to.be.a('function');
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(fadeyDancer, 'step');
      expect(fadeyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(fadeyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(fadeyDancer.step.callCount).to.be.equal(2);
    });
  });
});
