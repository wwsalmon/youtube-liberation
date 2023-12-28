function save_options() {
    comments = document.getElementById('comments').checked;
    notifications = document.getElementById('notifications').checked;
    upload = document.getElementById('upload').checked;
    endscreen = document.getElementById('endscreen').checked;

    chrome.storage.sync.set({
        comments: comments,
        notifications: notifications,
        upload: upload,
        endscreen: endscreen,
    }, function(){
        statusInd = document.getElementById("status");
        statusInd.innerText = 'Options saved! Reload for them to take effect';
        setTimeout(function () {
            statusInd.innerText = '';
        }, 750);
    });
}

function restore_options() {
    chrome.storage.sync.get({
        comments: false,
        notifications: false,
        upload: false,
        endscreen: false,
    }, function (items) {
        document.getElementById('comments').checked = items.comments;
        document.getElementById('notifications').checked = items.notifications;
        document.getElementById('upload').checked = items.upload;
        document.getElementById('endscreen').checked = items.endscreen;
    });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById("options-save").addEventListener('click', function(){
    save_options();
})