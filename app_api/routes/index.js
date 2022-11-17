var express = require("express");
var router = express.Router();
var ctrlMekanlar = require("../controllers/mekanlar");
var ctrlYorumlar = require("../controllers/yorumlar");

//MEKANLAR
router
   .route("/mekanlar/:mekanid") //bağlantı adresindeki kısmı dinamikleştirir :, bağlantı adresinde tüm idleri alabilmemizi sağlar
   .get(ctrlMekanlar.mekanGetir)
   .put(ctrlMekanlar.mekanGuncelle)
   .delete(ctrlMekanlar.mekanSil); // aynı id üzerinden erişim sağlandığı için zincirleme yapı kullanılır

router
   .route("/mekanlar")
   .get(ctrlMekanlar.mekanlariListele)
   .post(ctrlMekanlar.mekanEkle);

//YORUMLAR

router
   .route("/mekanlar/:mekanid/yorumlar")
   .post(ctrlYorumlar.yorumEkle);
   
router
   .route("/mekanlar/:mekanid/yorumlar/:yorumid")
   .get(ctrlYorumlar.yorumGetir)
   .put(ctrlYorumlar.yorumGuncelle)
   .post(ctrlYorumlar.yorumSil);

module.exports = router;