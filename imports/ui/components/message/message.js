import { Meteor } from 'meteor/meteor';
import { Contacts } from '/imports/api/contacts/contacts.js';
import { Msg } from '/imports/api/msg/msg.js';
//import { Msg } from '../../../api/msg/msg.js';
import './message.html';


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
	    OTP = Math.floor(Math.random() * (max - min + 1)) + min;
	    return OTP;
	}
})

// send verification code
Template.message.events({
  'submit .info-sms-add'(event) {
    event.preventDefault();
    	nam = Contacts.findOne({'_id' : id}).fname;
        phoneNumber = Contacts.findOne({'_id' : id}).phone;
        msg = $(".sendmsg")[0].value;
        console.log('OTP send initiated');
	  Meteor.call('sendSMS', id, msg,(error) => {
	    if (error) {
        console.log(error);
    	}
    	else{
    		console.log('Success');
    		Meteor.call('insertMsg', nam, OTP, (error) => {
    			if (error) {
        			console.log(error);
    			}
    			else
    			{
    				console.log('Msg Inserted');
    			}
    		})
    	}

	});
	},
});