var FadeDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

FadeDancer.prototype = Object.create(Dancer.prototype);
FadeDancer.prototype.constructor = FadeDancer;

FadeDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.fadeToggle();
};

FadeDancer.prototype.lineUp = function(top, left) {
  this.$node.css({top: 600, left: left});
};