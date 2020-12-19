$(document).ready(function(){
    // Activate Carousel
    $("#featuredHouseDealsCarousel").carousel("pause");

    // Enable Carousel Controls
    $(".left").click(function(){
        $("#featuredHouseDealsCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#featuredHouseDealsCarousel").carousel("next");
    });
});