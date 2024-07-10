$(document).ready(function() {

    function toggleAccordion(button) {
        // Toggle the collapsed class 
        $(button).toggleClass("collapsed"); 

        // Show or hide the paragraph based on the presence of the collapsed class
        if ($(button).hasClass("collapsed")) {
            $(button).closest(".accordion-item").find(".accordion-body").show();
        } else {
            $(button).closest(".accordion-item").find(".accordion-body").hide();
        }
    }

    $(".accordion-button").click(function() {
        toggleAccordion(this);
    });

    $(".accordion-button").keydown(function(event) {
        // Check if Enter or Space is pressed 
        if (event.key === "Enter" || event.key === " ") {
            toggleAccordion(this);
            event.preventDefault();
        }
    });
});
