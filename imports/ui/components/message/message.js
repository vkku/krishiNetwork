import { Meteor } from 'meteor/meteor';
import { Contacts } from '/imports/api/contacts/contacts.js';
import { Msg } from '/imports/api/contacts/msg.js';
import './message.html';
import { Msg } from '/imports/api/msg/msg.js';


db.createCollection(contacts,({}));



Template.message.helpers({
	credential() {
		//console.log('Inside Helper');
		id = FlowRouter.getParam('_id');
		//console.log(Contacts.findOne({'_id' : id}).phone);
		return Contacts.findOne({'_id' : id});
	},
	OTP(){
		min = 10000;
	    max = 99999;
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
})




// send verification code
Template.message.events({
  'submit .info-sms-add'(event) {
    event.preventDefault();
        phoneNumber = Contacts.findOne({'_id' : id}).phone;
        msg = $(".sendmsg")[0].value;
        console.log('OTP send initiated');
	  Meteor.call('sendSMS', id, msg,(error) => {
	    if (error) {
        console.log(error);
    	}
    	else{
    		console.log('Success');
    	}

	});
	},
});