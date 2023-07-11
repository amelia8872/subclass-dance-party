var BouncyDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('BouncyDancer');
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('BounceUp');
  if (!this.$node.hasClass('BounceUp')) {
    this.$node.toggleClass('BounceDown');
  }
};