$(document).ready(function() {
    $(".accordion-button").click(function() {

        // Toggle the collapsed class 
        $(this).toggleClass("collapsed");

        // Show or hide the paragraph based on the presence of the collapsed class 
        if($(this).hasClass("collapsed")) {
            $(this).closest(".accordion-item").find(".accordion-body").show(1000);
        } else {
            $(this).closest(".accordion-item").find(".accordion-body").hide(1000);
        }
    });
});
