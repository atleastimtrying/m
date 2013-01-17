window.µ =
  addData: (label, object)->
    @objects = {} unless @objects
    @objects[label] = object

  addElements: (label, arr)->
    @addData label, @groupSelect arr

  getData: (label)->
    @objects[label]

  getOne:(label)->
    object = @getData(label)
    object[Object.keys(object)[0]]

  addFn: (label, fn)->
    @functions = {} unless @functions
    @functions[label] = fn

  getFn: (label)->
    @functions[label]

  bind: (object, evnt, fn)->
    object.addEventListener evnt, fn, false

  load: (fn)->
    @bind window, 'load', fn

  click: (selector)->
    @bind @select(selector), 'click', @functions[selector]

  visible: (label)->
    object = @getOne label
    object.style.display isnt 'none'

  select: (selector)->
    document.getElementsByClassName(selector)[0]

  each: (object, fn)->
    for attr of object
      fn object[attr]

  every: (arr, fn)->
    for item in arr
      fn item
  
  fnAll: (label, fn)->
    @each @getData(label), fn

  hideAll: (label)->
    @fnAll label, @hide

  hide: (item)->
    item.style.display = 'none'

  showAll: (label)->
    @fnAll label, @show

  show: (item)->
    item.style.display = 'block'

  groupSelect: (arr)->
    object = {}
    @every arr, (item)=>
      object[item] = @select item
    object

  find: (object, item)->
    object[item]