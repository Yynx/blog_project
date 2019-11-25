$(document).ready(() => {
    //console.log("formData");
    $('form').submit((event) => {
        event.preventDefault();
        let formData = $('form').serializeArray();
        console.log(formData);
        let title = formData[0].name;
        let titleVal = formData[0].value;
        let content = formData[1].name;
        let contentVal = formData[1].value;
        let jsonFormData = { title: titleVal, content: contentVal }
        console.log(`JSON ${jsonFormData.title}`);
        
        $('#formOutput').html(`Title: ${jsonFormData.title} 
        Content: ${jsonFormData.content}`);

    });
});