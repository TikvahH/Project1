$(function(){

    $("#img1").click(function(){
        if ($(this).attr("src") == "images/image1.jpg") {
            $(this).attr("src","images/image4.jpg");
        }
        else if ($(this).attr("src") == "images/image4.jpg") {
            $(this).attr("src","images/image1.jpg");
        }
    });
    $("#img2").click(function(){
        if ($(this).attr("src") == "images/image2.jpg") {
            $(this).attr("src","images/image5.jpg");
        }
        else if ($(this).attr("src") == "images/image5.jpg") {
            $(this).attr("src","images/image2.jpg");
        }
    });
$("#img3").click(function(){
        if ($(this).attr("src") == "images/image3.jpg") {
            $(this).attr("src","images/image6.jpg");
        }
        else if ($(this).attr("src") == "images/image6.jpg") {
            $(this).attr("src","images/image3.jpg");
        }
    });
});
