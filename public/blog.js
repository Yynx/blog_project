$(document).ready(() => {
    //console.log("formData");
    // $('form').submit((event) => {
    // event.preventDefault();
    // let formData = $('form').serializeArray();
    // console.log(formData);
    // let title = formData[0].name;
    // let titleVal = formData[0].value;
    // let content = formData[1].name;
    // let contentVal = formData[1].value;
    // let jsonFormData = { title: titleVal, content: contentVal }
    // console.log(`JSON ${jsonFormData}`);
    $.getJSON("formData.json", function (data) {
        console.log(data);
        // let dataJson = JSON.stringify(data);
        // console.log(dataJson);
    });

    // $('#formOutput').html(`Title: ${jsonFormData.title} 
    // Content: ${jsonFormData.content}`);


    // axios.post('/submit', {
    //     firstName: 'Fred',
    //     lastName: 'Flintstone'
    // });

    // });
});