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

const updateComment = (filePath, udpateObj, id) =>
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

const updateReact = (filePath, udpateObj, id) =>
{   console.log(udpateObj)
    readFile(filePath).then(jsonArray => {
        for (let obj of jsonArray)
        {
             if(obj.id == id)
             {
                 for (let index in obj.reactions)
                 {
                     obj.reactions[index] += udpateObj.reactions[index];
                 }
                
                 
             }
        }
        console.log('react saved')
         saveFile(filePath, jsonArray);
         
    })
};


//reads file
const readFile = (filePath) => {

    return new Promise(function(resolve, reject) {
    fs.readFile(filePath, "utf-8", (err, data) =>{
        let jsonArray;  
         try {
            if(data !== "")
                jsonArray = JSON.parse(data);
        }
        catch (err) {
        }
        if(data === "")
            reject(new Error('no file found'));
        else 
            resolve(jsonArray);
        
    })
})
}



module.exports = {updateReact, updateComment, saveNewBlog, readFile, saveFile};