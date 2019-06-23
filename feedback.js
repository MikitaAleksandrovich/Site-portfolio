 
  function clearFields () {
    
    let fields, fieldsArr;

    fields = $('#name' + ', ' + '#email' + ', ' + '#message');

    fieldsArr = Array.from(fields);
    fieldsArr.forEach( current => { current.value = "" } );

    fieldsArr[0].focus();
}

function addBorder () {

    let nodeListForEach = (list, callback) => {
        for (var i = 0; i < list.length; i++) {
            callback(list[i], i);
        }
    };

    fields = $('#name' + ', ' + '#email' + ', ' + '#message');

    nodeListForEach(fields, current => {
        current.classList.toggle('orange-focus');
    });
}

document.querySelector('.send__btn').addEventListener('click', addThanks);

document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13 || event.which === 13) {
        addThanks();
      }
});  


function addThanks() {
     document.querySelector('.feedback').style.display = 'none';
	 document.querySelector('.thanks').style.display = 'block';
}


addBorder();
<<<<<<< HEAD
addThanks();
=======

>>>>>>> 2ae5a709e2489a9b5a70833deab5321e29af38d3

