 
  function clearFields () {
    
    let fields, fieldsArr;

    fields = $('#name' + ', ' + '#email' + ', ' + '#message');

    fieldsArr = Array.from(fields);
    fieldsArr.forEach( current => { current.value = "" } );

    fieldsArr[0].focus();
}


function addThanks() {
     document.querySelector('.feedback').style.display = 'none';
	 document.querySelector('.thanks').style.display = 'block';
}


addBorder();
addThanks();

