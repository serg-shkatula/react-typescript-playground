import React, {useState} from 'react';
import PerspectiveTransformable from "./components/PerspectiveTransformable";

function App() {
    const [isImageLoaded, setIsImageLoaded] = useState()

    const image = <img
        alt={'handler'}
        draggable={"false"}
        onLoad={() => setIsImageLoaded(true)}
        style={{width: '100%', display: isImageLoaded ? 'block' : 'none'}}
        src={'https://via.placeholder.com/350x150'}
    />
    return (
        <div className="App" style={{padding: 100}}>
            {isImageLoaded ? (
                <PerspectiveTransformable style={{width: 300}}>
                    {image}
                </PerspectiveTransformable>
            ) : (
                image
            )}
        </div>
    );
}

export default App;

