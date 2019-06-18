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
            <label for='ytl-nm'><yt-icon icon="yt-icons:menu"><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon">
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" class="style-scope yt-icon"></path>
      </g></svg></yt-icon></label>
        </div>
    `);

    if ($("ytd-app[is-watch-page]").length){
        console.log("test");
        while ($("#secondary #panels").length == 0){}
        console.log("test2");
        if ($("ytd-playlist-panel-renderer").length) {
            $("ytd-playlist-panel-renderer").appendTo("#primary-inner");
        }
    }

    
});