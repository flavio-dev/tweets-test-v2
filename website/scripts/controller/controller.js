// Controller: control the interactions between model and view

var controller = function() {

    // check localStorage and tells the view if the dates should show in Absolute or Relative
    // happens as soon as the page is loaded
    // args: none
    var setRelOrAbsDate = function() {
        var dateFormat = storage.getFromLocalStorage();
        dateFormat == 'abs' ? view.displayDateInAbsolute() : view.displayDateInRelative();
    }

    // attach an event to the footer and notify the view
    // args: val - 'rel' or 'abs'
    var changeRelOrAbsDate = function(val) {
        val == 'abs' ? view.displayDateInAbsolute() : view.displayDateInRelative();
        storage.setInLocalStorage(val);
    }

    // the controller here is asking the model the data needed by the view
    // args: n - is the number of tweet for initial load
    //       empty - it returns them all
    var loadInitialTweets = function(n) {
        n ? view.displayTweets(dataMangement.getLastNTweets(n)) : view.displayTweets(dataMangement.getAllTweets());
    }

    return {
        setRelOrAbsDate: setRelOrAbsDate,
        changeRelOrAbsDate: changeRelOrAbsDate,
        loadInitialTweets: loadInitialTweets
    }
}();
