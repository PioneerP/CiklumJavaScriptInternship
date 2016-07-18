;(function() {

  var showMessage = function(messageFor) {             //  ---- функция показывает скрытое сообщение пользователю, принимает селектор для какого поля отобразить сообщение: '[data-id="..."]'
    var messageForNode = document.querySelector(messageFor),
        messageForNodeClass = messageForNode.className,
        newClass = TamperingClass.changeClass("hidden", "show", messageForNodeClass);

      messageForNode.className = newClass;
  };

  var hiddenMessage = function(messageFor) {             //  ---- функция скрывает сообщение показанное пользователю, принимает селектор для какого поля скрываем сообщение: '[data-id="..."]'
    var messageForNode = document.querySelector(messageFor),
        messageForNodeClass = messageForNode.className,
        newClass = TamperingClass.changeClass("show", "hidden", messageForNodeClass);

      messageForNode.className = newClass;
  };

  var statusMessage = function(messageFor) {             //  ---- функция отдает статус сообщения: показанное - 1 / скрытое - 0, принимает селектор для какого поля проверяем статус сообщения: '[data-id="..."]'
    var messageForNode = document.querySelector(messageFor),
        messageForNodeClass = messageForNode.className,
        indexShow = TamperingClass.searchClass("show", messageForNodeClass),
        statusMessage;

        if (indexShow == -1) {
          statusMessage = 0;
        } else {
          statusMessage = 1;
        }

      return statusMessage;
  };


  window.Message = {
    show: showMessage,
    hidden: hiddenMessage,
    status: statusMessage
  };
})();
