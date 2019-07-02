 
//   function clearFields ()  {
    
//     var fields, fieldsArr;

//     fields = $('#name' + ', ' + '#email' + ', ' + '#message');

//     fieldsArr = Array.from(fields);
//     fieldsArr.forEach(function (current) {
//         current.value = "";

//     });

//     fieldsArr[0].focus();
// }



$('.send__btn').click(function () {
    clearFields();
});

$(document).keypress(function (event) {
    if (event.keyCode === 13 || event.which === 13) {
        clearFields ();
    }
});  