/**
 * Created by luthfi on 8/26/16.
 */
import { Meteor } from 'meteor/meteor';
var ApiClient = require('../helper/api-client');
var Log = require('../helper/log');
if (Meteor.isServer) {
    var module = 'objects';
    var apiUrl = Meteor.settings.baseApi + '/' + module;
    Meteor.methods({
        'objects.list' () {
            this.unblock();
            var response = ApiClient.get(apiUrl);
            return response;
        }
    });
}