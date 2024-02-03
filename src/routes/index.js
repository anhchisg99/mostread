import bookRouter from "./bookRouter.js";
import peopleRouter from "./peopleRouter.js";
import categoryRouter from "./categoryRouter.js";
import reviewRouter from "./reviewRouter.js";

function route(app){
    app.use('/book',bookRouter)
    app.use('/people',peopleRouter)
    app.use('/category',categoryRouter)
    app.use('/review',reviewRouter)
}
export default route