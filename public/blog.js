$(document).ready(() => {
    console.log("Page Ready.")

    //Logs current blog data
    $.getJSON("blogs.json", function (data) {
        let testId = data.length - 1;
        $('#formOutput').html(`Title: ${data[testId].title} 
         Author: ${data[testId].author}
         Content: ${data[testId].content}`);
    });
    axios.get('/specific/2').then((response, ) => {
        blog = response.data;
        let strungData = JSON.stringify(blog);
        console.log(strungData);
        $('#formOutput').html(strungData);
    });
});