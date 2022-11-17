var mongoose = require("mongoose");
var Mekan = mongoose.model("mekan");

const cevapOlustur = function(res, status, content) {
    res.status(status).json(content);
}

const yorumEkle = function() {
    cevapOlustur(res,200,{"durum":"basarili"});
}

const yorumSil = function() {
    cevapOlustur(res,200,{"durum":"basarili"});
}

const yorumGetir = function() {
    cevapOlustur(res,200,{"durum":"basarili"});
}

const yorumGuncelle = function() {
    cevapOlustur(res,200,{"durum":"basarili"});
}

module.exports = {
    yorumEkle,
    yorumGetir,
    yorumGuncelle,
    yorumSil
}