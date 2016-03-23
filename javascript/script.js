/**
 * Created by ronnygeo on 3/21/16.
 */

//These are the only variables that needs to be changed in Production Deployment
variables = {
    formId: 'myForm',
    tbodyId: 'formTableBody',
    addButtonId: 'addToListButton',
    deleteButtonClass: 'deleteButton',
    inputFieldId: '',
    //Optional
    dataRowClass: ''
};

$(function(){
    var data = ['123','sdsd dsfs','dsdfdsfsd sdfsdfsdfsd', '234324234'];
    var $form = $('#'+variables.formId+'');
    var $table = $($form).find('table');
    var $tbody = $('#'+variables.tbodyId+'');
    var $addButton = $('#'+variables.addButtonId+'');
    var $inputField = $($form).find('thead').find('input');
    var $tempInput = "";

    /*** DOM Manipulation ***/
    //Getting the input from the input field and adding it to the data array.
    $($addButton).on("click", (function (e) {
        e.preventDefault();
        var item = $inputField.val();
        if ($tempInput == "") {
            data.push(item);
            updateRowData();
            addRow(data.indexOf(item));
        }
        else {
            var i = data.indexOf($tempInput);
            data[i] = item;
            console.log(data);
            updateRow(i);
        }
        $($inputField).val("");
    }));

    //Function to bind the edit click event to the list element.
    $($tbody).delegate('tr td:first-child', 'click', function(e){
        e.preventDefault();
        var rowId = $(this).data('row');
        // console.log(rowId);
        $inputField.val(data[rowId]);
        $tempInput = data[rowId];
    })
        //Function to bind the click event to the Delete link.
        .delegate('.deleteButton', 'click', function(e){
        e.preventDefault();
        var rowId = $(this).data("row");
        console.log(rowId);
        data.splice(rowId, 1);
        updateRowData();
        console.log(data);
        $($tbody).find('tr').eq(rowId).remove();
    })
        //This code is to fix the bug: Sometimes clicking on delete does not update the DOM with the new data value.
        .on('mouseup', function(){
            updateRowData();
        });

    /*** Helper Functions ***/
    //Function to repopulate the list of items.
    function populateList(){
        // $(table).find('tbody').empty();
        for (var i in data) {
            addRow(i);
        }
        updateRowData();
    }

    //Adds a row with index i to the table.
    function addRow(i){
        $($table).find('tbody').append('<tr class="dataRow"><td>'+data[i]+'</td><td><a class="deleteButton" >Delete</a></td></tr>');
    }

    //Updates the row with index i to the table.
    function updateRow(i){
        $($table).find('tbody').find('tr:eq('+i+')').html('<td>'+data[i]+'</td><td><a class="deleteButton" >Delete</a></td>');
    }

    //This function updates the data: row with the updated row value.
    function updateRowData() {
        $($tbody).find('tr').each(function(){
            var i = $('tr').index($(this)) - 1;
            $(this).find('a').data('row', i);
            $(this).find('td:first-child').data('row', i);
        });
    }

    //Populating the List Initially
    populateList();


});