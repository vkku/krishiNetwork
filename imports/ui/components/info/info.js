import { Links } from '/imports/api/links/links.js';
import { Contacts } from '/imports/api/contacts/contacts.js';
import { Meteor } from 'meteor/meteor';
import './info.html';

Template.info.onCreated(function () {
  Meteor.subscribe('links.all');
});

Template.info.onCreated(function () {
  Meteor.subscribe('contacts.all');
});

Template.info.helpers({
  links() {
    //console.log(Contacts.find({"fname":"Vivek"}));
    return Contacts.find({"fname":"Vivek"}).fetch();
  },
});
/*

Template.info.helpers({
  links() {
    return Links.find({});
  },
});

Template.info.events({
  'submit .info-link-add'(event) {
    event.preventDefault();

    const target = event.target;
    const title = target.title;
    const url = target.url;

    Meteor.call('links.insert', title.value, url.value, (error) => {
      if (error) {
        alert(error.error);
      } else {
        title.value = '';
        url.value = '';
      }
    });
  },
});
*/