This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How things work here

Everything is organised in as a system of dependencies.

You start with global objective.

Let's say u need to multiply 2 numbers. We could describe this like that:
```
// To multiply two numbers
const TWO_NUMBERS_MULTIPLIED = () => {
    // I need number A
    const a = resolve(NUMBER_A);
    // I need number B
    const b = resolve(NUMBER_B)

    // Then I use them to return the result
    // (we return a method that will perfom the nesseccery manipulations
    return () => (a * b)
}  
```
*`resolve` is the core method that makes the system aware of dependencies and resolves them asynchronously 

Starting from here you can simply provide A and B like that:
```
const NUMBER_A = () => {
    return () => 2
}
const NUMBER_B = () => {
    return () => 3
}
```

But if number A needs to be acquired as a result of other manipulations, then we can keep specifying sub-dependencies:
```
const NUMBER_A = () => {
    const c = resolve(NUMBER_C)
    const squareRootFunc = resolve(SQUARE_ROOT_FUNC)

    return () => return squareRootFunc(c)
}
```

Assuming we've described `NUMBER_C` and `SQUARE_ROOT_FUNC`, we will have the following tree:
```
TWO_NUMBERS_MULTIPLIED
 |_ NUMBER_A
 |   |_ NUMBER_C
 |   |_ SQUARE_ROOT_FUNC
 |_ NUMBER B
```

You can acquire any instance - the tree will get constructed from the point of the instance and dependecies will get automatically resolved.

Benifits of such approach:
* strictness
* descriptiveness (dependencies are easily read, undestood, and can be visualised)
* easy to debug (whenever an error accurs you know exactly the position in the tree)
* easy to test (plug in at any position in the tree and/or supply fixed values bypassing the natural flow)
* A/B testing (supply multiple methods that can resolve the same entity)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
