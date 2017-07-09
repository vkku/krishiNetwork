import { Meteor } from 'meteor/meteor';
import { Contacts } from '/imports/api/contacts/contacts.js';

import './details.html';


Template.details.helpers({
	credentials() {
		//console.log('Inside Helper');
		id = FlowRouter.getParam('_id');
		//console.log(Contacts.findOne({'_id' : id}).phone);
		return Contacts.findOne({'_id' : id});
	}
})


/*
Hot Code
// send verification code
Template.details.events({
  //'click .btn btn-info'(event) {
  	'submit .info-sms-add'(event) {
    event.preventDefault();
        phoneNumber = Contacts.findOne({'_id' : id}).phone;
	  Meteor.call('sendSMS', id, (error) => {
	    if (error) {
        console.log(error);
    	}
    	else{
    		console.log('Success');
    	}

	});
	},
})

*/
    /*
  	console.log('SMS Send Initiated to : ' + Contacts.findOne({'_id' : id}).phone);
	const min = 10000,
	    max = 99999,
	    OTP = Math.floor(Math.random() * (max - min + 1)) + min;
	    phoneNumber = Contacts.findOne({'_id' : id}).phone;
	  Meteor.call('sendSMS', OTP, phoneNumber, (error) => {
	    if (error) {
        console.log(error.error);
    	}
});
	  */


/*	  
	  // Twilio Credentials 
var accountSid = 'AC3a7bd5cf1bcb6a300c644d532c504ed3'; 
var authToken = '529de2050bdfc133e5b1ec1c8239598f'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 console.log('SMS Send Initiated to : ' + Contacts.findOne({'_id' : id}).phone);
client.messages.create({ 
    to: "+917599291887", 
    from: "+17723205265", 
    body: "This is the ship that made the Kessel Run in fourteen parsecs?", 
}, function(err, message) { 
    console.log(message.sid); 
})
*/


/*
Template.details.onCreated(function(data) {
    console.log("onCreated");
    console.log("Data is:",this.data.credentials);
});

Template.details.onRendered(function(credentials) {
	console.log("onRendered");
  	console.log(this.credentials);
});
*/
