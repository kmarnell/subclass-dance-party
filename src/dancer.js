var dancerCount = 0;

var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<img src="https://media.giphy.com/media/5fBH6zrcIiOs65zXCtG/giphy.gif" class="dancer" height="150px">');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step.call(this);
  this.setPosition.call(this, top, left);
  dancerCount++;
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

makeDancer.prototype.lineUp = function(top, left) {
  this.$node.css({top: top, left: left});
};