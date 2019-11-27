$(document).ready(() => {
    console.log($('#inputBlogAuthor').val().length);

    let maxLength = 1200;
    // currently character count does not work for emojis
    $('#inputBlogPost').keyup(() => {
        let textLength = maxLength - $('#inputBlogPost').val().length;
        $('#remainingChars').text(textLength);
    })
    $('#inputBlogPost').emoji();
});