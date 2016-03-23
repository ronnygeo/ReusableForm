/**
 * Created by ronnygeo on 3/21/16.
 */

//These are the only variables that needs to be changed in Production Deployment
variables = {
    formId: 'myForm',
    deleteButtonClass: 'deleteButton',
    postUrl: '#',
    //Optional
    dataRowClass: '',
    defaultColor: '',
    addButtonId: 'addToListButton',
    placeholderText: 'Enter note',
    submitButtonText: 'SUBMIT'
};

$(function(){
    var data = [];
    var $form = $('#'+variables.formId+'');
    var $table = $($form).find('table');
    var $tbody = $($table).find('tbody');
    var $addButton = $('#'+variables.addButtonId+'');
    var $inputField = $($form).find('thead').find('input');
    var $submitButton = $($form).find('#formSubmitButton');
    var $tempInput = "";

    /*** DOM Manipulation ***/

    //Assigning the placeholder text and assigning behavior for Enter key.
    $($inputField).prop('placeholder', variables.placeholderText)
        .keypress(function (e) {
            if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
                $($addButton).click();
                return false;
            } else {
                return true;
            }
        });

    //Getting the input from the input field and adding it to the data array.
    $($addButton).on("click", (function (e) {
        e.preventDefault();
        var item = $inputField.val();
        if ($tempInput == "") {
            if (item !== ""){
            data.push(item);
            updateRowData();
            addRow(data.indexOf(item));
            }}
        else {
            var i = data.indexOf($tempInput);
            data[i] = item;
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
        // console.log(rowId);
        data.splice(rowId, 1);
        updateRowData();
        // console.log(data);
        $($tbody).find('tr').eq(rowId).remove();
    })
        //When mouse hovers over a row, highlight the row.
        .delegate('tr', 'mouseover', function(){
            $(this).addClass('rowHover');
        })
        //When the mouse moves out of a row, removing highlight.
        .on('mouseout', function(){
            $(this).find('tr').removeClass('rowHover');
        })
        //This code is to fix the bug: Sometimes clicking on delete does not update the DOM with the new data value.
        .on('mouseup', function(){
            updateRowData();
        });

    //Handling form submission.
    //This code needs to be changed depending on the type of POST used.
    $($submitButton).text(variables.submitButtonText)
        .on('click', function (e) {
            // alert(data);
            $.post(variables.postUrl, {'data[]': data});
            e.preventDefault();
        });


    /*** Helper Functions ***/
    //Function to repopulate the list of items.
    function populateList(){
        // $(table).find('tbody').empty();
        for (var i in data) {
            addRow(i);
        }
        $($table).find('tbody').find('tr').removeClass('newRow');
        updateRowData();
    }

    //Adds a row with index i to the table.
    function addRow(i) {
        $($table).find('tbody').append('<tr class="dataRow newRow"><td>' + data[i] + '</td><td><a href="" class="deleteButton" ><img src="images/icons/delete.png" alt="delete item" /></a></td></tr>');
        //Remove the new row highlight after delay.
        delayTime(function () {
            $($table).find('tbody').find('tr:last-child').removeClass('newRow')
        }, 400);
    }

    //Updates the row with index i to the table.
    function updateRow(i){
        $($table).find('tbody').find('tr:eq(' + i + ')').html('<td>' + data[i] + '</td><td><a href="" class="deleteButton" ><img src="images/icons/delete.png" alt="delete item" /></a></td>')
            .addClass('newRow');
        $tempInput = "";
        delayTime(function () {
            $($table).find('tbody').find('tr').eq(i).removeClass('newRow')
        }, 400);
    }

    //This functions adds a delay before calling a function.
    function delayTime(func, time) {
        setTimeout(func, time);
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