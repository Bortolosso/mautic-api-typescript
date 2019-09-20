import express, {Express} from "express"
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";

function Database(){
    mongoose.Promise = global.Promise;
    try{
        mongoose.connect("mongodb://localhost/api-hurst", {
            useNewUrlParser: true, useUnifiedTopology: true});
        mongoose.connection.on("open", () => {
            console.info("Connected with success !");
        });
        mongoose.connection.on("error", (error) => {
            console.log("There was an error connecting !");
        });
    }catch(err){
        console.error(err, "\n Error Database File !");
    };
};

Database();

const app = express();
export const router = express.Router();

function Server(app: Express){

    app.use(bodyParser.json());

    app.use(express.static(path.join(__dirname, "public")));

    app.use(router);

    const PORT:number = 8081;
    try{
        app.listen(PORT, () => {
            console.info(`Server running in http://localhost:${PORT}`);
        });
    }catch(err){
        console.error(`Error connect server http://localhost:${PORT}`);
    };
};

Server(app);
