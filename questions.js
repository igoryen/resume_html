
var starStoryDispenser = function(obj){
	//console.log(obj.name + 1 + "name");
	console.log(Object.keys(obj).length);

	for (var no=1; no < Object.keys(obj).length; no++){
		//document.getElementById(obj.name + no + "name").innerHTML = "aaaaaa";
		
		// dynamically lay the rails
		var div_q = document.createElement("div"); // create a "div" element
		div_q.id = obj.name + no + "q"; // give it an "id"
		div_q.className = "sub_main_item"; // give it a "class"
		document.getElementById("questions").appendChild(div_q); // append it to div with id=questions
		
		var div_a = document.createElement("div"); // create a "div" element
		div_a.id = obj.name + no + "a"; // give it an "id"
		div_a.className = "sub_main_item"; // give it a "class"
		document.getElementById("answers").appendChild(div_a); // append it to div with id=questions
		
		// send the train on the rails
		document.getElementById(obj.name + no + "q").innerHTML = obj[no].q;
		document.getElementById(obj.name + no + "a").innerHTML = obj[no].a;
	}
} // dispenser()


var starstories = {
	name: "story",
	1: {
		q: "What are you most proud of in your career?",
		a: "..." 
	},
	2: {
		q: "What are you most proud of in each of your past positions?",
		a: "..." 
	},
	3: {
		q: "What challenge or crisis did you face on the job and what was your approach for solving each situation?",
		a: "..." 
	}
};

starStoryDispenser(starstories);

