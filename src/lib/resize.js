(function ( $ ) {
  $.fn.resizable = function ( orientation ) {
    var resizer = $('<div>').addClass('resizer').addClass(orientation+'-resize');
    this.append(resizer).addClass('resizable');

    resizer.on('mousedown',initDrag);

    var startX, startY, startWidth, startHeight;

    var resizable = this;

    function initDrag (e){
      startX = e.clientX;
      startY = e.clientY;
      startWidth = resizable.outerWidth();
      startHeight = resizable.outerHeight();

      $(document).on('mousemove',doDrag);
      $(document).on('mouseup',stopDrag);
    };
  
    var east,south,north,west;
    south = orientation.search("s") >= 0;
    east = orientation.search("e") >= 0;
    north = orientation.search("n") >= 0;
    west = orientation.search("w") >= 0;

    function doDrag (e) {
      if (south)
        resizable.css('height',(startHeight + e.clientY - startY) + 'px');
      if (east)
        resizable.css('width',(startWidth + e.clientX - startX) + 'px');
      if (north)
        resizable.css('top',(e.clientY) + 'px')
                 .css('height',(startHeight + startY - e.clientY) + 'px');
      if (west)
        resizable.css('left',(e.clientX) + 'px')
                 .css('width',(startWidth - e.clientX) + 'px');
    };

    function stopDrag (e){
      $(document).off( 'mousemove', doDrag );
      $(document).off( 'mouseup', stopDrag );
      resizable.trigger('resize');
    };

    return this;
  }
}(jQuery));