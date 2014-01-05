
var starStoryDispenser = function(obj){
	//console.log(obj.name + 1 + "name");
	console.log("len: " + Object.keys(obj).length);

	var len = Object.keys(obj).length;

	for (var no=1; no < len; no++){ // the last loop number will be used for inner link under the last question
		console.log("no: " + no);
		//document.getElementById(obj.name + no + "name").innerHTML = "aaaaaa";
		
		// dynamically lay the rails for a question
		var div_q = document.createElement("div"); // create a "div" element for a question
		div_q.id = obj.name + no + "q"; // give it an "id"
		div_q.className = "sub_main_item"; // give it a "class"
		document.getElementById("questions").appendChild(div_q); // append it to div with id=questions
		
		// dynamically lay the rails for an answer
		var div_a = document.createElement("div"); // create a "div" element for an answer
		div_a.id = obj.name + no + "a"; // give it an "id"
		div_a.className = "padded"; // give it a "class"
		document.getElementById("answers").appendChild(div_a); // append it to div with id=questions
		
		var bag_q = "";
		var bag_a = "";
		var link = ""; // inner link under the answer

		bag_q = no + ". " + "<a href='#" + div_a.id + "'>" + obj[no].q + "</a>";

		if (no < len-1) { // the last index == len-1
			console.log(no + "<" + len);
			link = "<br><a href='#" + obj.name + (no+1) + "q'>Next question " + (no+1) + "</a>";

		}
		else{ // if loop console
			//number.log(no + "-" + len);
			link = "<br><a href='#top'>Back to top</a>";
		}
		bag_a = no + ". " + obj[no].a + link;


		
		


		// send the trains on the rails
		document.getElementById(obj.name + no + "q").innerHTML = bag_q;
		document.getElementById(obj.name + no + "a").innerHTML = bag_a;
	}
} // dispenser()


var starstories = {
	name: "story",
	1: {
		q: "What are you most proud of in your career?",
		a: "The highlight of my career so far is ..." 
	},
	2: {
		q: "What are you most proud of in each of your past positions?",
		a: "Of all the positions I had in the past, I think I am most proud of ... " 
	},
	3: {
		q: "What challenge or crisis did you face on the job and what was your approach for solving each situation?",
		a: "Once it happened..." 
	},
	4:{
		q: "In what way did you help your employer generate more revenue/business?",
		a: "..."
	},
	5: {
		q: "In what way did you help your employer save money?",
		a: "abc"
	},
	6: {
		q: "In what way did you help your employer increase productivity?",
		a: "..."
	},
	7: {
		q: "What was the most interesting suggestion or project you initiated?",
		a: "..."
	},
	8: {
		q: "When were you complimented by your supervisor, coworker, or customer?",
		a: "When I translated a huge text (mozilla html guide) into Russian by myself"
	},
	9: {
		q: "What positive comments (or ratings) were documented in your performance review?",
		a: "..."
	},
	10: {
		q: "What skills or talents are you especially known for?",
		a: "tenaciousness, language learning and teaching"
	},
	11: {
		q: "What kinds of work or activities cause you to lose track of time?",
		a: "Coding, reading articles on linguistics"
	},
	12: {
		q: "When did you go above and beyond the call of duty?",
		a: "..."
	},
	13: {
		q: "What do you do that your coworkers don't do? What would happen if you weren't on the job?",
		a: "..."
	},
	14: {
		q: "What would others point to as evidence of your success?",
		a: "bilingualism of my kids, getting a second career"
	},
	15:{
		q: "When did you have to quickly learn new skills and information? How did you go about this?",
		a: "During my co-op position at Seneca's CDOT"
	}
};

starStoryDispenser(starstories);

