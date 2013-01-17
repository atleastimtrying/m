µ.load ->
  µ.addElements 'elements', ['html', 'css', 'js']
  µ.addElements 'rubyElements', ['haml', 'scss', 'cs']
  µ.hideAll 'rubyElements'
  µ.addFn 'toggle', (evnt)->
    if µ.visible 'elements'
      µ.hideAll 'elements'
      µ.showAll 'rubyElements'
    else
      µ.hideAll 'rubyElements'
      µ.showAll 'elements'
    false
  µ.click 'toggle'
