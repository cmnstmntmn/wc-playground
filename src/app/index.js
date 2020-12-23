import {Initial} from "./initial.js";
import {Actions} from "./actions.js";
import {Root} from "../root.js";
import {login} from "../pages/login.js"

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