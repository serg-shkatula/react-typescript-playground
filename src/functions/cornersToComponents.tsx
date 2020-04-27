import React, {FunctionComponent, MouseEventHandler} from "react";

export default (
    onCornerMouseDown: MouseEventHandler,
    Component: React.ComponentClass<any> | FunctionComponent<any>
) =>
    (cornerCoords: number[], index: number) => {
        return (
            <Component
                key={index.toString()}
                cid={index.toString()}
                onMouseDown={onCornerMouseDown}
                position={{x: cornerCoords[0], y: cornerCoords[1]}}
            />
        )
    }