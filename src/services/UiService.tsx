import React from "react";
import {Renderer, UiService} from "./interfaces";

export default class UiServiceClass implements UiService {
    renderer: Renderer;

    constructor(renderer) {
        this.renderer = renderer
    }

    addUserFileInput(onChosen): void {
        this.renderer.renderUi(
            <input type="file" onChange={event=>onChosen(event.target)} />
        )
    }

    removeUserFileInput(): void {
        this.renderer.renderUi(
            undefined
        )
    }

}