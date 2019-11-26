$(document).ready (() => {

    let maxLength = 300;
    $('#comment').keyup( ()=> {
        let textLength = maxLength - $('#comment').val().length;
        $('#remainingChars').text(textLength);
    })

});