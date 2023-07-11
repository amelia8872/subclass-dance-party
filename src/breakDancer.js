var BreakDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('BreakDancer');
};

BreakDancer.prototype = Object.create(Dancer.prototype);
BreakDancer.prototype.constructor = BreakDancer;

BreakDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

