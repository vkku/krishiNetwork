// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Links } from '../links.js';
//import { Contacts } from '../contacts.js';

Meteor.publish('links.all', function () {
  return Links.find();
});
