$(document).ready(function () {
    $(".his").click(function () {
        $(".history").slideToggle()
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
        $(".profile-info").show()
    })

    $(".close-btn").click(function () {
        $(".profile-info").hide()
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