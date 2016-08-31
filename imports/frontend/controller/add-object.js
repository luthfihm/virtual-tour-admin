/**
 * Created by luthfi on 8/27/16.
 */
import '../template/home.add.html';

Template.addObject.onCreated(function () {

});

Template.addObject.events({
    'change #imageUrl': function (event) {
        var imageUrl = event.currentTarget.value;
        $('#imageThumb').attr('src', imageUrl);
    },
    'submit form': function (event) {
        event.preventDefault();
        var object = {
            "title": $('#title').val(),
            "location": $('#location').val(),
            "geoLocation": {
                "lat": $('#lat').val(),
                "lng": $('#lng').val()
            },
            "imageUrl": $('#imageUrl').val(),
            "videoUrl": $('#videoUrl').val(),
            "description": $('#description').val()
        };
        if (Session.get('object') == '') {
            Meteor.call('objects.add', object, function (err, res) {
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
        } else {
            var id = Session.get('object').id;
            Meteor.call('objects.edit', id, object, function (err, res) {
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
    }
});
Template.addObject.helpers({
    'is_edit': function () {
        return Session.get('object') != '';
    },
    'object': function () {
        return Session.get('object');
    },
    'title': function () {
        if (Session.get('object') == '') {
            return 'Tambah Objek';
        } else {
            return 'Edit Objek';
        }
    },
    'imageUrl': function () {
        if (Session.get('object') == '') {
            return 'images/dummy.png';
        } else {
            var object = Session.get('object');
            return object.imageUrl;
        }
    }
});