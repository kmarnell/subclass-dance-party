var dancerCount = 0;

var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<img src="https://s-media-cache-ak0.pinimg.com/736x/55/93/7d/55937dc54afe04e6b6f8a746b49215aa.jpg" class="dancer" height="150px">');
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

makeDancer.prototype.lineUp = function() {

};