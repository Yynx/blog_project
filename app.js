const fs = require('fs');
const express = require('express');


fs.writeFile("formData.json", data, function (err) {
    if (err) {
        console.log(err);
    }
});