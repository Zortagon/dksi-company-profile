"use strict";

$(document).ready(function () {
    const navMain = $('#navbar-main');
    const navItem = $('.nav-link, .btn-contact');

    // Used to lock the scroll on content when navbar expanded
    function isolateBodyScroll(state) {
        if (state) {
            $('body').addClass('max-h-full overflow-hidden');
        } else if (!state) {
            $('body').removeClass('max-h-full overflow-hidden');
        }
    }

    // ========== NAVBAR MENU: Solution =========
    const navButtonSolution = $('#nav-button-solutions');
    const navSubMenuSolution = $('#nav-submenu-solutions');

    function showSolutionMenu(state) {
        if (state) {
            navSubMenuSolution.removeClass('hidden');
            navMenu.removeClass('divide-y-[1px]');
            if ($(window).width() < 1024) {
                navButtonSolution.addClass('nav-link-dropdown-active');
                $('.nav-el-page').addClass('hidden');
                setTimeout(function () {
                    isolateBodyScroll(true)
                }, 100);
            }
            $('.arrow-down-solutions').addClass('arrow-down-active');
        } else if (!state) {
            navSubMenuSolution.addClass('hidden');
            navButtonSolution.removeClass('nav-link-dropdown-active');
            navMenu.addClass('divide-y-[1px]');
            $('.nav-el-page').removeClass('hidden');
            $('.arrow-down-solutions').removeClass('arrow-down-active');
            isolateBodyScroll(false);
        }
    }

    function isSolutionMenuShowed() {
        return !navSubMenuSolution.hasClass('hidden');
    }

    navButtonSolution.on('click', function () {
        showSolutionMenu(!isSolutionMenuShowed())
    });

    // ========== NAVBAR ==========
    const navMenu = $('#navbar-menu');

    function isNavBarExpanded() {
        return !navMenu.hasClass('hidden');
    }

    function showExpandNavBar(state) {
        if (state) {
            navMenu.removeClass('hidden');
        } else if (!state) {
            navMenu.addClass('hidden');
            showSolutionMenu(false)
        }
    }

    $('#menu-button').on('click', function (e) {
        showExpandNavBar(!isNavBarExpanded());
    });

    $('main, a').on('click', function () {
        showExpandNavBar(false);
    });

    $(window).on('resize', function () {
        let width = $(window).width();
        if (isSolutionMenuShowed()) {
            if (width < 1024) {
                showExpandNavBar(true);
                showSolutionMenu(true)
                isolateBodyScroll(true);
            } else {
                $('.nav-el-page').removeClass('hidden');
                isolateBodyScroll(false);
                if (isSolutionMenuShowed()) navButtonSolution.removeClass('nav-link-dropdown-active');
            }
        }
    });

    // $('main').on('scroll touchmove mousewheel', function (e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    // });

    // $('body').addClass('expanded-header');

    // function closeNavBar() {
    //     navMenu.addClass('hidden');
    //     navSubMenuSolution.addClass('hidden');
    //     $('.arrow-down-solutions').removeClass('arrow-down-active');
    //     $('.nav-el-page').removeClass('hidden');
    // }
    //
    // $('#menu-button').on('click', function (e) {
    //     e.stopPropagation();
    //     $('#navbar-menu').toggleClass('hidden');
    // });
    //
    // navMain.on('click', function (e) {
    //     e.stopPropagation();
    // });
    // navMenu.on('click', function (e) {
    //     e.stopPropagation();
    // });
    // navItem.on('click', closeNavBar)
    //
    // // Hide navbar sub-menu on click outside.
    // $(this).on('click', closeNavBar);
    //
    // $(window).on('resize', function () {
    //     if ($(window).width() >= 1024) {
    //         $('.nav-el-page').removeClass('hidden');
    //     }
    // });

    $('#debug-button').on('click', function () {
        expandNavBar(true);
    });
});