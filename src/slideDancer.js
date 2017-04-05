var SlideDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
}

SlideDancer.prototype = Object.create(Dancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;

SlideDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.animate({marginLeft: '-20px'});
  this.$node.animate({marginLeft: '+20px'});
}

SlideDancer.prototype.lineUp = function(top, left) {
  this.$node.css({top: 360, left: left});
};