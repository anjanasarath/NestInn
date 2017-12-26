/*$( document ).ready(function() {
  console.log("working!");
  /*$('#nestslider').bind('mousewheel', function(e) {
    console.log(e.originalEvent.wheelDelta);
    if(e.originalEvent.wheelDelta /120 > 0) {
      $(this).carousel('next');
    } else {
      $(this).carousel('prev');
    }
  });
})*/
$(document).ready(function () {
   var popoverTemplate = ['<div class="timePickerWrapper popover">',
    '<div class="arrow"></div>',
    '<div class="popover-content">',
    '</div>',
    '</div>'].join('');

    var featurePopover = "<div>Features</div>";
    var pricingPopover = "<div>Pricing</div>";
    var contactPopover = "<div>Contact us at enquiry@nestinn.com</div>";
    var blogPopover = "<div>Blog</div>";
    var aboutusPopover = "<div>About Us</div>";
    var signinPopover = "<div>Sign In</div>";

    var popovers = {feature : featurePopover,
                    pricing : pricingPopover,
                    contact : contactPopover,
                    blog : blogPopover,
                    about : aboutusPopover,
                    signin : signinPopover};

    $.each(popovers,function(k,v) {
      $("."+k).popover({
         trigger: 'hover',
         content: v,
         template: popoverTemplate,
         placement: "left",
         html: true
     });
   })

   $('#customerslider_prev').click(function() {
        var $current = $('#customerslider .slideractive');
        var $target = $('#' + $current.attr('prev'));

        $current.removeClass('slideractive').hide(0);
        $target.addClass('slideractive').show(0);
    });

    $('#customerslider_next').click(function() {
         var $current = $('#customerslider .slideractive');
         var $target = $('#' + $current.attr('next'));

         $current.removeClass('slideractive').hide(0);
         $target.addClass('slideractive').show(0);
     });
 });
