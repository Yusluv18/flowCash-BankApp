$(document).ready(function(){
    $(".his").click(function () {
        $(".history").slideToggle()
    })
     $(".login").click(function () {
        $(".mybankpage").show()
         $(".accountpage").hide()
    })
     $(".logout").click(function () {
        $(".mybankpage").hide()
         $(".accountpage").show()
    })
})