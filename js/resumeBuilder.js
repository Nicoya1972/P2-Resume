var bio = {
    "name": "Marlon Fernandez",
    "role": "Web Design",

    "contacts": {
        "mobile": "123-456-7899",
        "email": "smooth2@example.com",
        "github": "tremal.git",
        "twitter": "@marlonfernandez",
        "location": "Clayton,CA"
    },

    "welcomeMessage": "welcome to my Interactive Resume",
    "skills": [
        "HTML",
        "CSS",
        "Javascript",
        "Ajax"
    ],

    "biopict": "Images/fry.jpg"
};

bio.display = function() {

    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);

    //for conatct information on top and bottom of page.
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGithub);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedLocation);

    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopict);
    var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMessage);

    //Describes current skills being learned.
    if (bio.skills.lenght > 0) {
        skills();
    }

    $("#header").append(HTMLskillsStart);

    var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkills);

};

bio.display();

var education = {

    "schools": [

        {
            "name": "San Francisco City College",
            "location": "San Francisco",
            "degree": "N/A",
            "majors": "Media Communications",
            "dates": "1995-1996"

        },

        {
            "name": "Computer Learning Center",
            "location": "San Francisco",
            "degree": "Technical Diploma",
            "majors": "Networking and Computer repair",
            "dates": "1996-1997"
        }

    ],
    "onlineCourses": [

        {
            "title": "Front End Web Developer",
            "school": "Udacity",
            "date": "2014-2015",
            "url": "https://www.udacity.com"
        }

    ]
};

//Add all education here
education.display = function() {
    for (school in education.schools) {

        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedNameDegree = formattedName + formattedDegree;

        $(".education-entry:last").append(formattedNameDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

        $(".education-entry:last").append(formattedDates);
        $(".education-entry:last").append(formattedLocation);
        $(".education-entry:last").append(formattedMajor);
    }
    $("#education").append(HTMLonlineClasses);
    for (online in education.onlineCourses)

    {

        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
        var formattedTitleSchool = formattedTitle + formattedSchool;

        $(".education-entry:last").append(formattedTitleSchool);

        var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[online].date);
        var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);

        $(".education-entry:last").append(formattedDate);
        $(".education-entry:last").append(formattedUrl);

    }
};

education.display();

var work = {
    "jobs": [

        {
            "employer": "Ganton Technologies",
            "title": "Senior Computer Tech",
            "dates": " 1997 - 2000",
            "description": "Responsible for building Desktop Computers to customers specifications.",
            "location": "San Leandro,CA"
        },

        {
            "employer": "at&t",
            "title": "Capacity Planner",
            "dates": "July 2000 - Present",
            "description": "Responsible for Project managing the implementation of Ethernet, and U-verse DSL Networks.",
            "location": "San Ramon,CA"
        }

    ]
};
//Employment history to be added here.
work.display = function() {
    for (job in work.jobs) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedDescription);
        $(".work-entry:last").append(formattedLocation);
    }
};

work.display();

var projects = {
    "projects": [

        {
            "title": "Udacity Front-End Web Developer",
            "dates": "2015",
            "description": "P1 and P2 projects",
            "images": ["Images/mockup.jpg", "Images/resume.jpg"]
        }
    ]
};
//Current projects thru Udacity.
projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);

        //First Project image
        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {

                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }

        }
    }
};

projects.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
//Adds a interactive Map to Resume.
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
