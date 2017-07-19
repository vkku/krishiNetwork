// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Links } from './links.js';
import { Contacts } from '/imports/api/contacts/contacts.js';
import { Msg } from '/imports/api/msg/msg.js';

Meteor.methods({
  'links.insert'(title, url) {
    check(url, String);
    check(title, String);

    return Links.insert({
      url,
      title,
      createdAt: new Date(),
    });
  },

  'insertMsg'(nam, OTP) {
  	Msg.insert({name: nam, time: new Date(), otp: OTP});
  },

  'insertcont'(contactsData) {
  	_.each(contactsData, function(contactsData) {
    Contacts.insert(contactsData);
  });
},

  'sendSMS': (id, msg) => {
  	/*
var accountSid = 'AC3a7bd5cf1bcb6a300c644d532c504ed3'; 
var authToken = '529de2050bdfc133e5b1ec1c8239598f'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 console.log('SMS Send Initiated to : ' + Contacts.findOne({'_id' : id}).phone);
 console.log('With message : ' + msg);
 phone = Contacts.findOne({'_id' : id}).phone;
client.messages.create({ 
    to: phone, 
    from: "+17723205265",
    body: msg, 
}, function(err, message) { 
    console.log(err); 
});
  }
*/

  // Twilio Credentials 
var accountSid = 'AC3a7bd5cf1bcb6a300c644d532c504ed3'; 
var authToken = '529de2050bdfc133e5b1ec1c8239598f'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 phone = Contacts.findOne({'_id' : id}).phone;
 //console.log(msg);
client.messages.create({ 
    to: phone, 
    from: "+17723205265", 
    body: msg, 
}, function(err, message) { 
    console.log(err); 
});


/*
  'sendSMS': (code, mobile) => {
  	console.log('Inside Server Module');
  // call twilio API
  HTTP.call(
    'POST',
    'https://api.twilio.com/2017-09-07/Accounts/' + 
    'uEXu6OXrMtSgsh2R0cDMSYz1pT2WpkfJ' + '/SMS/Messages.json', {
      params: {
        From: '+17723205265',
        To: mobile,
        Body: `Hi. Your OTP is: ${code}`,
      },
      auth: 'uEXu6OXrMtSgsh2R0cDMSYz1pT2WpkfJ' + ':' + 'piyush081@yahoo.co'
    }, function (error) {
      if (error) {
          console.log('API request failed.');
        console.log(error);
      }
      else{
      	console.log('SMS sent successfully.');
      }
    }
  );
}
*/
}
});

/*
'sendSMS': (code, mobile) => {
  	console.log('Inside Server Module');
  // call twilio API
  HTTP.call(
    'POST',
    'https://api.twilio.com/{2017-09-07}/Accounts/' + 
    'uEXu6OXrMtSgsh2R0cDMSYz1pT2WpkfJ' + '/SMS/Messages.json', {
      params: {
        From: '+17723205265',
        To: mobile,
        Body: `Hi. Your OTP is: ${code}`,
      },
      auth: 'uEXu6OXrMtSgsh2R0cDMSYz1pT2WpkfJ' + ':' + 'piyush081@yahoo.co'
    }, function (error) {
      if (error) {
          console.log('API request failed.');
        console.log(error);
      }
      else{
      	console.log('SMS sent successfully.');
      }
    }
  );
}
*/