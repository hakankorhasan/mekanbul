var express = require("express");

/* GET home page. */
const anaSayfa = function (req, res, next) {
  res.render("anasayfa",
   {
    'baslik' : 'Homepage' ,
    'sayfaBaslik' : {
      'siteAd' : 'MekanBul' ,
      'slogan' : 'Civardaki Mekanları Keşfet'
    },
    'mekanlar' : [
      {
        'ad' : 'Starbucks',
        'puan' : 3,
        'adres' : 'SurYapı Park Avm',
        'imkanlar' : [
          'Coffee',
          'Tea',
          'Cake'
        ],
        'mesafe' : '10 Km'
      },
      {
        'ad' : 'HollyStone',
        'puan' : 3,
        'adres' : 'SurYapı Park Avm',
        'imkanlar' : [
          'Beer',
          'Whiskey',
          'Wine'
        ],
        'mesafe' : '120 Km'
      },
      {
        'ad' : 'Irısh',
        'puan' : 5,
        'adres' : 'SurYapı Park Avm',
        'imkanlar' : [
          'Beer',
          'Whiskey',
          'Wine'
        ],
        'mesafe' : '5 Km'
      },
      {
        'ad' : 'Sur Winston Pub',
        'puan' : 1,
        'adres' : 'SurYapı Park Avm',
        'imkanlar' : [
          'Beer',
          'Whiskey',
          'Wine'
        ],
        'mesafe' : '3 Km'
      },
      {
        'ad' : 'Arabica',
        'puan' : 3,
        'adres' : 'SurYapı Park Avm',
        'imkanlar' : [
          'Coffee',
          'Ice Coffee',
          'Tea'
        ],
        'mesafe' : '750 M'
      },
    ]
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
          'acilis' : '9:00-23:00',
          'kapali' : 'false'
        },
        {
          'gunler' : 'Cumartesi-Pazar',
          'acilis' : '8:00-24:00',
          'kapali' : 'true'
        },
      ],
      'imkanlar' : ["Coffee",'Tea','Cake'],
      'koordinatlar' : 
      {
        'enlem' : '37.82150',
        'boylam' : '30.53642'
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