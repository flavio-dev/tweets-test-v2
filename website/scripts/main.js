$(document).ready(function() {

    $('#header .toggle').click(function(e) {
        $('#header nav').toggleClass('expanded');
        e.preventDefault();
        return false;
    });

    app.init(5);
});

// this is the app
var app = function() {

    // Deciding to put the localStorage directly in the app object
    // as part of the management of the app life.
    // args: val - 'rel' or 'abs'
    var setInLocalStorage = function(val) {
        localStorage.setItem('dateFormat', val);
    }

    // Returns the state of localStorage for dateFormat
    // args: none
    var getFromLocalStorage = function() {
        return localStorage.getItem('dateFormat');
    }

    // this is the initialisation of the controller component.
    // args: n - take the number of tweets to display at load
    var init = function(n) {
        controller.setRelOrAbsDate();
        controller.loadInitialTweets(n);

        $('.ft__date-format--abs').on('click', function() {
            controller.changeRelOrAbsDate('abs');
        });
        $('.ft__date-format--rel').on('click', function() {
            controller.changeRelOrAbsDate('rel');
        });
    }

    return {
        init: init,
        setInLocalStorage: setInLocalStorage,
        getFromLocalStorage: getFromLocalStorage
    }
}();
