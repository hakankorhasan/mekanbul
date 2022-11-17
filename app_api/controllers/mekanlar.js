var mongoose = require("mongoose");
var Mekan = mongoose.model("mekan");

const cevapOlustur = function(res, status, content) {
    res.status(status).json(content);
}

const mekanlariListele = function(req, res) {
    cevapOlustur(res,200,{"durum":"basarili"});
}

const mekanEkle = function(req, res) {
    cevapOlustur(res,200,{"durum":"basarili"});
}

const mekanGetir = function(req, res) {
    cevapOlustur(res,200,{"durum":"basarili"});
}

const mekanGuncelle = function(req, res) {
    cevapOlustur(res,200,{"durum":"basarili"});
}

const mekanSil = function(req, res) {
    cevapOlustur(res,200,{"durum":"basarili"});
}

module.exports = {
    mekanEkle,
    mekanGetir,
    mekanGuncelle,
    mekanSil,
    mekanlariListele
}
