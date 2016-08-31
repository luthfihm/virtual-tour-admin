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
            console.error(err);
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

Template.home.events({
    'click .delete': function (event) {
        event.preventDefault();
        if (confirm('Yakin untuk menghapus?')) {
            Meteor.call('objects.delete', this.id, function (err, res) {
                if (err) {
                    console.error(err);
                } else {
                    Meteor.call('objects.list', function (err, res) {
                        if (err) {
                            console.error(err);
                        } else {
                            console.log(res);
                            Session.set('objects', res);
                        }
                    });
                }
            });
        }
    },
    'click #add-object': function (event) {
        event.preventDefault();
        $('#modal1').openModal();
        Session.set('object', '');
    },
    'click .edit': function (event) {
        event.preventDefault();
        Meteor.call('objects.get', this.id, function (err, res) {
            if (err) {
                console.error(err);
            } else {
                Session.set('object', res);
                $('#modal1').openModal();
                Materialize.updateTextFields();
            }
        });
    }
});