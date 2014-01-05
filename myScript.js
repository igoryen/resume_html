
			var listmaker = function(ary, idr){
				var bag = "";
				for (var i = 0; i < ary.length; i++){
					//console.log(ary.length);
					bag += "<li>";
					bag += ary[i];
					bag += "</li>";
				}
				document.getElementById(idr).innerHTML = bag;	
			}

			var dispenser = function(obj){
				//console.log(obj.name + 1 + "name");
				//console.log(Object.keys(obj).length);

				for (var no=1; no < Object.keys(obj).length; no++){
					//document.getElementById(obj.name + no + "name").innerHTML = "aaaaaa";
					if (obj[no].hasOwnProperty("name")){
						console.log("in name: "+ obj.name + no+"name");
						document.getElementById(obj.name + no + "name").innerHTML = obj[no].name;
					}
					if (obj[no].hasOwnProperty("time")){
						console.log("in time: "+ obj.name + no);						
						document.getElementById(obj.name + no + "time").innerHTML = obj[no].time;
					}
					if (obj[no].hasOwnProperty("place")){
						console.log("in place: "+ obj.name + no);
						document.getElementById(obj.name + no + "place").innerHTML = obj[no].place;
					}
					if (obj[no].hasOwnProperty("details")){
							//console.log(obj[no].hasOwnProperty("details"));
						var bag ="";
							//console.log(Object.keys(obj[no].details).length);
						for (var i=1; i <= Object.keys(obj[no].details).length; i++){
							bag += "<li>"
								//console.log(obj[no].details[i]);
						  bag += obj[no].details[i];
						  bag += "</li>";
						} // for
						document.getElementById(obj.name + no + "details").innerHTML = bag;
					} // if
				} // for
			} // dispenser()

			var fullname = "igor entaltsev";
			var address = "102-2980, Don Mills Rd, North York, ON, M2J 3B9";
			var phone = "647-703-6200";
			var email = "igor.yentaltsev@gmail.com";
			var objective = "To secure an IT position in a dynamic organization where I can contribute my technical knowledge and my project management skills";
			var highlights = [
				"Quality-oriented, tenacious, self-motivated, committed to teamwork, success-oriented hard worker",
				"Committed to continuous learning and skill development", 
				"Multicultural experience, knowledge of several languages (Russian, Mandarin, German)"
			];
			var oper_sys = [
				"OS X", 
				"Windows XP/7/8", 
				"UNIX/Linux", 
				"IBM AS/400"
			];

			var proglang = [
				"HTML5", 
				"CSS", 
				"JavaScript", 
				"JQuery", 
				"PHP", 
				"C", 
				"C++", 
				"C#",
				"ASP.NET MVC4", 
				"Java", 
				"COBOL", 
				"shell scripting"
			];

			var database = [
				"SQL", 
				"MySQL", 
				"Oracle's SQL*Plus", 
				"RPG", 
				"DB2"
			];

			var software = [
				"Node.js", 
				"Git", 
				"Sublime Text", 
				"Microsoft Visual Studio", 
				"Microsoft Windows Server 2008", 
				"Apache Server", 
				"Rational Rose modeling tool (with UML)", 
				"IBM Rational Developer for Power Systems Software (RDP)", 
				"Oracle RDBMS", 
				"MS Office", 
				"Libre Office"
			];

			var edu = {
				name: "edu",
				1 : {
					name: "Computer Programming Co-op Diploma",
					time: "May 2011 - December 2013",
					place: "Seneca College of Applied Arts and Technology, Toronto, ON"
				},
				2: {
					name: "Certificate in Teaching English to Adults",
					time: "October - November 2007",
					place: "Language Link, Beijing, China",
					details: {
						1: "Certificate awarded by Cambridge Educational Services Overseas Limited"
					}
				},
				3: {
					name: "5-Year Diploma in Teaching English and German",
					time: "September 1993 - June 1998",
					place: "Sochi State University, Sochi, Russia",
				},
				4: {
					name: "Certificate in Fine Arts",
					time: "September 1986 - May 1990",
					place: "Adler School of Fine Arts, Sochi, Russia"
				}
			};

			var exp = {
				name: "exp",
				1: {
					name: "research assistant - web developer",
					time: "may 2013 - december 2013",
					place: "Seneca's Centre for Development of Open Technology (Co-op position)",
					details: {
						1: "Provided localization into more than 60 languages for Mozilla's web-based Webmaker.org tools and the TogetherJS application which helped Mozilla expand internationally"
					}
				},
				2: {
					name: "Teacher of English as a Second Language",
					time: "February 2008 - July 2010",
					place: "Heilongjiang EEC Institute and Caree Sunshine School, Harbin, China",
					details: {
						1: "Developed a new original teaching methodology that significantly increased academic progress; improved and adapted old curriculum; demystified laws of learning language to beginners"
					}
				},
				3: {
					name: "Manager of Youth Services",
					time: "March 2002 - May 2006",
					place: "Calvary Chapel Church, Sochi, Russia",
					details: {
						1: "Pioneered two new departments which  helped expand services and increase membership",
						2: "Organized, oversaw, trained and coordinated six 15-strong teams",
						3: "Authored a new teaching curriculum and produced instructional CD's; translated a documentary from English into Russian; created a website for a Chinese doctor and author"
					}
				},
				4: {
					name: "Hotel Manager Assistant",
					time: "May 2001 - October 2002",
					place: "AdlerKurort, Sochi, Russia",
					details: {
						1: "Supervised the work of a staff of 40 people; arranged foreign visitors visa registration",
						2:	"Created a user manual for the public address and alarm system",
						3:	"Managed the first impressions of the company and of its brand; reconciled customer complaints"
					}
				},
				5: {
					name: "Teacher",
					time: "September 1998 - July 2000",
					place: "The International School Of Tomorrow, Sochi, Russia",
					details: {
						1: "Taught three elementary school courses; made one course more attractive to students; prepared weekly reports;  provided translation services", 
						2: "Made a Russian translation of a multi-volume school curriculum"
					}
				},
				6: {
					name: "Translator",
					time: "September 1995 - December 1996",
					place: "The C&T Publishing Company, Sochi, Russia",
					details: {
						1: "Improved the company's international correspondence and interpreted at meetings"
					}
				}
			};

			var volun = [
				"Effectively and knowledgeably supervised a staff of 8 teachers at a church Youth Department. On departure, was repeatedly asked to return because of good performance",
				"Designed and manufactured theatrical scenery for a community theater production",
				"Assisted in humanitarian aid distribution in the community during an economic crisis"
			];

			var hobby = [
				"Teaching myself technology (IT, web development and design, automated translation)",
				"Teaching myself languages (Chinese, Latin, Hebrew)",
				"Teaching myself music (drums, guitar)"
			];

			var achiev = [
				"Raised my children bilingual (English and Russian)",
				"Created my own Teach-Yourself-English curriculum"
			];

			document.getElementById("full_name").innerHTML = fullname;
			document.getElementById("address").innerHTML = address + " &bull; " + phone + " &bull; " + email;
			document.getElementById("objective").innerHTML = objective;
			
			listmaker(highlights, "highlights");

			document.getElementById("operatingsystems").innerHTML = oper_sys.join(", ");
			document.getElementById("programminglanguages").innerHTML = proglang.join(", ");
			document.getElementById("database").innerHTML = database.join(", ");
			document.getElementById("softwaretools").innerHTML = software.join(", ");

			listmaker(hobby, "hobby");
			

			
			dispenser(edu);
			dispenser(exp);
			listmaker(volun, "volun");
			listmaker(achiev, "achiev");
