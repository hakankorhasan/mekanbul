
const axios = require("axios");
const { resource } = require("../../app");
var apiSecenekleri = {
  //sunucu: "https://mekanbul.hakankorhasann.repl.co",
  sunucu: "http://localhost:3000",
  apiYolu: "/api/mekanlar/"
}

var mesafeyiFormatla = function(mesafe){
  var yeniMesafe, birim;
  if(mesafe > 1){
    yeniMesafe = parseFloat(mesafe).toFixed(1);
    birim = " km";
  }else{
    yeniMesafe = parseInt(mesafe*1000,10);
    birim = " m";
  }
  return yeniMesafe + birim;
}

var anaSayfaOlustur=function(res,mekanListesi){
  var mesaj;
  if(!(mekanListesi instanceof Array)) {
    mesaj:"API HATASI: birşeyler ters gitti.";
    mekanListesi=[];
  }else{
    if (!mekanListesi.length){
      mesaj:"Civarda herhangi bir mekan yok";
    }
  }
  res.render("anasayfa",{
    "baslik": "Anasayfa",
    "sayfaBaslik": {
      "siteAd": "Mekanbul",
      "slogan": "Mekanları Keşfet"
    },
    "mekanlar": mekanListesi,
    "mesaj": mesaj
  })
}

/* GET home page. */
const anaSayfa = function (req, res, next) {
  axios.get(apiSecenekleri.sunucu+apiSecenekleri.apiYolu, {
    params: {
      enlem: req.query.enlem,
      boylam: req.query.boylam
    },
  }).then(function (response) {
    var i, mekanlar;
    mekanlar = response.data;
    for(i=0; i < mekanlar.length; i++){
      mekanlar[i].mesafe = mesafeyiFormatla(mekanlar[i].mesafe);
    }
    anaSayfaOlustur(res, mekanlar);
  }).catch(function (hata) {
    anaSayfaOlustur(res,hata);
  })
}


const detaySayfasiOlustur = function (res, mekanDetaylari) {
  mekanDetaylari.koordinat = {
    "enlem": mekanDetaylari.koordinat[0],
    "boylam": mekanDetaylari.koordinat[1]
  }
  res.render('mekanbilgisi', {
    mekanBaslik: mekanDetaylari.ad,
    mekanDetay: mekanDetaylari
  })
}

var hataGoster = function(res, hata){
  var mesaj;
  if(hata.response.status == 404){
    mesaj="404, sayfa bulunmadı!";
  }
  else{
    mesaj = hata.response.status+" hatası";
  }
  res.status(hata.response.status);
  res.render('error',{
    "mesaj": mesaj
  });
};


const mekanBilgisi = function (req, res, next) {
  axios.get(apiSecenekleri.sunucu + apiSecenekleri.apiYolu + req.params.mekanid)
    .then(function (response) {
      req.session.mekanAdi = response.data.ad;
      detaySayfasiOlustur(res, response.data)
    })
    .catch(function (hata) {
      hataGoster(res, hata)
    })
}

const yorumEkle = function (req, res, next) {
  var mekanAdi = req.session.mekanAdi;
  var mekanid=req.params.mekanid;
  if(!mekanid){
    res.redirect("/mekan/"+mekanid);//yönlendirme 
  }else{

  }
  res.render("yorumekle", { "baslik":mekanAdi+" Mekanına Yorum Ekle", title: "Yorum Sayfası" });
};

const yorumumuEkle = function (req, res) {
  var gonderilenYorum, mekanid;
  mekanid = req.params.mekanid;
  if(!req.body.adsoyad || !req.body.yorum){
    res.redirect("/mekanid/"+mekanid+"/yorum/yeni?hata?=evet"); // o sayfada hata oldu mu olmadı mı öğrenmek için hata=evet ekleriz
  }
  else{
    gonderilenYorum = {
      yorumYapan: req.body.adsoyad, //sol taraf veritabanında tanımlanan hali
      puan: req.body.puan,
      yorumMetni: req.body.yorum
    }
    axios.post(apiSecenekleri.sunucu+apiSecenekleri.apiYolu+mekanid+"/yorumlar",
    gonderilenYorum).then(function (){
      res.redirect("/mekan/"+mekanid);
    });//then baaşrılı olduktan sonra napcağımızıa kara verir
  }
};

module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle,
  yorumumuEkle
}