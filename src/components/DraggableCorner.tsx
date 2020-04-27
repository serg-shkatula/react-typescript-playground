import React, {CSSProperties, FunctionComponent, MouseEventHandler} from "react";
import classNames from "classnames";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        position: "absolute",
        top: 0, left: 0,
        width: 0,
        height: 0,
    },
    shape: {
        transform: "translate(-50%, -50%)",
        width: 20,
        height: 20,
        backgroundColor: 'red',
        borderRadius: "50%",
    },
});

type Props = {
    position: { x: number, y: number },
    cid: string,
    onMouseDown: MouseEventHandler,
}

const DraggableCorner: FunctionComponent<Props> = (props) => {
    const classes = useStyles()

    const style: CSSProperties = {
        transform: `translate(${props.position.x || 0}px,${props.position.y || 0}px)`
    }

    return (
        <div
            data-cid={props.cid}
            onMouseDown={props.onMouseDown}
            className={classNames(classes.root)}
            style={style}
        >
            <div className={classes.shape}/>
        </div>
    )
}

export default DraggableCorner