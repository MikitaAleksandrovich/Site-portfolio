 
  function clearFields ()  {
    
    var fields, fieldsArr;

    fields = $('#name' + ', ' + '#email' + ', ' + '#message');

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

    fields = $('#name' + ', ' + '#email' + ', ' + '#message');

    nodeListForEach(fields, function(current) {
        current.classList.toggle('orange-focus');
    });
}

addBorder();


$('.send__btn').click(function () {
    clearFields();
});

$(document).keypress(function (event) {
    if (event.keyCode === 13 || event.which === 13) {
        clearFields ();
    }
});  