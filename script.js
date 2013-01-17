
  µ.load(function() {
    µ.addElements('elements', ['html', 'css', 'js']);
    µ.addElements('rubyElements', ['haml', 'scss', 'cs']);
    µ.hideAll('rubyElements');
    µ.addFn('toggle', function(evnt) {
      if (µ.visible('elements')) {
        µ.hideAll('elements');
        µ.showAll('rubyElements');
      } else {
        µ.hideAll('rubyElements');
        µ.showAll('elements');
      }
      return false;
    });
    return µ.click('toggle');
  });
