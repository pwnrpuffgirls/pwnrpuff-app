import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home"
import NotFound from "./views/NotFound"
import Pwnrs from "./views/Pwnrs"
import Ina from "./views/Ina"

Vue.use(Router)

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/pwnrs",
            name: "pwnrs",
            component: Pwnrs
        },
        {
            path: "/pwnrs/ina",
            name: "ina",
            component: Ina
        },
        { path: "/404", component: NotFound },
        { path: "*", redirect: "/404" }
    ]
})
