$(document).ready(function(){
    // Activate Carousel
    $("#topCarousel").carousel("pause");
​
    // Enable Carousel Controls
    $(".left").click(function(){
        $("#topCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#topCarousel").carousel("next");
    });
});
​
​
$(document).ready(function(){
    // Activate Carousel
    $("#featuredHouseDealsCarousel").carousel("pause");
​
    // Enable Carousel Controls
    $(".left").click(function(){
        $("#featuredHouseDealsCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#featuredHouseDealsCarousel").carousel("next");
    });
});

