$(function() {
	presentProjects();
});

// Template for a project
function Project(title, url, topics, date, description, imageURL) {
	this.title = title || "Untitled";
	this.url = url;
	this.topics = topics;
	this.date = date;
	this.description = description;
	this.imageURL = "images/" + (imageURL || "default.png");
}

function presentProjects() {
	var projects = [];

	projects.push(new Project(
		"\"About Me\"",
		"http://codepen.io/XanMead/full/wBrLdM/",
		"HTML, CSS, Responsive Design",
		"Spring 2015",
		"A simple page about me and my background.",
		"about.png"
	));
	projects.push(new Project(
		"\"Hacking the Times\"",
		"http://i.imgur.com/QycRPwG.png",
		"Chrome Developer Tools",
		"Spring 2015",
		"An exercise for learning to work with Chrome Developer Tools.",
		"times.png"
	));
	projects.push(new Project(
		"Karma Klone",
		"https://xanmead.github.io/karma-klone",
		"HTML, CSS",
		"Spring 2015",
		"A clone of the <a href='http://www.yourkarma.com'>Karma</a> landing page. Based on the <a href='http://thinkful-ed.github.io/karma-clone/'>model</a> presented by <a href='http://www.thinkful.com'>Thinkful</a>.",
		"karma.png"
	));
	projects.push(new Project(
		"Streetfighter Toy",
		"https://xanmead.github.io/jquery-streetfighter",
		"jQuery, Animation",
		"Spring 2015",
		"Streetfighter-themed toy for learning jQuery basics. <a href='https://github.com/Thinkful/streetfighter-starter'>Forked</a> from Thinkful.",
		"ryu.png"
	));
	projects.push(new Project(
		"Team Gurren Shopping List",
		"https://xanmead.github.io/shopping-list",
		"HTML, CSS, Javascript, jQuery",
		"Spring 2015",
		"Gurren Lagann themed shopping list application. Built to practice HTML and CSS skills, as well as to learn Javascript and jQuery.",
		"gurren.png"
	));
	projects.push(new Project(
		"Hot or Cold",
		"https://xanmead.github.io/hot-or-cold",
		"Javascript",
		"Spring 2015",
		"Guessing game <a href='https://github.com/thinkful-fewd/hot-or-cold-starter'>forked</a> from Thinkful to practice writing Javascript for another designer's layout."
	));
	projects.push(new Project(
		"Japanese Mythology Quiz",
		"https://xanmead.github.io/fewd-quiz",
		"HTML, CSS, Javascript, jQuery, OOP",
		"Spring 2015",
		"Randomized five-question quiz on Shinto and Japanese Mythology. Built to practice HTML, CSS, jQuery, and Javascript, and to gain an understanding of object-oriented design in Javascript.",
		"hikikomori.png"
	));
	projects.push(new Project(
		"StackOverflow Reputation Builder",
		"https://xanmead.github.io/stackerAJAX",
		"jQuery, AJAX",
		"Spring 2015",
		"Tool for <a href='http://www.stackoverflow.com'>StackOverflow</a>, <a href=''>forked</a> and expanded from the application provided by Thinkful. \"Get Inspired\" featured added to learn AJAX calls to an API."
	));
	projects.push(new Project(
		"The Partial Perspective Vortex",
		"https://xanmead.github.io/motion-sickness",
		"jQuery, AJAX, APIs, Google Maps, GeoNames",
		"Spring 2015",
		"Based on a \"What If?\" project from my 11th grade physics class, this application tells you how fast a location is moving based purely on its elevation and coordinates. Integrates the Google Maps API, Google Elevation Service, and the GeoNames API."
	));

	$.each(projects, function(i, item) {
		// get template
		var pan = $('.template .project').clone();
		console.log(item);
		// Populate clone
		pan.find('.item-title').text(item.title);
		pan.find('.item-title').attr('href', item.url);
		pan.find('.item-date').text(item.date);
		pan.find('.item-topics').text(item.topics);
		pan.find('.item-image').attr('src', item.imageURL);
		pan.find('.item-link').attr('href', item.url);
		pan.find('.item-desc').html(item.description);

		// append clone
		$('.works').append(pan);
	});
}
