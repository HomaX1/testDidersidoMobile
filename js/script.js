$(function () {
    'use strict';
    const ALLCONST = {
        navLink: $('.navigation-link'),
        navItem: $('.navigation-item')
    };


    ALLCONST.navLink.click(function () {

        if($(this).hasClass('navigation-link_active')) {
            ALLCONST.navLink.removeClass('navigation-link_active');
            ALLCONST.navLink.next('.inside-list').slideUp('slow');
        }else if(!$(this).hasClass('navigation-link_active')) {
            ALLCONST.navLink.removeClass('navigation-link_active');
            $(this).addClass('navigation-link_active');
            $(this).next('.inside-list').slideDown('slow');
        }

    });

});