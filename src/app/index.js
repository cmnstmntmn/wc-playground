import {Initial} from "./initial.js";
import {Actions} from "./actions.js";
import {Root} from "../root/index.js";
import {login} from "../pages/login/index.js"

export const createApp = () =>
  Initial().then(initial => ({
    initial: Object.assign(
        initial, 
        login.Initial()
    ),
    
    Actions: update =>
      Object.assign(
        {},
        Actions(update),
        login.Actions(update)
      ),

    Effects: update => [
    ],

    view: Root
  }))