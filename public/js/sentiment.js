$(document).ready(() => {
    console.log('Working!')
    axios.get('/info').then(function (response) {

        let table = $('#sentTab');
        let data = response.data;
        data.forEach(comment => {
            if (comment.comments[0] === undefined) {
                return;
            }
            else {
                let newRow = table.append('<tr></tr>');
                //insertRow(table.rows.length);
                newRow.append(`<td>${comment.comments[0].commentEmoji}</td>`)
                //newRow.append(`<td>${comment.sentiment}</td>`)
                newRow.append(`<td>${comment.comments[0].author}</td>`)
                newRow.append(`<td>${comment.comments[0].content}</td>`)
                // let blogLink = $("<a>")
                // blogLink.innerHTML = comment.comments[0].author
            }
        })

        let table2 = $('#sTab2');
        let data2 = response.data;
        data.forEach(comment => {
            if (comment === undefined) {
                return;
            }
            else {
                let newRow = table2.append('<tr></tr>');
                //insertRow(table.rows.length);
                newRow.append(`<td>${comment.blogEmoji}</td>`)
                //newRow.append(`<td>${comment.sentiment}</td>`)
                newRow.append(`<td>${comment.author}</td>`)
                newRow.append(`<td>${comment.title}</td>`)
            }
        })
    });
});



