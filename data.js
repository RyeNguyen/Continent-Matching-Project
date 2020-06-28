let data = {};

let requestURL = "https://github.com/RyeNguyen/Continent-Matching-Project/blob/master/data.json";

let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function() {
    data = request.response;
};

//let data2 = {};

//let requestURL2 = "https://github.com/RyeNguyen/Continent-Matching-Project/blob/master/data2.json";

//let request2 = new XMLHttpRequest();
//request2.open("GET", requestURL2);
//request2.responseType = "json";
//request2.send();

//request2.onload = function() {
//    data2 = request2.response;
//};

gdjs.projectData = data;
