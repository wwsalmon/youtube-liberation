console.log("test");
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