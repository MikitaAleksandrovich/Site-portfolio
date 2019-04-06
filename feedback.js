 
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

addBorder();
clearFields();

