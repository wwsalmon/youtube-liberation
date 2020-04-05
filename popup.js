function save_options() {
    homepage = document.getElementById('homepage').checked;
    comments = document.getElementById('comments').checked;
    recommended = document.getElementById('recommended').checked;
    notifications = document.getElementById('notifications').checked;
    messages = document.getElementById('messages').checked;
    upload = document.getElementById('upload').checked;

    chrome.storage.sync.set({
        homepage: homepage,
        comments: comments,
        recommended: recommended,
        notifications: notifications,
        messages: messages,
        upload: upload
    }, function(){
        statusInd = document.getElementById("status");
        statusInd.innerText = 'Options saved.';
        setTimeout(function () {
            statusInd.innerText = '';
        }, 750);
    });
}

function restore_options() {
    chrome.storage.sync.get({
        homepage: false,
        comments: false,
        recommended: false,
        notifications: false,
        messages: false,
        upload: false
    }, function (items) {
        document.getElementById('homepage').checked = items.homepage;
        document.getElementById('comments').checked = items.comments;
        document.getElementById('recommended').checked = items.recommended;
        document.getElementById('notifications').checked = items.notifications;
        document.getElementById('messages').checked = items.messages;
        document.getElementById('upload').checked = items.upload;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById("options-save").addEventListener('click', function(){
    save_options();
})