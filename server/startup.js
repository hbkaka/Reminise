Meteor.startup(function(){
	if (Alarms.find({}).count()==0){
		
		Alarms.insert({	when:"4/21/15 9:15am", 
						contact:"tjhickey@brandeis.edu",
						message:"I overslept. Sorry. Be there soon!"});

		Alarms.insert({	when:"4/24/15 9:15am", 
						contact:"tjhickey@brandeis.edu",
						message:"I overslept. Sorry. Be there soon!"});

		Alarms.insert({	when:"4/28/15 9:15am", 
						contact:"tjhickey@brandeis.edu",
						message:"Running Late. Meeting ran late. Be there soon!"});
	}
	
});
