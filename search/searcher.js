$(document).ready(function(){
    $('#search').keyup(function(){
        $('#result').html('');
        var searchField = $('#search').val();
        var expression = new RegExp(searchField,"i");
        $.getJSON('search/datastore/2020ngeeannintake.json',function(data){
            $.each(data,function(key,value){
              if(value.school.search(expression) !=-1||value.course_name.search(expression) !=-1){
                $('#result').append('')
              }

            });
        });

    });
 $('#result').on('click', 'li', function() {
  var click_text = $(this).text().split('|');
  $('#search').val($.trim(click_text[0]));
  $("#result").html('');
 });


     
});
