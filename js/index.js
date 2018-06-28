
StarWars = (function() {
 
  function StarWars(args) {
    
    this.el = $(args.el);
    
    
    this.audio = this.el.find('audio').get(0);
    
    
    this.start = this.el.find('.start');
    
    
    this.animation = this.el.find('.animation');
    
    
    this.reset();

    
    this.start.bind('click', $.proxy(function() {
      this.start.hide();
      this.audio.play();
      this.el.append(this.animation);
    }, this));
    
    
    $(this.audio).bind('ended', $.proxy(function() {
      this.audio.currentTime = 0;
      this.reset();
    }, this));
  }

  StarWars.prototype.reset = function() {
    this.start.show();
    this.cloned = this.animation.clone(true);
    this.animation.remove();
    this.animation = this.cloned;
  };

  return StarWars;
})();

new StarWars({
  el : '.starwars'
});