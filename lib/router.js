Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {name: 'welcome'});

Router.route('/showall', {name: 'showall'});

Router.route('/setAlarm',{name: 'setAlarm'});

Router.route('/about',{name: 'about'});

Router.route('/show',{name: 'show', 
                      data: {when:"5/1/15 9:00pm",  contact:"tjhickey@brandeis.edu", message:"I overslept! Be there soon."}});

