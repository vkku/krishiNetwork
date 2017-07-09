import { Meteor } from 'meteor/meteor';
import { Contacts } from '/imports/api/contacts/contacts.js';

Template.sendsms.helpers({
	OTP(){
		min = 10000;
	    max = 99999;
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
})

// send verification code
Template.details.events({
  'click .btn btn-info'(event) {
    event.preventDefault();
        phoneNumber = Contacts.findOne({'_id' : id}).phone;
        msg = 'Hi. Your OTP is: ' + OTP;

	  Meteor.call('sendSMS', id, msg, (error) => {
	    if (error) {
        console.log(error);
    	}
    	else{
    		console.log('Success');
    	}

	});
	},
})


/*

	OTP() {

	min = 10000;
    max = 99999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
	},
	*/