"use strict";

$(document).ready(function () {
    $('#menu-button').on('click', function (e) {
        e.stopPropagation();
        $('#navbar-menu').toggleClass('hidden');
    });
    $('#navbar-menu').on('click', function (e) {
        e.stopPropagation();
    });

    // Hide navbar sub-menu on click outside.
    $(this).on('click', function () {
        $('#navbar-menu').addClass('hidden');
    });
});