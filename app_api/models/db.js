var mongoose = require("mongoose");
require("./mekansema");
var dbUrl = "mongodb://localhost/mekanbul";
//"mongodb+srv://hakankorhasan:1234@mekanbul.femahp8.mongodb.net/mekanbul?retryWrites=true&w=majority";

mongoose.connect(dbUrl);

mongoose.connection.on("connected", () => {
    console.log(dbUrl + "adresindeki veri tabanin abaglandi");
});

mongoose.connection.on("error", () => {
    console.log("Baglanti hatasi");
});

mongoose.connection.on("disconnected", () => {
    console.log("BAglanti kesilidi");
});

function close(msg, callback) {
    mongoose.connection.close(() => {
        console.log(msg);
        callback();
    });
}
process.on("SIGINT", () => {
    close("Uygulama kapatilidi", () => {
        process.exit(0);
    });
});