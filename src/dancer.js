var dancerCount = 0;

var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<img src="http://i.imgur.com/G6KaInG.gif" class="dancer" height="250px">');
  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  var context = this;
  setTimeout(function() { context.step(); }, this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(top, left) {
  this.$node.css({top: top, left: left});
};