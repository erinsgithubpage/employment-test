$(document).ready(function() {
    var buttons = $("a.primary.stat-text-link[href^='javascript:ActivEngage.launchChat']");
   
    buttons.each(function() {
        var newButton = $("<a>", {
            "class": "primary stat-text-link new-button",
            "title": "Apply for Financing",
            "text": "Apply for Financing",
            "href": "https://www.diverchev.com/RouteOne",
            "target": "_blank" 
        }).css({
            "background-color": "red",
            "color": "white",
            "display": "block",
            "margin-top": "10px"
        });
        
        $(this).after(newButton);
    });
});