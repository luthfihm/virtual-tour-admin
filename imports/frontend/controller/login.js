/**
 * Created by luthfi on 8/25/16.
 */
import '../template/login.html';
Template.login.events({
    'submit form': function (event) {
        event.preventDefault();
        $('#form-login').hide();
        $('#loading').show();

        var credential = {
            'username': $('#username').val(),
            'password': $('#password').val(),
            'ttl': 3600000
        };

        Meteor.call('users.login', credential, function (err, res) {
            if (err) {
                console.error(err);
            } else {
                setCookie('token', res.id, res.ttl);
                setCookie('userId', res.userId, res.ttl);
                window.location = '/';
            }
        });
    }

});