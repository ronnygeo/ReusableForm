/**
 * Created by ronnygeo on 3/21/16.
 */

(function(){

$(function(){
    var data = [];
    var form = $('#myForm');
    var table = $(form).find('table');
    var inputField = $(form).find('input');

    //Function to repopulate the list of items.
    function repopulateList(){
        $(table).find('tbody').empty();
        for (var i in data) {
            $(table).find('tbody').append('<tr class="dataRow"><td>'+data[i]+'</td><td><button>Delete</button></td></tr>');
        }
        // console.log(data);
    }

    //Getting the input from the input field and adding it to the data array.
    $('#addToListButton').click(function () {
        dataInput = inputField.val();
            data.push(dataInput);
        repopulateList();
    });

    // $(table).find('tr').click( function(e){
    //     console.log(e)
    //     alert('You clicked row '+ ($(this).index()) );
    // });

    $('.dataRow').find('button').click(function () {
        var row = $(this).closest('tr');
        var index = $(row).index() - 1;
        //console.log(row.rowIndex);
        //console.log(data[index]);
        //data.splice(index, 1);
        repopulateList();
    });


});

})();