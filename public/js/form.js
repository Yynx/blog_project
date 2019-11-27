$(document).ready(() => {
    console.log($('#inputBlogAuthor').val().length);

    let maxLength = 1200;
    $('#inputBlogPost').keyup(() => {
        let textLength = maxLength - $('#inputBlogPost').val().length;
        $('#remainingChars').text(textLength);
    })
    $('#inputBlogPost').emoji();
});