import { Meteor } from 'meteor/meteor';
import { Msg } from '../msg.js';
//import { Contacts } from '../contacts.js';

Meteor.publish('msg.all', function () {
  return Msg.find();
});