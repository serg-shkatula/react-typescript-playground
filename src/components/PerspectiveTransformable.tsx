import React, {CSSProperties, FunctionComponent, useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import cornersToComponents from "../functions/cornersToComponents";
import {CornersStateHook, MouseHandlersStateHook, RefStateHook, StringStateHook} from "../types";
import cornersToCoordinates from "../functions/cornersToCoordinates";
import dimensionsToCorners from "../functions/dimensionsToCorners";
import coordinatesToTransformMatrix3d from "../functions/coordinatesToTransformMatrix3d";

type Props = {
    style?: CSSProperties,
    class?: string,
}

const useStyles = makeStyles({
    root: {
        position: "relative",
    },
});

const PerspectiveTransformable: FunctionComponent<Props> = (
    {
        style,
        children
    }
) => {
    const classes = useStyles();
    const [ref, setRef]:RefStateHook = useState();
    const [initialCorners, setInitialCorners]:CornersStateHook = useState();
    const [modifiedCorners, setModifiedCorners]:CornersStateHook = useState();
    const [activeCornerId, setActiveCornerId]:StringStateHook = useState();
    const [mouseHandlers, setMouseHandlers]:MouseHandlersStateHook = useState()

    useEffect(() => {
        if (!mouseHandlers) return;
        document.addEventListener('mousemove', mouseHandlers.move);
        document.addEventListener('mouseup', mouseHandlers.up);
    }, [mouseHandlers]);

    useEffect(() => {
        if (!ref) return

        setInitialCorners(dimensionsToCorners(ref.offsetWidth, ref.offsetHeight));
        setModifiedCorners(dimensionsToCorners(ref.offsetWidth, ref.offsetHeight));
    }, [ref])

    useEffect(() => {
        if (!activeCornerId) {
            setMouseHandlers((prevHandler: any) => {
                if (!prevHandler) return;

                document.removeEventListener('mousemove', prevHandler.move)
                document.removeEventListener('mouseup', prevHandler.up)
            })

            return
        }

        const moveHandler = (event: MouseEvent) => {
            const newModifiedCorners = [...modifiedCorners];

            newModifiedCorners[activeCornerId][0] += event.movementX
            newModifiedCorners[activeCornerId][1] += event.movementY

            setModifiedCorners(newModifiedCorners)
        };
        const upHandler = () => {
            setActiveCornerId(undefined)
        };
        setMouseHandlers({move: moveHandler, up: upHandler});
    }, [activeCornerId])

    let transform = ''
    if (modifiedCorners && initialCorners) {
        const srcCoords = cornersToCoordinates(initialCorners)
        const dstCoords = cornersToCoordinates(modifiedCorners)

        transform = coordinatesToTransformMatrix3d(srcCoords, dstCoords)
    }

    const perspectiveStyle: CSSProperties = {
        transformOrigin: "0 0",
        transform
    }

    const handleCornerMouseDown = (event: React.MouseEvent) => {
        setActiveCornerId((event.currentTarget as HTMLElement).dataset.cid);
    }

    return (
        <div
            ref={setRef}
            style={style}
            className={classes.root}
        >
            <div style={perspectiveStyle}>
                {children}
            </div>
            {modifiedCorners && modifiedCorners.map(
                cornersToComponents(handleCornerMouseDown)
            )}
        </div>
    )
}

export default PerspectiveTransformable