import {Corners} from "../types";

export default (corners: Corners):number[] => corners.reduce(
    (result: number[], corner) => [...result, ...corner],
    []
)