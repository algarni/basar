/* || ===

= ByMoha.com
= APP FIRE

=== || */

$( document ).ready(function() {
    
    $(".humburger-menu, .search").click(function(){
        $(".menu-navigation").addClass("active");
        $("body").addClass("no-scroll");
        var toShow = $(this).data("toshow");
        $(toShow).removeClass("hide");
        return false;
    });
    
    $('.menu-navigation .close').click( function() {
        $(".menu-navigation, .search").removeClass("active");
        $("body").removeClass("no-scroll");
        return false;
    });


    $("#addCart").click(function(){
        $("#addPopup").addClass("active");
        $("body").addClass("no-scroll");
    });



    $(".popup .close").click(function(){
        $(".popup").removeClass("active");
        $("body").removeClass("no-scroll");
    });

    $("#openCart").click(function(){
        $("#cartPopup").addClass("active");
        $("body").addClass("no-scroll");
    });


    $(".plusbutton").on("click", function() {

        var $button = $(this);
        var oldValue = $button.parent().find("#numberofpeople").val();
      
        if ( $button.hasClass('plus') ) {
            var newVal = parseFloat(oldValue) + 1;
          } else {
         // Don't allow decrementing below zero
          if (oldValue > 0) {
            var newVal = parseFloat(oldValue) - 1;
          } else {
            newVal = 0;
          }
        }
      
        $button.parent().find("#numberofpeople").val(newVal);
        return false;

    });


});



    // Scrolling Header
    $(window).scroll(function() {

        if ($(this).scrollTop() > 10){
            $('#top-header').addClass("scrolling ");
        }
        else{
            $('#top-header').removeClass("scrolling ");
        }

    });


        // Dragging list
        const slider = document.querySelector('.cats ul');
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        });
        slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
        });
        slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
        });
        slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        console.log(walk);
        });