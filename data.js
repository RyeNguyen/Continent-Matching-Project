let data = {};

let requestURL = "https://github.com/RyeNguyen/Continent-Matching-Project/blob/master/data.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function() {
    data = request.response;
};

gdjs.projectData = data;
