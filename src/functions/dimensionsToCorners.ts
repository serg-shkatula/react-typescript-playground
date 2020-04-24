import {Corners} from "../types";

export default (w:number, h:number):Corners => [
    [0, 0],
    [w, 0],
    [0, h],
    [w, h],
]