/**
 * Created by ronnygeo on 3/21/16.
 */

$(function(){
    var data = ['s','s','s'];
    var form = $('#myForm');
    var table = $(form).find('table');
    var inputField = $(form).find('thead').find('input');


    //Function to repopulate the list of items.
    function repopulateList(){
        $(table).find('tbody').empty();
        for (var i in data) {
            // var trow =
            $(table).find('tbody').append('<tr class="dataRow"><td>'+data[i]+'</td><td><a class="deleteButton" data-row="'+i+'">Delete</a></td></tr>');
        }
    }
    repopulateList();

    //Getting the input from the input field and adding it to the data array.
    $('#addToListButton').on("click", (function (e) {
        e.preventDefault();
        var item = inputField.val();
        data.push(item);
        $(inputField).val("");
        repopulateList();
    }));

    $('#formTableBody').on('mouseenter', function () {
        $(this).children().each(function () {
        // console.log($(this));
        $(this).find('.deleteButton').on("click", function (e) {
            e.preventDefault();
            var rowId = $(this).data("row");
            data.splice(rowId,1);
            repopulateList();
            e.stopPropagation();
        });
    });
    });


});