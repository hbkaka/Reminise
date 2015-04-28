Template.setAlarm.events({
	"submit #setAlarm": function(event){
		console.log("In setAlarm");
		event.preventDefault(); // don't try to go to another page!
		var theTime = $("#when").val();
		var theContact = $("#who").val();
		var theMessage =$("#what").val();
		
		Alarms.insert({	when:theTime, 
				contact:theContact,
				message:theMessage});
				

		Router.go('showall');
	}
})