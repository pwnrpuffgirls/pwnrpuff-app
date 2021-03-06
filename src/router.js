import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home"
import Contact from "./views/Contact"
import Pwnrs from "./views/Pwnrs"
import NotFound from "./views/NotFound"

/* Pwners */
import Ingeborg from './views/Pwnrs/Ingeborg'
import Ina from './views/Pwnrs/Ina'
import Marit from './views/Pwnrs/Marit'

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
        { path: "/404", component: NotFound },
        { path: "*", redirect: "/404" },

        /* Pwners */
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
        {
            path: "/pwnrs/ingeborg",
            name: "ingeborg",
            component: Ingeborg
        },
        {
            path: "/pwnrs/marit",
            name: "marit",
            component: Marit
        },
    ]
})
