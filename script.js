function addClass(id, className) {
    var element = document.getElementById(id);
    element.classList.add(className);
}

function deleteClass(id, className) {
    var element = document.getElementById(id);
    element.classList.remove(className);
}

function openChatbot() {
    addClass('openChat', 'hide');
    deleteClass('info', 'hide');
    deleteClass('zoneMessage', 'hide');
    deleteClass('button', 'hide');
}

function closeChatbot() {
    deleteClass('openChat', 'hide');
    addClass('info', 'hide');
    addClass('zoneMessage', 'hide');
    addClass('button', 'hide');
}

// Open chat bot on click openChat button
document.getElementById("openChat").addEventListener('click', openChatbot);

// Close chat bot on click closeChat button
document.getElementById("closeChat").addEventListener('click', closeChatbot);