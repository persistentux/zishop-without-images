$(document).ready(function () {
//alert("work");
$(".category_left > li").click(function (event) {
//    alert("work");
    $('.category_left > li').removeClass('active_li');
    $(this).addClass('active_li');
    });
});
                               