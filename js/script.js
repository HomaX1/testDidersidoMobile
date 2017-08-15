$(function () {
    'use strict';
    const ALLCONST = {
        navLink: $('.navigation-link'),
        menuClose: $('.sidebar__menu'),
        sidebar: $('.sidebar'),
        headerPath: $('.path'),
        contentMain: $('.main')
    };


    ALLCONST.navLink.click(function () {

        if ($(this).hasClass('navigation-link_active')) {
            ALLCONST.navLink.removeClass('navigation-link_active');
            ALLCONST.navLink.next('.inside-list').slideUp('slow');

        } else if (!$(this).hasClass('navigation-link_active')) {
            ALLCONST.navLink.removeClass('navigation-link_active');
            $(this).addClass('navigation-link_active');
            $(this).next('.inside-list').slideDown('slow');
        }

    });


    let showMinMenu = () => {
        if (!ALLCONST.sidebar.hasClass('sidebar_min-width')) {
            ALLCONST.menuClose.hide();

            ALLCONST.headerPath.animate({'margin-left': '160px'}, 600);
            ALLCONST.contentMain.animate({'margin-left': '120px'}, 600);
            ALLCONST.sidebar.animate({left: '-315px'}, 600, () => {
                ALLCONST.sidebar.addClass('sidebar_min-width').animate({left: '0', width: '120px'}, 700, () => {
                    ALLCONST.menuClose.show();
                });
            });

        } else {
            ALLCONST.menuClose.hide();

            ALLCONST.sidebar.animate({left: '-315px'}, 700, () => {
                ALLCONST.sidebar.removeClass('sidebar_min-width').animate({left: '0', width: '315px'}, 800, () => {
                    ALLCONST.menuClose.show();
                });
                ALLCONST.headerPath.animate({'margin-left': '355px'}, 800);
                ALLCONST.contentMain.animate({'margin-left': '315px'}, 800);
            });
        }
    };

    ALLCONST.menuClose.click(showMinMenu);

});