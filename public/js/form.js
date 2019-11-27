$(document).ready(() => {
    console.log($('#inputBlogAuthor').val().length);

    let maxLength = 1200;
    // currently character count does not work for emojis
    $('#inputBlogPost').keyup(() => {
        let textLength = maxLength - $('#inputBlogPost').val().length;
        $('#remainingChars').text(textLength);
    })
    $('#inputBlogPost').emoji();

    // GIPHY API starts 

    let ApiKey = "5u1gTu3XcLrgMWBSwrhb1uwYohwVMCNv";
    getQuery();
    function getQuery() {
        let timeout = null;
        let query = document.getElementById('text');
        $(query).keyup(function () {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                let input = $('#text').val();
                let inLength = input.length;
                if(inLength > 0) {
                    gifFetch(input)
                }
                else {
                    $('#imgBox').empty();
                }
            },200)
        })
    }
    function gifFetch(input) {
        const result = fetch(`http://api.giphy.com/v1/gifs/search?q=${input}&limit=20&api_key=${ApiKey}`).then( response => response.json()).then(data => {
            let gUrl = data.data;
            // console.log(gUrl);
            // let gUrl = data.data[0].id;
            // let nuUrl = `https://media.giphy.com/media/${gUrl}/giphy.gif`;
            // gAppend(nuUrl);
            linkMkr(gUrl)
        })
    }
    function linkMkr(gUrl) {
        let lnkList = []
        for(x = 0; x < 20; x++){
            let nuUrl = `https://media.giphy.com/media/${gUrl[x].id}/giphy.gif`;
            lnkList.push(nuUrl)
        };
        gAppend(lnkList)
    }
    function gAppend(lnkList) {
        for(x = 0; x < 20; x++) {
            $('#imgBox').append(`<img class="gif" src='${lnkList[x]}'>`);
        }
    }




});