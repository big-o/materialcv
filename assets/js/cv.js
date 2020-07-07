$(function() {
  'use strict';

  $('.tooltipped').tooltip();

  $('.cv-contacts a.btn').on('mouseenter mouseleave', function(evt) {
    var icon = $(evt.target).find('div.icon');
    if (icon.length === 0) {
      icon = $(evt.target).parent('a.btn').find('div.icon');
    }

    var fontsize = '1.15rem';
    if (evt.type === 'mouseenter') {
      fontsize = '1.8rem';
    }

    icon.animate({
      'font-size': fontsize,
    }, {
      duration: 300,
    });
  });

});
