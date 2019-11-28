$(document).ready(() => {
    //console.log('Working!')
    axios.get('/info').then(function (response) {
        let table2 = $('#sTab2');
        let data2 = response.data;
        data2.forEach(comment => {
            console.log(comment);
            if (comment === undefined) {
                return;
            }
            else {
                let newRow = table2.append('<tr></tr>');
                //insertRow(table.rows.length);
                newRow.append(`<td>${comment.blogEmoji}</td>`)
                newRow.append(`<td>${comment.blogSentiment}</td>`)
                newRow.append(`<td>${comment.author}</td>`)
                newRow.append(`<td><a href='/blog/${comment.id}'>${comment.title}</a></td>`)
                // let blogLink = $(`<a href='/blog/${comment.blogEmoji}'></a>`)

            }
        })
    });
});



