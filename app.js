const axios = require("axios");

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: "aplicacion del clima",
        demand: true

    }
}).argv;

// console.log(argv.direccion);
let urlencode = encodeURI(argv.direccion);

axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${urlencode}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
 .then( (respuesta) => {
    let dat = respuesta.data.results[0];
    let direccion = dat.formatted_address;    
    let lat = dat.geometry.location.lat;
    let lng = dat.geometry.location.lng;

    console.log(direccion,lat,lng);
    

    //console.log(JSON.stringify(respuesta.data , undefined,2 ));
 }).catch( (e) => {
     console.log(e);
 })