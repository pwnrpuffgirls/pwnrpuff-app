import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home"
import Contact from "./views/Contact"
import Pwnrs from "./views/Pwnrs"
import NotFound from "./views/NotFound"
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
            path: "/contact",
            name: "contact",
            component: Contact
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
