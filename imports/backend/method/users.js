/**
 * Created by luthfi on 8/25/16.
 */
import { Meteor } from 'meteor/meteor';
var ApiClient = require('../helper/api-client');
var Log = require('../helper/log');
if (Meteor.isServer) {
    var module = 'Users';
    var apiUrl = Meteor.settings.baseApi + '/' + module;
    Meteor.methods({
        'users.login' (credential) {
            this.unblock();
            var response = ApiClient.post(apiUrl + '/login', credential);
            return response;
        }
    });
}