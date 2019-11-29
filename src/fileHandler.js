const fs = require('fs');

const saveFile = (filePath, jsonArray) => {
    
    newJsonArray = JSON.stringify(jsonArray);
    fs.writeFile(filePath,newJsonArray,"utf-8", () =>{});
}

const readFile = filePath => {
    let jsonArray = [];
    //if the file exists read the file
    if(fs.existsSync(filePath))
    {
        let jsonData = fs.readFileSync(filePath,"utf-8", (response)=>{});
        //if the file isn't empty
        if(jsonData !== "")
            jsonArray = JSON.parse(jsonData);
    }
    else{
        //if the file doesn't exist 
        fs.writeFile(filePath, "", response => {})   
    }
    return jsonArray;
}

module.exports = {readFile, saveFile};