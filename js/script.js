$(function () {
    'use strict';
    const ALLCONST = {
        navLink: $('.navigation-link'),
        sidebarMenuClose: $('.sidebar__menu'),
        sidebar: $('.sidebar'),
        headerPath: $('.path'),
        contentMain: $('.main'),
        menuOpen: $('.path-link'),
        menuClose: $('.sidebar-link')
    };


    let browserSize = () => {
        if (document.documentElement.clientWidth <= 1040) {
            ALLCONST.sidebar.addClass('sidebar_min-width');
        } else if (document.documentElement.clientWidth > 1040) {
            ALLCONST.sidebar.removeClass('sidebar_min-width');
        }
    };

    let showMinMenu = () => {
        if (!ALLCONST.sidebar.hasClass('sidebar_min-width')) {
            ALLCONST.sidebarMenuClose.hide();

            ALLCONST.headerPath.animate({'margin-left': '160px'}, 600);
            ALLCONST.contentMain.animate({'margin-left': '120px'}, 600);
            ALLCONST.sidebar.animate({left: '-315px'}, 600, () => {
                ALLCONST.sidebar.addClass('sidebar_min-width').animate({left: '0', width: '120px'}, 700, () => {
                    ALLCONST.sidebarMenuClose.show();
                });
            });

        } else {
            ALLCONST.sidebarMenuClose.hide();

            ALLCONST.sidebar.animate({left: '-315px'}, 700, () => {
                ALLCONST.sidebar.removeClass('sidebar_min-width').animate({left: '0', width: '315px'}, 800, () => {
                    ALLCONST.sidebarMenuClose.show();
                });
                ALLCONST.headerPath.animate({'margin-left': '355px'}, 800);
                ALLCONST.contentMain.animate({'margin-left': '315px'}, 800);
            });
        }
    };

    let showMobileMenu = () => {
        ALLCONST.sidebar.animate({opacity: '1'}, () => {
            ALLCONST.sidebar.removeClass('sidebar_min-width').addClass('sidebar_mobile').fadeIn();
        });
    };

    let closeMobileMenu = () => {
        ALLCONST.sidebar.animate({opacity: '0'}, 400, () => {
            ALLCONST.sidebar.removeClass('sidebar_min-width sidebar_mobile').fadeOut();
        });
    };

    ALLCONST.navLink.click(function () {
        if ($(this).hasClass('navigation-link_active')) {
            ALLCONST.navLink.removeClass('navigation-link_active');
            ALLCONST.navLink.next('.inside-list').slideUp('slow');

        } else if (!$(this).hasClass('navigation-link_active')) {
            ALLCONST.navLink.next('.inside-list').slideUp('slow');
            ALLCONST.navLink.removeClass('navigation-link_active');
            $(this).addClass('navigation-link_active');
            $(this).next('.inside-list').slideDown('slow');
        }
    });

    ALLCONST.sidebarMenuClose.click(showMinMenu);
    ALLCONST.menuOpen.click(showMobileMenu);
    ALLCONST.menuClose.click(closeMobileMenu);
    $(window).resize(browserSize);

    browserSize();

});