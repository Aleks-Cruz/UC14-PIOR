const modal = document.getElementById("modal");

const tituloEstado =
document.getElementById("tituloEstado");

const infoClima =
document.getElementById("infoClima");

const infoPopulacao =
document.getElementById("infoPopulacao");

const infoAltitude =
document.getElementById("infoAltitude");

const infoVegetacao =
document.getElementById("infoVegetacao");

const estados = {

    "Amazonas":{
        clima:"Equatorial",
        populacao:"4 milhões",
        altitude:"92 metros",
        vegetacao:"Floresta Amazônica"
    },

    "Maranhão":{
        clima:"Tropical",
        populacao:"7 milhões",
        altitude:"24 metros",
        vegetacao:"Mangue"
    },

    "Minas Gerais":{
        clima:"Tropical de altitude",
        populacao:"21 milhões",
        altitude:"620 metros",
        vegetacao:"Cerrado"
    },

    "Rio Grande do Sul":{
        clima:"Subtropical",
        populacao:"11 milhões",
        altitude:"32 metros",
        vegetacao:"Pampa"
    },

    "Chubut":{
        clima:"Frio",
        populacao:"600 mil",
        altitude:"450 metros",
        vegetacao:"Estepe"
    },

    "Rio Negro":{
        clima:"Temperado",
        populacao:"700 mil",
        altitude:"500 metros",
        vegetacao:"Patagônia"
    },

    "Santa Cruz":{
        clima:"Frio",
        populacao:"300 mil",
        altitude:"300 metros",
        vegetacao:"Estepe fria"
    },

    "Santa Luis":{
        clima:"Semiárido",
        populacao:"500 mil",
        altitude:"700 metros",
        vegetacao:"Mata seca"
    },

    "New South":{
        clima:"Temperado",
        populacao:"8 milhões",
        altitude:"800 metros",
        vegetacao:"Floresta"
    },

    "Northeam":{
        clima:"Tropical",
        populacao:"250 mil",
        altitude:"60 metros",
        vegetacao:"Savana"
    },

    "South":{
        clima:"Mediterrâneo",
        populacao:"1 milhão",
        altitude:"50 metros",
        vegetacao:"Arbustos"
    },

    "Westeam":{
        clima:"Desértico",
        populacao:"2 milhões",
        altitude:"300 metros",
        vegetacao:"Deserto"
    },

    "Alberta":{
        clima:"Frio",
        populacao:"4 milhões",
        altitude:"645 metros",
        vegetacao:"Floresta"
    },

    "British Columbia":{
        clima:"Temperado",
        populacao:"5 milhões",
        altitude:"300 metros",
        vegetacao:"Pinheiros"
    },

    "Manitoba":{
        clima:"Continental",
        populacao:"1 milhão",
        altitude:"239 metros",
        vegetacao:"Pradarias"
    },

    "Yukon":{
        clima:"Polar",
        populacao:"40 mil",
        altitude:"700 metros",
        vegetacao:"Tundra"
    },

    "Alaska":{
        clima:"Polar",
        populacao:"730 mil",
        altitude:"580 metros",
        vegetacao:"Tundra"
    },

    "Montana":{
        clima:"Frio",
        populacao:"1 milhão",
        altitude:"1040 metros",
        vegetacao:"Montanhas"
    },

    "Texas":{
        clima:"Quente",
        populacao:"30 milhões",
        altitude:"520 metros",
        vegetacao:"Campos"
    },

    "Wyoming":{
        clima:"Semiárido",
        populacao:"580 mil",
        altitude:"2040 metros",
        vegetacao:"Campos secos"
    },

    "Cusco":{
        clima:"Frio de montanha",
        populacao:"430 mil",
        altitude:"3399 metros",
        vegetacao:"Andina"
    },

    "Lima":{
        clima:"Árido",
        populacao:"10 milhões",
        altitude:"154 metros",
        vegetacao:"Costeira"
    },

    "Piura":{
        clima:"Quente",
        populacao:"2 milhões",
        altitude:"29 metros",
        vegetacao:"Seca"
    },

    "San Martin":{
        clima:"Tropical",
        populacao:"900 mil",
        altitude:"860 metros",
        vegetacao:"Floresta"
    }

};

function abrirModal(nome){

    modal.style.display = "block";

    tituloEstado.innerHTML = nome;

    infoClima.innerHTML =
    "🌤️ Clima: " + estados[nome].clima;

    infoPopulacao.innerHTML =
    "👥 População: " + estados[nome].populacao;

    infoAltitude.innerHTML =
    "⛰️ Altitude: " + estados[nome].altitude;

    infoVegetacao.innerHTML =
    "🌿 Vegetação: " + estados[nome].vegetacao;

}

function fecharModal(){
    modal.style.display = "none";
}

function trocarPais(idPais){

    const paises =
    document.querySelectorAll(".pais");

    paises.forEach(function(pais){
        pais.classList.remove("ativo");
    });

    document
    .getElementById(idPais)
    .classList.add("ativo");

}


function fazerLogin(){

    window.location.href =
    "home.html";

}
function voltarHome(){

    window.location.href =
    "home.html";

}