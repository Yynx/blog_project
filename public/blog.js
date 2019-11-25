$(document).ready(() => {
    console.log("Page Ready.")
    
    //Logs current blog data
    $.getJSON("blogs.json", function (data) {
        let dataJson = JSON.stringify(data);
        console.log('DAta' + dataJson);
    });

    // $('#formOutput').html(`Title: ${jsonFormData.title} 
    // Content: ${jsonFormData.content}`);
});