;(function() {                // soughtForClass - искомый класс, addedClass - добавляемый класс, inClasses - в классах

  var searchClass = function(soughtForClass, inClasses) {     // поиск класса
    if (typeof(inClasses) !== 'object') {
      var inClassesArr = inClasses.split(' ');
    } else {
      inClassesArr = inClasses;
    }
        var  indexSoughtForClass = inClassesArr.indexOf(soughtForClass);

          return indexSoughtForClass;
  }

  var removeClass = function(indexRemovedClass, inClasses) {          //удаление класса
    if (indexRemovedClass != -1) {
      if (typeof(inClasses) !== 'object') {
        var inClassesArr = inClasses.split(' ');
      } else {
        inClassesArr = inClasses;
      }
            inClassesArr.splice(indexRemovedClass, 1);
          var newClasses = inClassesArr.join(' ');

    } else {
      newClasses = inClasses;
    }

          return newClasses;
  }

  var addClass = function(addedClass, inClasses) {               // добавление класса
    if (typeof(inClasses) !== 'object') {
      var inClassesArr = inClasses.split(' ');
    } else {
      inClassesArr = inClasses;
    }

          inClassesArr.push(addedClass);
        var newClasses = inClassesArr.join(' ');

          return newClasses;
  }

  var changeClass = function(removedClass, addedClass, inClasses) {    // замена одного класса на другой
    if (typeof(inClasses) !== 'object') {
      var inClassesArr = inClasses.split(' ');
    } else {
      inClassesArr = inClasses;
    }

    var indexSoughtForClass = searchClass(removedClass, inClassesArr);
    var tempClassArr = removeClass(indexSoughtForClass, inClassesArr);
    var newClasses = addClass(addedClass, inClassesArr);

      return newClasses;
  }


  window.TamperingClass = {
    searchClass: searchClass,
    removeClass: removeClass,
    addClass: addClass,
    changeClass: changeClass
  };
})();
