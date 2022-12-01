var express = require('express');
var router = express.Router();
//var ctrlMain = require('../controllers/main'); //require diyerek maini import etmiş olduk
/* GET home page. */

var ctrlMekanlar = require('../controllers/mekanlar');
 var ctrlDigerleri = require('../controllers/digerleri');

router.get('/', ctrlMekanlar.anaSayfa);
 router.get('/mekan/:mekanid', ctrlMekanlar.mekanBilgisi);
 router.get('/mekan/yorum/yeni', ctrlMekanlar.yorumEkle);
 router.get('/hakkinda', ctrlDigerleri.hakkinda);

//router.get('/', ctrlMain.index );

module.exports = router;
