# Deploy of the project

You can see the project in the next link [Go to the project](https://6303f5b41b746a0008c5ad51--imaginative-kelpie-221d29.netlify.app/).
![deploy](https://subir-imagen.com/images/2022/08/22/Picture1.png)
![deploy](https://subir-imagen.com/images/2022/08/22/Picture2.png)
![deploy](https://subir-imagen.com/images/2022/08/22/Picture3.png)


For the project I used the @react-google-maps/api library for react, this library allow us to create components like useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer, and connect them with the services from the Google Maps API. For this project I worked with Places API, Maps Javascript API and Directions API from Google Maps API.

To use the Google's APIs, the first thing that I've had to do is created an account in the Google Cloud Platform, then I created my credentials to use the API KEY method to connect with the APIs and finally I connect my Project in React with the Google's APIs.

To created the Project in React I used the Create-react-app in the command line (the app is 100% responsive).

The project gives you  the opportunity to enter an Origin direction or place, and then  enter the Destination address or place on the inputs, then you can calculate the distance an the duration from the point A to the point B and look up in the map to see the markers of your route, you also have the same options of the Google Maps App, but this library brings us the opportunity to manipulate the options that we want to display just in case we want.

## Google API
You can check the Google API here:  [Google API](https://developers.google.com/maps/documentation?hl=es).

## @react-google-maps/api (Library)
I use a library created for react to manage the components of the Google Maps API you can check the documentation here:  [@react-google-maps/api](https://www.npmjs.com/package/@react-google-maps/api).

## Intructions for the project
This project is solving a project from Platzi call "Calcular distancias con Google Maps", where basically I have to create an application that calculates the distance and duration of a route from the the poitn A to the point B.

- The App most catch to address/places that could be in the same city or in different places of the globe, using the inputs of the user.

-when the user enter the address/places, the map most show the point A and the point B.

-The App most show the distance between the two points in kilometers.

-The App most show the time of the route between the point A & B.

-The App Most be responsive.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
