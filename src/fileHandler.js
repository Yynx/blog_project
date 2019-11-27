const fs = require('fs');

const saveJson = (jsonObj) => {
    fs.readFile('public/assets/blogs.json', (err, data) => {
        if (err) throw err;
        let jsonArray;
        try {
            jsonArray = JSON.parse(data);
        }
        catch (err) {
            console.log(err);
            //unexpected end of json input due to empty json file
            jsonArray = [];
        }
        jsonObj.id = jsonArray.length + 1;
        jsonArray.push(jsonObj);
        //convert array to form that can be saved in json file
        newJsonArray = JSON.stringify(jsonArray);
        fs.writeFile("public/assets/blogs.json", newJsonArray, () => {
        });
        
    }); 
}

const readFile = (filepath) => {

    return new Promise(function(resolve, reject) {
    fs.readFile(filepath, (err, data) =>{
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



module.exports = {saveJson, readFile};