let swiper = new Swiper('.swiper-partners', {
    loop: true,
    spaceBetween: 75,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    breakpoints: {
        640: {
            spaceBetween: 0,
        },
    },
})

$(document).ready(function () {
    const navMain = $('#navbar-main')
    const navItem = $('.nav-link, .btn-contact')

    // Used to lock the scroll on content when navbar expanded
    function isolateBodyScroll (state) {
        if (state) {
            $('body').addClass('isolate-scroll')
        } else if (!state) {
            $('body').removeClass('isolate-scroll')
        }
    }

    // ========== NAVBAR MENU: Solution =========
    const navButtonSolution = $('#nav-button-solutions')
    const navSubMenuSolution = $('#nav-submenu-solutions')

    function showSolutionMenu (state) {
        if (state) {
            navSubMenuSolution.removeClass('hidden')
            navMenu.removeClass('divide-y-[1px]')
            if ($(window).width() < 1024) {
                navButtonSolution.addClass('nav-link-dropdown-active')
                $('.nav-el-page').addClass('hidden')
                setTimeout(function () {
                    isolateBodyScroll(true)
                }, 100)
            }
            $('.arrow-down-solutions').addClass('arrow-down-active')
        } else if (!state) {
            navSubMenuSolution.addClass('hidden')
            navButtonSolution.removeClass('nav-link-dropdown-active')
            navMenu.addClass('divide-y-[1px]')
            $('.nav-el-page').removeClass('hidden')
            $('.arrow-down-solutions').removeClass('arrow-down-active')
            isolateBodyScroll(false)
        }
    }

    function isSolutionMenuShowed () {
        return !navSubMenuSolution.hasClass('hidden')
    }

    navButtonSolution.on('click', function () {
        showSolutionMenu(!isSolutionMenuShowed())
    })

    // ========== NAVBAR ==========
    const navMenu = $('#navbar-menu')

    function isNavBarExpanded () {
        return !navMenu.hasClass('hidden')
    }

    function showExpandNavBar (state) {
        if (state) {
            navMenu.removeClass('hidden')
        } else if (!state) {
            navMenu.addClass('hidden')
            showSolutionMenu(false)
        }
    }

    $('#menu-button').on('click', function (e) {
        showExpandNavBar(!isNavBarExpanded())
    })

    $('main, a').on('click', function () {
        showExpandNavBar(false)
    })

    $(window).on('resize', function () {
        let width = $(window).width()
        if (isSolutionMenuShowed()) {
            if (width < 1024) {
                showExpandNavBar(true)
                showSolutionMenu(true)
                isolateBodyScroll(true)
            } else {
                $('.nav-el-page').removeClass('hidden')
                isolateBodyScroll(false)
                if (isSolutionMenuShowed()) navButtonSolution.removeClass(
                    'nav-link-dropdown-active')
            }
        }
    })
    $('#debug-button').on('click', function () {
        expandNavBar(true)
    })
})