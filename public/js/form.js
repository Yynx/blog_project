import {saveFile, area} from "./fileHandler.js";
console.log(saveFile());
console.log(area(2));

$(document).ready(() => {
    // console.log($('#inputBlogAuthor').val().length);

    let maxLength = 1200;
    $('#inputBlogPost').keyup(() => {
        let textLength = maxLength - $('#inputBlogPost').val().length;
        $('#remainingChars').text(textLength);
    })
    $('#inputBlogPost').emoji();
});