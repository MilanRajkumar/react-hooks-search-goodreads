1.  Intall yarn
    - Product by Facebook.
      Like to read: https://iamturns.com/yarn-vs-npm-2018/
      Like to read: https://blog.risingstack.com/yarn-vs-npm-node-js-package-managers/
2.  - Steps to follow to create project:
      yarn create react-app my-app which internally does: $ yarn global add create-react-app
   $ create-react-app books-test
3.  - For the project that i have created, pull from the github
      i. https://github.com/MilanRajkumar/react-hooks-search-goodreads
      ii. yarn install
      iii. To start use - yarn start
4.  - Since the Goods reads api does not handle cors and for quick disable the chrome web security.
      To do this open termial and go to applications folder:
      Ubuntu: google-chrome --disable-web-security --user-data-dir="/tmp/someFolderName"
      Different OS has slightly different commands.
5.  - No test is written since, api is not so well to work with the project.
6.  - Around 50% above can be further enhanched in terms of project structure like css, ui modules etc.
      UI can be make much better as well.
7.  - Details books screen data is hardcoded.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
