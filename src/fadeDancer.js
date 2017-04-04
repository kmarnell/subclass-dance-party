var fadeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
};

fadeDancer.prototype = Object.create(makeDancer.prototype);
fadeDancer.prototype.constructor = fadeDancer;

fadeDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.fadeToggle();
};