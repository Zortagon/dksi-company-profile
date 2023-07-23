"use strict";

$(document).ready(function () {
    const navMain = $('#navbar-main');
    const navMenu = $('#navbar-menu');
    const navItem = $('.nav-link, .btn-contact');

    function closeNavBar() {
        navMenu.addClass('hidden');
    }

    $('#menu-button').on('click', function (e) {
        e.stopPropagation();
        $('#navbar-menu').toggleClass('hidden');
    });

    navMain.on('click', function (e) {
        e.stopPropagation();
    });
    navMenu.on('click', function (e) {
        e.stopPropagation();
    });
    navItem.on('click', closeNavBar)

    // Hide navbar sub-menu on click outside.
    $(this).on('click', closeNavBar);
});