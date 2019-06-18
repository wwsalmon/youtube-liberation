if ($("ytd-expander").length){
    if ($("ytd-expander")[0].hasAttribute("collapsed")) {
        $("ytd-expander").removeAttr("collapsed");
    }
}

$("head").append('<link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet">');

if ($("ytd-two-column-browse-results-renderer.ytd-browse[page-subtype=home]").length){
    $("ytd-two-column-browse-results-renderer.ytd-browse[page-subtype=home]").prepend(`

    <div class='ytl-container'>
        <h1>Welcome to YouTube</h1>
    </div>
    
    `);
}

$(window).on('load', function () {
    while ($(".ytd-masthead#container").length == 0){}
    
    $(".ytd-masthead#container").prepend(`
        <div class='ytl-nav'>
            <input type='checkbox' id='ytl-nm'>
            <div class='ytl-nav-menu'>
                <a href='https://www.youtube.com/'><div class='ytl-nav-item'><span>Home</span></div></a>
                <a href='https://www.youtube.com/feed/subscriptions'><div class='ytl-nav-item'><span>Subscriptions</span></div></a>
                <a href='https://www.youtube.com/feed/trending'><div class='ytl-nav-item'><span>Trending</span></div></a>
            </div>
            <label for='ytl-nm'>Menu</label>
        </div>
    `);
});