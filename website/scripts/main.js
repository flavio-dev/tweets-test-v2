$(document).ready(function() {
    app.init(5);
});

// this is the representation of the app
var app = function() {
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
        init: init
    }
}();

// helper for the management of the local storage
var storage = function() {
    // Set the localStorage for the persistent dateFormat
    // args: val - 'rel' or 'abs'
    var setInLocalStorage = function(val) {
        localStorage.setItem('dateFormat', val);
    }

    // Returns the state of localStorage for dateFormat
    // args: none
    var getFromLocalStorage = function() {
        return localStorage.getItem('dateFormat');
    }

    return {
        setInLocalStorage: setInLocalStorage,
        getFromLocalStorage: getFromLocalStorage
    }
}();
