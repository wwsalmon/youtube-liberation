function save_options() {
    homepage = $('#homepage').checked;
    comments = $('#comments').checked;
    recommended = $('#recommended').checked;
    notifications = $('#notifications').checked;
    messages = $('#messages').checked;
    upload = $('#upload').checked;

    chrome.storage.sync.set({
        homepage: homepage,
        comments: comments,
        recommended: recommended,
        notifications: notifications,
        messages: messages,
        upload: upload
    }, function(){
        status = $('#status');
        alert("Options saved.");
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get({
        homepage: false,
        comments: false,
        recommended: false,
        notifications: false,
        messages: false,
        upload: false
    }, function (items) {
        $('#homepage').checked = items.homepage;
        $('#comments').checked = items.comments;
        $('#recommended').checked = items.recommended;
        $('#notifications').checked = items.notifications;
        $('#messages').checked = items.messages;
        $('#upload').checked = items.upload;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
$('.options input[type=submit]').on('click',function(){
    save_options();
});