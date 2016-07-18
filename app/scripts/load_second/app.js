window.addEventListener('load', function() {
  var subForm =  document.querySelector('[data-id="subForm"]');
  var nameNode = document.getElementById('name');
  var emailNode = document.getElementById('email');
  var passwordNode = document.getElementById('password');



  var refreshPage = function (timeShowMessageAccess) {     // функция обновления страницы
    setTimeout(function () {
        location.reload();
    }, timeShowMessageAccess * 5 *1000);
  };


  subForm.addEventListener('submit', function(e) {

    if (!subForm.name.value) {                                   // ----------------  Проверка ввода Имени Пользователя
      nameNode.style.border = '2px solid red';
    } else {
      nameNode.style.border = '1px solid #fff';
    }

    if ( !subForm.email.value || (!/\S+@\S+\.\S+/.test(subForm.email.value)) ) {       // ----------------  Проверка ввода Email Пользователя
      emailNode.style.border = '2px solid red';
    } else if ( subForm.email.value && (/\S+@\S+\.\S+/.test(subForm.email.value)) ) {
      emailNode.style.border = '1px solid #fff';
    }

    if (!subForm.password.value) {                                   // ----------------  Проверка ввода Пароля
      passwordNode.style.border = '2px solid red';
    } else {
      passwordNode.style.border = '1px solid #fff';
    }


    if (subForm.name.value) {
      if (subForm.email.value && (/\S+@\S+\.\S+/.test(subForm.email.value)) ) {
        if (subForm.password.value) {

          var timeShowMessageAccess = 2;
          Message.show('[data-id="accessSubmissionFormSubscription"]');
          refreshPage(timeShowMessageAccess);
        }
      }
    }


    e.preventDefault();
    return false;
  });
});
