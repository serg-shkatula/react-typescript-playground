import React, {MouseEventHandler} from "react";
import DraggableCorner from "../components/DraggableCorner";

export default (onCornerMouseDown: MouseEventHandler) =>
    (cornerCoords: number[], index: number) => {
        return (
            <DraggableCorner
                key={index.toString()}
                cid={index.toString()}
                onMouseDown={onCornerMouseDown}
                position={{x: cornerCoords[0], y: cornerCoords[1]}}
            />
        )
    }