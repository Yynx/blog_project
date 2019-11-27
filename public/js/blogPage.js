import {saveFile, area} from "./fileHandler.js";
$(document).ready (() => {
    console.log(saveFile());
    console.log(area(2));
    let maxLength = 300;
    $('#comment').keyup( ()=> {
        let textLength = maxLength - $('#comment').val().length;
        $('#remainingChars').text(textLength);
    })

});