# React Learning Roadmap

## Introduction to React

- React is a JavaScript library for building reusable UI components.
- It allows developers to build complex user interfaces by breaking them down into smaller components.
- This component-based approach makes it easier to write and maintain code by dividing it into smaller, more manageable pieces.
- React is open-source, which means that anyone can use it and contribute to its development.
- It is also a component-based library, which means that the code is organized into small, modular components that can be combined to build more complex UIs.
- This makes it easy to write and maintain code, as well as to reuse components in different parts of an application.
- React offers a declarative approach to UI development. React allows developers to describe the desired UI state then it handles the updates automatically. This simplifies building complex applications by abstracting away implementation details, enabling developers to focus on crafting the desired user interface rather than the intricacies of application logic.

### What is React?

- React is a JavaScript library that allows you to create reusable UI components. At its core, React takes care of the view layer of an application. This means that React provides a way to generate HTML, CSS, and JavaScript in a flexible and maintainable way.

### How does React work?

When you write React code, you create components. These components describe what should be rendered on the screen. React then takes care of updating the UI based on the data that you provide. This means that you write code that is independent of how the data is retrieved or manipulated.

### Why use React?

React is a powerful tool that makes it easy to build complex applications. Here are some reasons why you might want to use React:

1. **Faster development**: With React, you can build complex applications much faster than with traditional approaches. React allows you to break your application down into smaller, independent components, and uses a virtual DOM (a lightweight in-memory tree of the actual DOM) to update the UI efficiently, making the app feel like it is updating instantly even when there are a lot of components and data changing at once.
2. **Easier maintenance**: When you build an application with React, it is very easy to make changes to the UI without affecting the underlying business logic. This makes it much easier to maintain and update your application over time.
3. **Better performance**: React is designed to be fast. It uses a technique called the "virtual DOM" to update the UI efficiently. This means that your application will perform well, even on slower devices.
4. **Popular and supported**: React is a widely used technology, and there is a lot of support available. This means that there are many resources to help you learn and use React, as well as a large community of developers who can help you when you need it.

Overall, React is a powerful tool that makes it easy to build complex applications. It is a great way to build reusable, maintainable, and performant applications.

## Features of React:-

1. **JSX (JavaScript Syntax Extension)**
   - JSX is a combination of the HTML and Js i.e., you can embed Js objects inside the HTML elements.
   - JSX is not supported by the browsers, as a result, Babel compiler transcompile the code into JavaScript code.
   - Easy to read.

2. **Virtual DOM**
    - JavaScript Frameworks updates the whole DOM at once, which makes the web application slow. 
    - But react uses virtual DOM which is an exact copy of real DOM. Whenever there is a modification in the web application, the whole virtual DOM is updated first and finds the difference between real DOM and Virtual DOM.
3. **One-Way Data Binding**
    - 
4. **Performance**
5. **Extensions**
6. **Components**
7. **Simplicity**

## Getting Started with React

### Setting up your Development Environment

To get started with React, you will need to have the following installed:

- Windows/Mac
- Code editor ([VS Code](https://code.visualstudio.com/download) preferred)
- Browser ([Chrome](https://www.google.com/chrome/))
- [Node.js](https://nodejs.org/en/download/)
- Version control ([Git](https://git-scm.com/download))

### Run Your First Application

```bash
npx create-react-app my-react-app
cd my-react-app
npm start
```

- **create-react-app**: This will set up everything you need to run a React application with a single command. No configuring needed!
- **cd**: This changes directory to the required location
- **npm start**: This starts a development server at `http://localhost:3000/` that will automatically reload your application when you make changes to any of the source files.

The folder structure of create-react-app looks like this:

    my-react-app/
    ├── node_modules
    ├── public/
    │   ├── favicon.ico
    │   ├── index.html
    │   └── manifest.json
    ├── src/
    │   ├── App.css
    │   ├── App.js
    │   ├── App.test.js
    │   ├── index.css
    │   ├── index.js
    │   └── logo.svg
    ├── package.json
    ├── package-lock.json
    └── README.md

The `node_modules` folder contains the React library and any third-party libraries needed by your application, managed by npm. npm will install these dependencies automatically when you run `npm install`. You can safely ignore this folder when checking in code to version control, as the dependencies will be reinstalled when needed.

The `public` folder contains the HTML file that loads your JavaScript application. It also contains the icon in the tab and the manifest file in case you want to make your application installable.

The `src` folder contains all the application code. The entry point is the `index.js` file which sets up a `<div>` to render into and the root component. The root component is `App` in this case, which is the main component for your application. Feel free to modify `App.js` as per your wish.

The `package.json` file contains metadata relevant to the project, including things like the project’s name, version, and dependencies. The `package-lock.json` file contains exact versions of every dependency in your project. It is used to reproduce the environment for your project across any computer.

The `README.md` file contains all the instructions you need to run, build, and understand your React project. It provides a basic overview of what the project is and how to get it up and running locally.
