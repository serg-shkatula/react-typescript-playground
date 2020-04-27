import React, {useEffect, useState} from 'react';
// import PerspectiveTransformable from "./components/PerspectiveTransformable";
import {RENDERER} from "./acquiring/";
// import {} from './acquiring/try'

function App({onReady}) {
    const [content, setContent] = useState()
    const [ui, setUi] = useState()

    useEffect(() => {
        RENDERER.setAcquirer(() => () => ({renderUi:setUi, renderContent: setContent}))
        onReady && onReady()
    }, [])

    return (
        <div className="App" style={{padding: 100}}>
            {ui}
            {content}
        </div>
    );
}

// function App() {
//     const [isImageLoaded, setIsImageLoaded] = useState()
//
//     const image = <img
//         alt={'handler'}
//         draggable={"false"}
//         onLoad={() => setIsImageLoaded(true)}
//         style={{width: '100%', display: isImageLoaded ? 'block' : 'none'}}
//         src={'https://via.placeholder.com/350x150'}
//     />
//     return (
//         <div className="App" style={{padding: 100}}>
//             {isImageLoaded ? (
//                 <PerspectiveTransformable style={{width: 300}}>
//                     {image}
//                 </PerspectiveTransformable>
//             ) : (
//                 image
//             )}
//         </div>
//     );
// }

export default App;

