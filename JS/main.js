let headerAnswer = prompt('Введите заголовок', 'Соединение потеряно');
let reasonAnswer = prompt('Введите причину', 'Анти-АФК');

function lostConnection(header, reason) {
    let replaceHeader = document.getElementById('header');
    replaceHeader.innerHTML = header;

    let replaceReason = document.getElementById('reason');
    replaceReason.innerHTML = reason;
}

lostConnection(headerAnswer, reasonAnswer);

