// function save_options() {
//     homepage = $('#homepage').checked;
//     comments = $('#comments').checked;
//     recommended = $('#recommended').checked;
//     notifications = $('#notifications').checked;
//     messages = $('#messages').checked;
//     upload = $('#upload').checked;

//     chrome.storage.sync.set({
//         homepage: homepage,
//         comments: comments,
//         recommended: recommended,
//         notifications: notifications,
//         messages: messages,
//         upload: upload
//     }, function(){
//         status = $('#status');
//         alert("Options saved.");
//         status.textContent = 'Options saved.';
//         setTimeout(function () {
//             status.textContent = '';
//         }, 750);
//     });
// }

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
// $('.options input[type=submit]').on('click',function(){
//     save_options();
// });