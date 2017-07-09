import { Meteor } from 'meteor/meteor';
import { Contacts } from '/imports/api/contacts/contacts.js';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates

import '../../ui/components/message/message.js';
import '../../ui/components/details/details.js';
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';





// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

FlowRouter.route('/hello.html', {
  name: 'App.hello',
  action() {
    BlazeLayout.render('App_home', { data: 'hello' });
  },
});

FlowRouter.route('/details/:_id', {
	name: 'App.details',
	action() {
		//cred = Contacts.find({}).fetch("fname":params.fname);
		//console.log(cred);
		//BlazeLayout.render('details', 'credentials': cred);
		BlazeLayout.render('App_home', { data: 'details' });
	},
});

FlowRouter.route('/message/:_id', {
	name: 'App.message',
	action() {
		//cred = Contacts.find({}).fetch("fname":params.fname);
		//console.log(cred);
		//BlazeLayout.render('details', 'credentials': cred);
		//BlazeLayout.reset()
		//BlazeLayout.reset();
		BlazeLayout.render('App_home', { data: 'message' });
	},
});
    /*
	action: function(params, queryParams) {
        console.log("Params:", params);
        console.log("Query Params:", queryParams);
    })
    */
    /*
    action: function(params, queryParams) {
    	cred = Contacts.find({}).fetch("fname":params.fname);
    	//fname = Contacts.find({}).fetch("fname":params.fname)[0].fname;
    	//lname = Contacts.find({}).fetch("fname":params.fname)[0].lname;
    	//phone = Contacts.find({}).fetch("fname":params.fname)[0].phone;
    	console.log(Contacts.find({}).fetch("fname":params.fname)[0].phone);
    	//BlazeLayout.render('details', { fname, lname, phone })
    	BlazeLayout.render('App_body', { main: 'details', credentials: 'cred' })
        //console.log("Yeah! We are on the post:", params.postId);
    }
    
    
}),
*/

FlowRouter.route('/info.html', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_home', { data: 'info' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};

//Contacts.find({}).fetch("fname":params.fname).sort({_id:-1})