import { Meteor } from 'meteor/meteor';
import { Msg } from '../msg.js';

Meteor.publish('msg.all', function () {
  return Msg.find();
});
