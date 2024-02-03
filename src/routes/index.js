import bookRouter from "./bookRouter.js";
import peopleRouter from "./peopleRouter.js";

function route(app){
    app.use('/book',bookRouter)
    app.use('/people',peopleRouter)
}
export default route