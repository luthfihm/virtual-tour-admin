/**
 * Created by luthfi on 6/21/16.
 */
import '../template/home.html';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

Template.home.onCreated(function () {
    Meteor.call('objects.list', function (err, res) {
        if (err) {
            console.log(err);
        } else {
            console.log(res);
            Session.set('objects', res);
        }
    });
});

Template.home.helpers({
    'objects': function () {
        return Session.get('objects');
    }
});