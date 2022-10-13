 (function ($){
  "use strict";
  
  $.fn.floatinglabel = function(custom){
    var options =   $.extend({
                        ignoreId        : [],
                        animationIn     : {top: '-5px', opacity: '1'},
                        animationOut    : {top: '0', opacity: '0'},
                        delayIn         : 300,
                        delayOut        : 300,
                        easingIn        : false,
                        easingOut       : false,
                        labelClass      : 'floating-label',
                        pinClass        : 'pin'
                    }, custom),
        input   =   $(this).find(':input');

    // Core method. 
    function createLabel(input, value, customclass){
        var labelElement = $('<label></label>'),
            forid        = $(input).attr('id'),
            html         = $(input).attr('placeholder');

        // If input type is submit, do not continue.
        if ($(input).attr('type') == 'submit')
            return false;

        // label attributes, html and class
        labelElement.attr('for', forid);
        labelElement.html(html);
        labelElement.addClass(options.labelClass);

        // Adding label before the input field
        input.before(labelElement);

        // Attaching events for animation
        input.on("focusin.floatinglabel", function(){
            input.trigger("floatinginstart");
            labelElement.stop().animate(options.animationIn, options.delayIn, options.easingIn);
            input.trigger("floatinginend");
        });

        input.on("focusout.floatinglabel", function(){
            input.trigger("floatingoutstart");
            // if input field is no empty, then 
            // pin the label to make sure that
            // the user knows which field is that
            if ($(this).val().length > 0)
                labelElement.addClass(options.pinClass);
            else
                labelElement.animate(options.animationOut, options.delayOut, options.easingOut);

            input.trigger("floatingoutend");
        });
    }

    // Attaching a label for every input.
    $(input).each(function(){
        if ($.inArray($(this).attr('id'), options.ignoreId) == -1)
            createLabel($(this));
    });

    return this;
  };
}(jQuery));