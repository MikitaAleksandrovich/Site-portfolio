
  function clearFields ()  {
    
    var fields, fieldsArr;

    fields = document.querySelectorAll('#name' + ', ' + '#email' + ', ' + '#message');

    fieldsArr = Array.from(fields);
    fieldsArr.forEach(function (current) {
        current.value = "";

    });

    fieldsArr[0].focus();
}

function addBorder () {

    var nodeListForEach = function (list, callback) {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
    };

    fields = document.querySelectorAll('#name' + ', ' + '#email' + ', ' + '#message');

    nodeListForEach(fields, function(current) {
        current.classList.toggle('orange-focus');
    });
}

addBorder();


    document.querySelector('.send__btn').addEventListener('click', function () {
        clearFields();
    });

    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            clearFields ();
        }
    });  