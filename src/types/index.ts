export type NativeMouseEventHandler = (this: Document, ev: MouseEvent) => any
export type MouseHandlers = {move:NativeMouseEventHandler, up:NativeMouseEventHandler}
export type Corners = [number, number][]
export type CornersStateHook = [Corners | undefined, Function]
export type StringStateHook = [string | undefined, Function]
export type MouseHandlersStateHook = [MouseHandlers | undefined, Function]
export type RefStateHook = [HTMLElement | undefined, any]

