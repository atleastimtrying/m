
  window.µ = {
    addData: function(label, object) {
      if (!this.objects) this.objects = {};
      return this.objects[label] = object;
    },
    addElements: function(label, arr) {
      return this.addData(label, this.groupSelect(arr));
    },
    getData: function(label) {
      return this.objects[label];
    },
    getOne: function(label) {
      var object;
      object = this.getData(label);
      return object[Object.keys(object)[0]];
    },
    addFn: function(label, fn) {
      if (!this.functions) this.functions = {};
      return this.functions[label] = fn;
    },
    getFn: function(label) {
      return this.functions[label];
    },
    bind: function(object, evnt, fn) {
      return object.addEventListener(evnt, fn, false);
    },
    load: function(fn) {
      return this.bind(window, 'load', fn);
    },
    click: function(selector) {
      return this.bind(this.select(selector), 'click', this.functions[selector]);
    },
    visible: function(label) {
      var object;
      object = this.getOne(label);
      return object.style.display !== 'none';
    },
    select: function(selector) {
      return document.getElementsByClassName(selector)[0];
    },
    each: function(object, fn) {
      var attr, _results;
      _results = [];
      for (attr in object) {
        _results.push(fn(object[attr]));
      }
      return _results;
    },
    every: function(arr, fn) {
      var item, _i, _len, _results;
      _results = [];
      for (_i = 0, _len = arr.length; _i < _len; _i++) {
        item = arr[_i];
        _results.push(fn(item));
      }
      return _results;
    },
    fnAll: function(label, fn) {
      return this.each(this.getData(label), fn);
    },
    hideAll: function(label) {
      return this.fnAll(label, this.hide);
    },
    hide: function(item) {
      return item.style.display = 'none';
    },
    showAll: function(label) {
      return this.fnAll(label, this.show);
    },
    show: function(item) {
      return item.style.display = 'block';
    },
    groupSelect: function(arr) {
      var object;
      var _this = this;
      object = {};
      this.every(arr, function(item) {
        return object[item] = _this.select(item);
      });
      return object;
    },
    find: function(object, item) {
      return object[item];
    }
  };
