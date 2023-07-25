const axios = require("axios");

const url1 = "https://zeev-x.github.io/js/json/hentai_ai.json";
const url2 = "https://zeev-x.github.io/js/json/hentai_ai2.json";
const url3 = "https://zeev-x.github.io/js/json/hentai_ai3.json";
const url = [url1,url2,url3];
const randUrl = Math.floor(Math.random()*url.length);
const link = url[randUrl];

function hentai(){
  return new Promise((resolve,reject) => {
    axios.get(link).then((response) => {
      var data = response.data;
      var rand = Math.floor(Math.random()*data.length);
      var img = data[rand].img;
      var result = {
        status : true,
        url : img,
        message : 'Presented by zeev-x'
      };
      resolve(result);
    });
  }).catch(err => console.log("Error code 404!!"));
}

module.exports.hentai = hentai;