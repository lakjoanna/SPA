$(document).ready(function() {
    $("#depart").datepicker({
        showAnim: 'drop',
        minDate: 0,
        dateFormat:'dd/mm/yy',
        onClose: function (selectedDate) {
            $("#return").datepicker("option","minDate",selectedDate);
        }

    });

    $("#return").datepicker({
        showAnim: 'drop',
        minDate: 0,
        maxDate: '1y',
        dateFormat:'dd/mm/yy',
        onClose: function (selectedDate) {
            $("#return").datepicker("option","minDate",selectedDate);
        }
});
   
$(document).on( ' input change', '#vochDate', function(){
    $('.err').remove();
       const nr_years = 1;
       var maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + nr_years));
      var curDate = $(this).datepicker("getDate");
      if (curDate > maxDate) {
          
          $('#vochDate').after('<span class="err"> Invalid Date </span>');
          $(this).datepicker("setDate",  new Date());         
      }      
 })
});

