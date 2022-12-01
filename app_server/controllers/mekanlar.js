var express = require("express");
var router = express.Router();
const axios = require("axios")
var apiSecenekleri={
  sunucu : "http://localhost:3000",
  apiYolu : "/api/mekanlar/"
}

var mesafeyiFormatla=function(mesafe){
  var yeniMesafe, birim;
  if(mesafe>1){
    yeniMesafe=parseFloat(mesafe).toFixed(1);
    birim=" km";
  }else{
    yeniMesafe=parseInt(mesafe*1000,10);
    birim=" m";
  }
  return yeniMesafe+birim;
}

var anaSayfaOlustur=function(res,mekanListesi){
  var mesaj;
  if(!(mekanListesi instanceof Array)){
    mesaj:"API HATASI: birşeyler ters gitti.";
    mekanListesi=[];
  }else{
    if(!(mekanListesi.lenght)){
      mesaj:"Civarda herhangi bir mekan yok";
    }
  }
  res.render("anasayfa",{
    "baslik":"Anasayfa",
    sayfaBaslik:{
      "siteAd":"Mekanbul",
      "slogan":"Mekanları Keşfet"
    },
    mekanlar:mekanListesi,
    mesaj:mesaj
  });
}

/* GET home page. */
const anaSayfa = function (req, res, next) {
  axios.get(apiSecenekleri.sunucu+apiSecenekleri.apiYolu, {
    params:{
      enlem:req.query.enlem,
      boylam:req.query.boylam
    }
  }).then(function(response){
    var i, mekanlar;
    mekanlar = response.data;
    for(i=0; i<mekanlar.length; i++){
      mekanlar[i].mesafe = mesafeyiFormatla(mekanlar[i].mesafe);
    }
    anaSayfaOlustur(res, mekanlar);
  }).catch(function(hata){
    anaSayfaOlustur(res,hata);
  });
}

const mekanBilgisi = function (req, res, next) {
  res.render("mekanbilgisi", {
    'baslik' : 'Mekan Bilgisi',
    'mekanBaslik' : 'Starbucks',
    'mekanDetay' : {
      'ad' : 'Starbucks',
      'puan' : 3,
      'adres' : 'SurYapı Park Avm',
      'saatler' : [
        {
          'gunler' : 'Pazartesi-Cuma',
          'acilis' : '9:00',
          'kapanis' : "23:00",
          'kapali' : false
        },
        {
          'gunler' : 'Cumartesi-Pazar',
          'acilis' : '8:00',
          'kapanis' : "24:00",
          'kapali' : false
        },
      ],
      'imkanlar' : ["Coffee",'Tea','Cake'],
      'koordinatlar' : 
      {
        'enlem' : '37.7',
        'boylam' : '35.4'
      },
      'yorumlar' : [
        {
          'yorumYapan' : 'Hakan Körhasan',
          'yorumMetni' : 'Offff Çok İYİİİİİ!!!',
          'tarih' : '26 Ekim 2022',
          'puan' : 5
        }
      ]
    }
  });
};

const yorumEkle = function (req, res, next) {
  res.render("yorumekle", { title: "Yorum Ekle" });
};

module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle
};