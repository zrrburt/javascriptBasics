
var name = "Susan Justin";
var role = "Web Designer Developer Illustrator";


var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").append(formattedName);
$("#header").append(formattedRole);


/* Exercise one

$("#main").append("Susan Justin");
var awesome ="I am Susan and I am awesome."
var funthoughts = awesome.replace('awesome', 'fun');
$("#main").append(funthoughts);*/

var skills = ["awsomeness", "programming", "teaching", "JS"];
//$("#main").append(skills[0]);

//object literal notation
//BIO
var bio = {
	"name" : "Susan",
	"role" : "Web Designer",
	"contactinfo": "4169323016",
	"pictureURL": "http:susanjustin.com/bio/me.jpg",
	"welcomemessage": "Hi and welcome to my resume",
	"skills": ["Design", "CSS", "Javascript"]
}

$("#main").append(bio.welcomemessage);

//adding object properties
//bio.email = "susanjustin1@gmail.com";
//bracket notation
//bio["city"] = "Toronto";

//WORK for one position
var work1 = {};
	work1.position = "Web Designer";
	work1.currentEmpl = "Cactus Creative";
	work1.yearsWorked = "10";
	work1.city = "Toronto";

var work = {
	jobs : [
		{
			"employer": "Ontario Legislative Assembly",
			"title": "Web Designer/Architect",
			"dates" : "2012-2014",
			"description": "Design and code"

		},
		
		{
			"employer": "The Hospital for Sick Kids",
			"title": "Web Coordinator",
			"dates" : "2011-2012",
			"description": "User Experience, Design and Develop"

		},
		
		{
			"employer": "The Toronto International Film Festival",
			"title": "Web Designer",
			"dates" : "2008-2010",
			"description": "User Experience, Design and Develop"

		}



	]

}

//for-in loop that iterates over all the jobs in work obj
//for(job in work.jobs){console.log(work.jobs[job])}

function displayWork(){
for(job in work.jobs){
//var	employer = work.jobs[job].employer;
//var titlee = work.jobs[job].title;
$("#workExperience").append(HTMLworkStart);
var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
var formattedEmployerTitle = formattedEmployer + formattedTitle;
$(".work-entry:last").append(formattedEmployer + formattedTitle);
var desc = HTMLworkDescription .replace("%data%", work.jobs[job].description);
$(".work-entry:last").append(desc);
var dates = HTMLworkDescription .replace("%data%", work.jobs[job].dates);
$(".work-entry:last").append(dates);
}

}
displayWork();

//$("#main").append(work["position"]);

//EDUCATION
var education = {
	"schools" : [
		{
			"name": "Ontario College of Art",
			"city": "Toronto",
			"degree" : "certificate",
			"subject": "illustration"

		},
		
		{
			"name": "George Brown College",
			"city": "Toronto",
			"degree" : "diploma",
			"subject": ["Graphic Design"]

		}



	]

}

//PROJECTS
var projects = {
	"projects": [
		{
			"client": "The Hospital for Sick Kids",
			"roles": "design and development",
			"technology" : "css, yui, html5"

		},
		
		{
			"client": "The Legislative Assembly of Ontario",
			"roles": "design, user experience, and development",
			"technology" : "Bootstrap, css, javascript, T4 CMS"

		}

]
}


function atskills(){
 if (bio.skills){
$('#header').append(HTMLskillsStart);
//alert('true dat');
var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$('#skills').append(formattedSkill);
//console.log(formattedSkill);
var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$('#skills').append(formattedSkill);
var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$('#skills').append(formattedSkill);
}

}

atskills();


