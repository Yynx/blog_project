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
    
    $('#text').on('input', function() {
        $('#imgBox').empty();
        console.clear()
        let timeout = null;
        $('#text').keyup(function() {
            clearTimeout(timeout);
            console.clear();
            timeout = setTimeout(function () {
                let input = $('#text').val();
                console.clear();
                console.log(input)
                if(input.length === 0) {
                    $('#imgBox').empty();
                } //if statement
                else {
                    let txt = $('#text').val();
                    gifFetch(txt)
                } // else statement
            }, 500) //timeout = setTimeout
            function gifFetch(txt) {
                const result = fetch(`http://api.giphy.com/v1/gifs/search?q=${txt}&limit=20&api_key=${ApiKey}`)
                .then( response => response.json())
                .then(data => {
                let gUrl = data.data;
                linkMkr(gUrl);
                })
                .then(data => {//event listeners
                    let gifs = document.getElementsByClassName('gif')
                    console.log(gifs);
                    for (gif of gifs)
                    {   
                        gif.addEventListener('click', function(event) {
                            $('.gif').css('border','none')
                            $(event.target).css('border', '5px solid purple')
                            let url = event.target.src

                            let gifForm = $('#gifLink').val(url);
                
                    })
                    }
                    
                   
                })
            } //gifFetch
            function linkMkr(gUrl) {
                let lnkList = []
                for(x in gUrl){
                    let nuUrl = `https://media.giphy.com/media/${gUrl[x].id}/giphy.gif`;
                    lnkList.push(nuUrl)
                };
                gAppend(lnkList);
            } //linkMkr
            function gAppend(lnkList) {
                for(x in lnkList) {
                    $('#imgBox').append(`<img class="gif" src='${lnkList[x]}' alt="can't load gif">`);
                }} //gAppend
               
        }) // text.keyup
    }) //text.on('input')

   


});