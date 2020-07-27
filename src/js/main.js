$(document).ready(function() {
    // Add smooth scrolling to all links in navbar + footer link
    $("#navbar a, .footerNav a, #btn-scrol a").on('click', function(event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});


// Slider slick
$(function(){
    $(".mySlider").slick({
        dots: true,
        // mobileFirst: true,
        // autoplay: true,
        centerMode: true,
        prevArrow: '<img class="right" src="img/angle-right.png" alt="angle-right">',
        nextArrow: '<img class="left" src="img/angle-left.png" alt="angle-left">'
    })
})

// responsive collapse menu
$(function() {
    $(".navbar-toggler").on("click", function() {
        $(".collapse").toggle("slow");
    });
    $(".navbar-nav li a").on("click", function(){
        $(".collapse").hide();
    });
});



function toggleFotogallery(){
    $("#portfolio").one("click",(function(a){
        var o=a.target.id;
        a.preventDefault();
        $(".card").fadeOut(10),
        $(".card").filter('[data-target = "'+o+'"]').fadeIn(),
        "all"==o&&$(".card").fadeIn()
    })
)}


// The highlight function of the active element
$(function() {
    $("#portfolio").on("click",(function(){
        var x = document.activeElement;
        $(this).find("a.active").removeClass("active");
        $(x).addClass("active");
    })
    )
})
