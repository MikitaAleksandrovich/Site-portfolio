 
//   function clearFields ()  {
    
//     var fields, fieldsArr;

//     fields = $('#name' + ', ' + '#email' + ', ' + '#message');

//     fieldsArr = Array.from(fields);
//     fieldsArr.forEach(function (current) {
//         current.value = "";

//     });


function addThanks() {
     document.querySelector('.feedback').style.display = 'none';
	 document.querySelector('.thanks').style.display = 'block';
}


addBorder();
addThanks();

$(document).keypress(function (event) {
    if (event.keyCode === 13 || event.which === 13) {
        clearFields ();
    }
});  