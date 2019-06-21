if ($("ytd-expander").length){
    if ($("ytd-expander")[0].hasAttribute("collapsed")) {
        $("ytd-expander").removeAttr("collapsed");
    }
}

$("head").append('<link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet">');

if ($("ytd-browse.ytd-page-manager[page-subtype='home']").length){
    $("ytd-browse.ytd-page-manager[page-subtype='home']").prepend(`

    <div class='ytl-home'>
        <div class='ytl-home-sidebar'>
        </div>
        <div class='ytl-container'>
            <h1>Welcome to YouTube</h1>
            <h3>Stay focused!</h3>
            <div class='ytl-home-grid'>
                <a href='https://www.youtube.com/feed/subscriptions'><div class='ytl-home-grid-item'>
                        <div class='ytl-home-grid-item-icon'>
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"
                                style="pointer-events: none; display: block; width: 100%; height: 100%;">
                                <g class="style-scope yt-icon">
                                    <path
                                        d="M18.7 8.7H5.3V7h13.4v1.7zm-1.7-5H7v1.6h10V3.7zm3.3 8.3v6.7c0 1-.7 1.6-1.6 1.6H5.3c-1 0-1.6-.7-1.6-1.6V12c0-1 .7-1.7 1.6-1.7h13.4c1 0 1.6.8 1.6 1.7zm-5 3.3l-5-2.7V18l5-2.7z"
                                        class="style-scope yt-icon"></path>
                                </g>
                            </svg>
                        </div>
                        <div class='ytl-home-grid-item-text'><span>Subscriptions</span></div>
                    
                </div></a>
                <a href='https://www.youtube.com/feed/trending'><div class='ytl-home-grid-item'>
                        <div class='ytl-home-grid-item-icon'>
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon"
                                style="pointer-events: none; display: block; width: 100%; height: 100%;">
                                <g class="style-scope yt-icon">
                            
                                    <path
                                        d="M17.53 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66-1.46-1.46-1.78-3.87-.85-5.72-.9.23-1.75.75-2.45 1.32C8.9 6.4 7.9 10.07 9.1 13.22c.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12-.06-.05-.1-.1-.15-.17-1.1-1.43-1.28-3.48-.53-5.12C5.87 10 5 12.3 5.12 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.3 1.5-6.6l-.13-.26c-.2-.45-.47-.87-.78-1.25zm-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.38-2.2-.16-2.88-.82 1.2-.28 1.9-1.16 2.1-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.2-2.06.15.38.35.76.58 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.26z"
                                        class="style-scope yt-icon"></path>
                                </g>
                            </svg>
                        </div>
                        <div class='ytl-home-grid-item-text'><span>Trending</span></div>
                    
                </div></a>
                <a href='https://www.youtube.com/playlist?list=WL'><div class='ytl-home-grid-item'>
                        <div class='ytl-home-grid-item-icon'>
                            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M12 3.67c-4.58 0-8.33 3.75-8.33 8.33s3.75 8.33 8.33 8.33 8.33-3.75 8.33-8.33S16.58 3.67 12 3.67zm3.5 11.83l-4.33-2.67v-5h1.25v4.34l3.75 2.25-.67 1.08z" class="style-scope yt-icon"></path></g></svg>
                        </div>
                        <div class='ytl-home-grid-item-text'><span>Watch Later</span></div>
                    
                </div></a>
            </div>
            <p>Like other social media platforms, YouTube is very good at showing you content that you want to watch but weren't
                planning to or looking for, making it super easy to get distracted and get sucked into one video after another and
                suddenly lose an hour of your day. Yet there are so many valuable resources and videos that you can't find
                elsewhere: tutorials, event coverage, specific creators you subscribe to who you know always publish high-quality
                content worth watching. For many of us, the value of YouTube makes it worth the sacrifice of even its most
                distracting possibilities, and it's impossible to just cut away.</p>
            <p>What if it didn't have to be this way? What if you could have the good of YouTube, see the content you want to see, without the platform constantly trying to drag your attention through an endless stream of productivity-draining drudgery?</p>
            <p>This is the philosophy behind YouTube Liberation. It's time to rise up, lose your chains, and join us as we march our
            way towards a better YouTube!</p>
        </div>
    </div>
    
    `);
}

$(window).on('load', function () {
    while ($(".ytd-masthead#container").length == 0){}
    
    $(".ytd-masthead#container").prepend(`
        <div class='ytl-nav'>
            <div class='ytl-nav-menu'>
                <a href='https://www.youtube.com/'><div class='ytl-nav-item'><span>Home</span></div></a>
                <a href='https://www.youtube.com/feed/subscriptions'><div class='ytl-nav-item'><span>Subscriptions</span></div></a>
                <a href='https://www.youtube.com/feed/trending'><div class='ytl-nav-item'><span>Trending</span></div></a>
                <a href='https://www.youtube.com/playlist?list=WL'><div class='ytl-nav-item'><span>Watch Later</span></div></a>
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

menuShow = false;

$(document).on("click", function () {
    var target = $(event.target);
    if (target.is(".ytl-nav yt-icon")){
        menuShow = !menuShow;
        $(".ytl-nav-menu").toggleClass("ytl-show");
    }
    else{
        if (menuShow){
            menuShow = false;
            $(".ytl-nav-menu").toggleClass("ytl-show");
        }
    }
});