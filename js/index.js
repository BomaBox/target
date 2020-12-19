$(document).ready(function(){
    // Activate Carousel
    $("#heroCarousel").carousel("pause");

    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
    });
    $(".item4").click(function(){
        $("#myCarousel").carousel(3);
    });

    // Enable Carousel Controls
    $(".left").click(function(){
        $("#heroCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#heroCarousel").carousel("next");
    });
});

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