$(document).ready(function () {
    $(".his").click(function () {
        $(".history").slideToggle()
    })
        $(".wid").click(function () {
        $(".casf").slideToggle()
         $(".typejs").text("Withdraw")
    })

    $(".dep").click(function () {
        $(".casf").slideToggle()
         $(".typejs").text("Deposite")
    })
    
     $(".opt").click(function () {
        $(".log").slideToggle()
         $(".profile-info").hide()
          $(".profile").removeClass('half')
    })
    $("#login").click(function () {
        $(".mybankpage").show()
        $(".accountpage").hide()
    })

    $(".logout").click(function () {
        $(".mybankpage").hide()
        $(".accountpage").show()
    })

    $(".profile").click(function () {
        $(".profile-info").slideToggle()
         $(".profile").toggleClass('half')

    })


    $(".edit-icon").click(function () {
        $(".done-icon").show()
        $(".edit-icon").hide()
    })

    $(".done-icon").click(function () {
        $(".edit-icon").show()
        $(".done-icon").hide()
    })

    $("#showSignup").click(function () {
        $("#signupForm").show()
        $("#loginForm").hide()
    })

    $("#showLogin").click(function () {
        $("#signupForm").hide()
        $("#loginForm").show()
    })

    

    
})