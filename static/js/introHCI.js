'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$("#testjs").text("Blubbs");
		$(".jumbotron p").toggleClass("active");
	});

	$("a.thumbnail").click(projectClick);

	$("#submitBtn").click(updateProject);
}

function updateProject(e) {
   var chosenProject = $('#project').val();
   $(chosenProject).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(chosenProject + " .project-description").text(newText);
}

function projectClick(e){
	//prevent the page from reloading
	e.preventDefault();

	//$(this) refers to the object that triggered the event
	var projectTitle = $(this).find("p").text();
	var jumbotronHeader = $(".jumbotron h1");
	jumbotronHeader.text(projectTitle);

	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
	if (description.length == 0){
		$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
	} else {
		$(".project-description").fadeToggle();
		/*description.html("<p>Stop clicking on me! You just did it at " +
			(new Date()) + "</p>");*/
	}
}