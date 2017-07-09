import { Meteor } from 'meteor/meteor';
import { Contacts } from '/imports/api/contacts/contacts.js';

import './hello.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  cont() {
    //return Template.instance().counter.get();
    return Contacts.find({}).fetch();
  },
});

Template.hello.events({
  'click .initial'(event, instance) {
    // increment the counter when button is clicked
    //instance.counter.set(instance.counter.get() + 1);
    fname = $(".fname")[0].innerHTML;
    lname = $(".lname")[0].innerHTML;
  },
  'click .fname'(event) {
  	FlowRouter.route('/');
  },
  'click .submitjson'(event) {
  	console.log('Inputting : ' + $(".jsondata")[0].value);
  	contactsData = JSON.parse($(".jsondata")[0].value);
  	Meteor.call('insertcont', contactsData, (error) => {
  		if(error)
  		{
  			console.log(error);
  		}
  		else
  		{
  			console.log('success');
  		}
  		})
  }
});
