/**
 * Created by ronnygeo on 3/21/16.
 */

$(function(){
    var data = ['data','j','k'];
    var form = $('#myForm');
    var table = $(form).find('table');
    var inputField = $(form).find('thead').find('input');


    //Function to repopulate the list of items.
    function repopulateList(){
        $(table).find('tbody').empty();
        for (var i in data) {
            $(table).find('tbody').append('<tr class="dataRow"><td>'+data[i]+'</td><td><a>Delete</a></td></tr>');
        }
    }
    repopulateList();

    //Getting the input from the input field and adding it to the data array.
    $('#addToListButton').bind("click", (function () {
        var item = inputField.val();
        data.push(item);
        repopulateList();
    }));

    // $(table).find('tr').click( function(e){
    //     console.log(e)
    //     alert('You clicked row '+ ($(this).index()) );
    // });

    $(table).find('tbody').find('a').click(function () {
        var row = $(this).closest('tr');
        //console.log($('tbody').index(row))
        var index = $(row).index() - 1;
        console.log($(this).closest('tr'));
        console.log($(this).index());
        //console.log(data[index]);
        data.splice(index, 1);
        repopulateList();
    });


});