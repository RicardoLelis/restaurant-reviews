import express from "express"
import RestaurantsCtrl from "./restaurants.controller.js"

const router = express.Router()

router.route("/").get(RestaurantsCtrl.api.GetRestaurants)

export default router