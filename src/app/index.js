import {Initial} from "./initial";
import {Actions} from "./actions";
import {Root} from "../root";
import {login} from "../pages/login"

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