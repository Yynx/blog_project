const fs = require('fs');

//saves file
const saveNewBlog = (filePath, jsonObj) =>
{
    readFile(filePath).then(jsonArray => {
        jsonObj.id = jsonArray[jsonArray.length -1].id +1;
        jsonArray.push(jsonObj);
        saveFile(filePath, jsonArray);
    });
}

const saveFile = (filePath, jsonArray) => {
    //sets id to id of most recent blog post +1
          
        newJsonArray = JSON.stringify(jsonArray)
        fs.writeFile(filePath, newJsonArray, ()=>{});
};

const updateBlog = (filePath, udpateObj, id) =>
{
    let newComment = {content: udpateObj.comment.content, time: udpateObj.comment.time, author: udpateObj.comment.author}
    readFile(filePath).then(jsonArray => {
        for (let obj of jsonArray)
        {
             if(obj.id == id)
             {
                 obj.comments.push(newComment);
                 
             }
        }
        
         saveFile(filePath, jsonArray);
    })
};

//reads file
const readFile = (filePath) => {

    return new Promise(function(resolve, reject) {
    fs.readFile(filePath, (err, data) =>{
        let jsonArray;
         try {
            jsonArray = JSON.parse(data);
        }
        catch (err) {
            console.log(err);
            //unexpected end of json input due to empty json file
            jsonArray = [];
        }
        resolve(jsonArray);
    })
})
}



module.exports = {updateBlog, saveNewBlog, readFile, saveFile};