import express, {Express} from "express"
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";

import routesInvestments from "./routes/investments";
import routesSegments from "./routes/segments";
import routesUsers from "./routes/users";

function Database(){
    mongoose.Promise = global.Promise;
    try{
        mongoose.connect("mongodb://localhost/api-hurst", {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        mongoose.connection.on("open", () => {
            console.info("Connected with success !");
        });
        mongoose.connection.on("error", (error) => {
            console.error("There was an error connecting !");
        });
    }catch(err){
        console.error(err, "\n Error Database File !");
    };
};

const app = express();
export const router = express.Router();

function Init_Server(app: Express){
    
    try{
        Database();
    }catch(err){
        console.log(`Error call function 'Database()' !` , err);
    };

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

    try{
        ConfigServer();
    }catch(err){
        console.log(`Error call function 'ConfigServer()' !` , err);
    };

    function ConfigServer(){
        app.use(bodyParser.json());
        app.use(express.static(path.join(__dirname, "public")));
        app.use(router);

        router.use(function timeLog(req, res, next) {
            console.log('Time: ', Date.now());
            next();
        }); //Middleware
        router.use("/Investments", routesInvestments);
        router.use("/Segments", routesSegments);
        router.use("/Users", routesUsers);
    };
};

try{
    Init_Server(app);
}catch(err){
    console.log(`Error call function 'Init_Server()' !` , err);
};
