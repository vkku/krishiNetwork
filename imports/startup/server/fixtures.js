// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Links } from '../../api/links/links.js';
import { Contacts } from '../../api/contacts/contacts.js';

Meteor.startup(() => {
  // if the Links collection is empty
  /*
  if (Links.find().count() === 0) {
    const data = [
      {
        title: 'Do the Tutorial',
        url: 'https://www.meteor.com/try',
        createdAt: new Date(),
      },
      {
        title: 'Follow the Guide',
        url: 'http://guide.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Read the Docs',
        url: 'https://docs.meteor.com',
        createdAt: new Date(),
      },
      {
        title: 'Discussions',
        url: 'https://forums.meteor.com',
        createdAt: new Date(),
      },
    ];

    data.forEach(link => Links.insert(link));
  }
  */
 
  if (Contacts.find().count() === 0) {
 contact = JSON.parse(Assets.getText('list/contacts.json'));
  //var martha = JSON.parse(Assets.getText('companions/martha.json'));
 //companions = [contact];

  _.each(contact, function(contact) {
    // replace this with something like Companions.insert(companion);
    Contacts.insert(contact);
    console.log(contact);

});
}
});
