// View: responsible for dislaying the data to user

var view = function() {

    var $container = $('#content')

    // populates the DOM with the list of tweets
    // args: listOfTweets - array containing tweet objects
    var populateDom = function(listOfTweets) {
        var template = $('#template').html();
        Mustache.parse(template);
        $container.html(Mustache.render(template, listOfTweets));
    }

    // remove a class at container element. prefied with js as js injected
    var showRel = function() {
        $container.removeClass('js--show-abs');
    }

    // inject a class at container element. prefied with js as js injected
    var showAbs = function() {
        $container.addClass('js--show-abs');
    }

    return {
        displayTweets: populateDom,
        displayDateInRelative: showRel,
        displayDateInAbsolute: showAbs
    }
}();
