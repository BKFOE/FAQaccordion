$(document).ready(function() {

    function toggleAccoridon(button) {

        // Toggle the collapsed class 
        $(button).toggleClass("collapsed"); 

        // Show or hide the paragraph based on the presence of the collapsed class
        if ($(button).hasClass("collpased")) {
            $(button).closest(".accordion-item").find(".accordion-body").show();
        } else {
            $(button).closest(".accordion-item").find(".accordion-body").hide();
        }
    }

    $(button).click(function() {

        // Toggle the collapsed class 
        toggleAccoridon(this);
    });

    $(".accordion-button").keydown(function(event) {
        // Check if enter or space is pressed 
        if(event.key === "Enter" || event.key === " ") {
            toggleAccoridon(this);
            event.preventDefault();
        };
    });
});

       