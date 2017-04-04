var slideDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
}

slideDancer.prototype = Object.create(makeDancer.prototype);
slideDancer.prototype.constructor = slideDancer;

slideDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.animate({marginLeft: '-20px'});
  this.$node.animate({marginLeft: '+20px'});
}

slideDancer.prototype.lineUp = function(top, left) {
  this.$node.css({top: 400, left: left});
};