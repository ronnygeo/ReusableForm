/**
 * Created by ronnygeo on 3/21/16.
 */

$(function(){
    var data = ['s1','s2','s3'];
    var form = $('#myForm');
    var table = $(form).find('table');
    var inputField = $(form).find('thead').find('input');


    //Function to repopulate the list of items.
    function populateList(){
        // $(table).find('tbody').empty();
        for (var i in data) {
            addRow(i);
            }
        updateRowData()
    }

    function addRow(i){
        $(table).find('tbody').append('<tr class="dataRow"><td>'+data[i]+'</td><td><a class="deleteButton" >Delete</a></td></tr>');
    }

    function updateRowData() {
        $('#formTableBody').find('tr').each(function(){
            var i = $('tr').index($(this)) - 1;
            $(this).find('a').prop('data-row', i);
        });
    }
    populateList();

    //Getting the input from the input field and adding it to the data array.
    $('#addToListButton').on("click", (function (e) {
        e.preventDefault();
        var item = inputField.val();
        data.push(item);
        $(inputField).val("");
        addRow(data.indexOf(item));
        updateRowData()
    }));

    $('#formTableBody').delegate('.deleteButton', 'click', function(e){
        e.preventDefault();
        rowId = $(this).prop("data-row");
        console.log(rowId);
        // item = data[rowId];
        data.splice(rowId, 1);
        console.log(data);
        updateRowData();
        //$('#formTableBody').find('tr:nth-child('+rowId+')').remove()
        $('#formTableBody').find('tr').eq(rowId).remove()
        e.stopPropagation();
    });

    // $('#formTableBody').on('mouseenter', function (ev) {
    //     var flag = 0;
    //     $(this).children().each(function () {
    //     // console.log($(this));
    //     $(this).find('.deleteButton').on("click", function (e) {
    //         e.preventDefault();
    //         var rowId = $(this).data("row");
    //         if (flag === 0) {
    //             data.splice(rowId,1);
    //
    //         console.log(data);
    //         repopulateList();
    //         e.stopPropagation();
    //         flag = 1;
    //         }});
    //    ev.stopPropagation();
    // });
    // });


});