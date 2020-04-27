import {Acquirable} from "acquiring";
import {Renderer, UiService} from "../services/interfaces";

import {getImage, getUiService, getUserImageSource, letUserTransformImage} from "./imageTransformation";
import {initialiseApp, provideUserExperience} from "./userExperience";

export const USER_EXPERIENCE = new Acquirable<void>('user_experience')
export const APP_INITIALISED = new Acquirable<void>('app_initialised')
export const USER_CAN_TRANSFORM_IMAGE = new Acquirable<void>('user_can_transform_image')
export const IMAGE = new Acquirable<JSX.Element>('image')
export const USER_IMAGE_SOURCE = new Acquirable<string>('user_image_source')
export const UI_SERVICE = new Acquirable<UiService>('ui_service')
export const RENDERER = new Acquirable<Renderer>('renderer')

USER_EXPERIENCE.setAcquirer(provideUserExperience)
APP_INITIALISED.setAcquirer(initialiseApp)
USER_CAN_TRANSFORM_IMAGE.setAcquirer(letUserTransformImage)
IMAGE.setAcquirer(getImage)
USER_IMAGE_SOURCE.setAcquirer(getUserImageSource)
UI_SERVICE.setAcquirer(getUiService)