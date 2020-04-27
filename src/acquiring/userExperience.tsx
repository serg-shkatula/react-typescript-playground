import {APP_INITIALISED, USER_CAN_TRANSFORM_IMAGE} from "./";
import ReactDOM from "react-dom";
import React from "react";
import App from "../App";
import * as serviceWorker from "../serviceWorker";
import {resolve} from "acquiring";

export const initialiseApp = () => async () => {
    await new Promise((resolve) => {
        ReactDOM.render(
            <React.StrictMode>
                <App onReady={resolve}/>
            </React.StrictMode>,
            document.getElementById('root')
        );

        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA
        serviceWorker.unregister();
    })
}

export function provideUserExperience() {
    resolve(APP_INITIALISED)
    resolve(USER_CAN_TRANSFORM_IMAGE)
}