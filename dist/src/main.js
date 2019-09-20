"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var body_parser_1 = __importDefault(require("body-parser"));
var path_1 = __importDefault(require("path"));
function Database() {
    mongoose_1.default.Promise = global.Promise;
    try {
        mongoose_1.default.connect("mongodb://localhost/api-hurst", {
            useNewUrlParser: true, useUnifiedTopology: true
        });
        mongoose_1.default.connection.on("open", function () {
            console.info("Connected with success !");
        });
        mongoose_1.default.connection.on("error", function (error) {
            console.log("There was an error connecting !");
        });
    }
    catch (err) {
        console.error(err, "\n Error Database File !");
    }
    ;
}
;
Database();
var app = express_1.default();
exports.router = express_1.default.Router();
function Server(app) {
    app.use(body_parser_1.default.json());
    app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
    app.use(exports.router);
    var PORT = 8081;
    try {
        app.listen(PORT, function () {
            console.info("Server running in http://localhost:" + PORT);
        });
    }
    catch (err) {
        console.error("Error connect server http://localhost:" + PORT);
    }
    ;
}
;
Server(app);
