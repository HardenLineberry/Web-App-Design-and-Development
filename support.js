$(document).ready(function() {
    var formFields = $('.form-field');
    console.log(formFields)
    formFields.each(function() {
      var field = $(this);
      var input = field.find('input');
      var label = field.find('label');
      
      function checkInput() {
        var valueLength = input.val().length;
        
        if (valueLength > 0 ) {
          label.addClass('freeze')
        } else {
              label.removeClass('freeze')
        }
      }
      
      input.change(function() {
        checkInput()
      })
    });
  });