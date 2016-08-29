/**
 * Created by luthfi on 6/22/16.
 */
import '../template/admin.layout.html';
import '../template/admin.side-nav.html';
import '../template/admin.header.html';
import { Template } from 'meteor/templating';

Template.layout.rendered = function () {

    $('select').material_select();
    $('.modal-trigger').leanModal();
    $('.iframe-btn').fancybox({
        'width'		: 900,
        'height'	: 600,
        'type'		: 'iframe',
        'autoScale'    	: false
    });
};

Template.header.rendered = function () {

};

Template.sideNav.rendered = function () {

};

Template.layout.helpers({});

Template.header.helpers({});

Template.sideNav.helpers({});

Template.layout.events({});

Template.header.events({
    'click #logout': function (event) {
        event.preventDefault();
        setCookie('token','',0);
        setCookie('userId','',0);
        window.location = '/login';
    }
});

Template.sideNav.events({

});