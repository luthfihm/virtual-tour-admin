/**
 * Created by luthfi on 6/22/16.
 */
import '../template/admin.layout.html';
import '../template/admin.side-nav.html';
import '../template/admin.header.html';
import { Template } from 'meteor/templating';

Template.layout.rendered = function () {
    $('.dropdown-button').dropdown({
        constrain_width:true,
        hover:false,
        alignment:"left",
        gutter:0,
        belowOrigin:true
    });
    $('#toggle-side-nav').sideNav({
        menuWidth: 300, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
    $('select').material_select();
    $('.modal-trigger').leanModal();
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

});

Template.sideNav.events({
    'click #logout': function (event) {
        event.preventDefault();
        setCookie('token','',0);
        setCookie('userId','',0);
        window.location = '/login';
    }
});