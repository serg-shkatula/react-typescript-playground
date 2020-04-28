import React from "react";
import {IMAGE, RENDERER, UI_SERVICE, USER_IMAGE_SOURCE} from "./";
import PerspectiveTransformable from "../components/PerspectiveTransformable";
import {resolve} from "acquiring"
import UiServiceClass from "./../services/UiService";

export function getUiService() {
    const renderer = resolve(RENDERER)

    return async () => new UiServiceClass(renderer)
}
export function getUserImageSource() {
    const ui = resolve(UI_SERVICE)

    return async () => {
        const input:HTMLInputElement = await new Promise(resolve => {
            ui.addUserFileInput(resolve)
        })

        let url = 'https://via.placeholder.com/350x150'
        if (input.files && input.files[0]) {
            const reader = new FileReader();

            url = await new Promise((resolve, reject) => {
                reader.onload = function (e) {
                    resolve((e.target || {}).result as string)
                };

                if(!input.files || !input.files.length) return reject()
                reader.readAsDataURL(input.files[0]);
            })
        }

        ui.removeUserFileInput()

        return url
    }
}
export function getImage() {
    const userImageSource = resolve(USER_IMAGE_SOURCE)
    const renderer = resolve(RENDERER)

    return async () => {
        await new Promise(resolve => {
            const preloadingImg = new Image()
            preloadingImg.onload = () => resolve()
            preloadingImg.src = userImageSource
        })

        const image = <img
            alt={'handler'}
            draggable={"false"}
            style={{width: '100%', display: 'block'}}
            src={userImageSource}
        />

        return image
    }
}

export function letUserTransformImage() {
    const image = resolve(IMAGE)
    const renderer = resolve(RENDERER)

    return () => {
        renderer.renderContent(
            <PerspectiveTransformable style={{width: 300}}>
                {image}
            </PerspectiveTransformable>
        )
    }
}