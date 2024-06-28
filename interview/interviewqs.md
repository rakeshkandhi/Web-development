### Basic Questions

1. **What is React.js?**
   - React.js is a JavaScript library developed by Facebook for building user interfaces, especially single-page applications. It allows developers to create reusable UI components.

2. **What are the key features of React?**
   - React's key features include components, JSX, virtual DOM, one-way data binding, and unidirectional data flow.

3. **Explain the Virtual DOM.**
   - The Virtual DOM is a lightweight, in-memory representation of the real DOM. React uses it to minimize the number of direct manipulations to the real DOM, improving performance by updating only the parts that have changed.

4. **What are props in React?**
   - Props, short for properties, are read-only attributes passed from a parent component to a child component to convey data.

5. **What is state in React?**
   - State is a built-in object used to contain data or information about the component that can change over time. State is managed within the component and can affect rendering.

6. **What are React hooks?**
   - Hooks are functions that let you use state and other React features in functional components. `useState` allows you to add state to a functional component, and `useEffect` lets you perform side effects in function components.

7. **What is the difference between a functional component and a class component?**
   - Functional components are simple JavaScript functions that return JSX, while class components are ES6 classes that extend `React.Component` and have lifecycle methods.

8. **Explain the lifecycle methods of a React component.**
   - Lifecycle methods include `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. In functional components, similar effects can be achieved using `useEffect`.

9. **What are controlled and uncontrolled components in React?**
   - Controlled components have their form data controlled by React state, while uncontrolled components store their data within the DOM, accessible via refs.

### Intermediate Questions

10. **What is Redux, and how does it relate to React?**
    - Redux is a state management library for JavaScript apps. It helps manage the app's state in a predictable way, and it's often used with React to maintain state outside of React components.

11. **How do you handle forms in React?**
    - Forms in React can be handled by controlled components, using state to manage form data and `onChange` events to update state.

12. **What is context in React, and how is it used?**
    - The Context API allows for passing data through the component tree without having to pass props down manually at every level. It's used for global state management.

13. **What is the purpose of React Router?**
    - React Router is a library used to handle routing in React applications, enabling navigation between different components/views.

14. **Explain the concept of higher-order components (HOC).**
    - HOCs are functions that take a component and return a new component with additional props or behavior. They are used for code reuse.

15. **What is the difference between `useMemo` and `useCallback` hooks?**
    - `useMemo` memoizes the result of a function, and `useCallback` memoizes the function itself. Both are used to optimize performance by preventing unnecessary re-renders.

16. **What are React fragments?**
    - Fragments allow you to group multiple elements without adding an extra node to the DOM. They are written as `<></>`.

17. **How do you handle side effects in React?**
    - Side effects are handled using the `useEffect` hook, which can perform tasks like data fetching or subscriptions when a component mounts, updates, or unmounts.

18. **Explain error boundaries in React.**
    - Error boundaries are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI. They are created using class components with the `componentDidCatch` lifecycle method.

### Advanced Questions

19. **What is server-side rendering (SSR) in React?**
    - SSR is the process of rendering React components on the server and sending the resulting HTML to the client, improving performance and SEO.

20. **Explain the concept of code splitting.**
    - Code splitting is the practice of breaking up a large bundle of JavaScript into smaller chunks that can be loaded on demand. It can be implemented using dynamic `import()` and React.lazy.

21. **What are React portals?**
    - Portals allow you to render children into a different part of the DOM, outside the parent component hierarchy. They are created using `ReactDOM.createPortal`.

22. **Discuss the new features introduced in React 18 (or the latest version you are familiar with).**
    - React 18 introduced features like concurrent rendering, `useTransition` for improved user experiences, automatic batching, and new server-side rendering APIs.

23. **What are custom hooks, and when would you create one?**
    - Custom hooks are reusable functions that contain shared logic using hooks. They are created to extract component logic into reusable functions.

24. **How does React handle reconciliation?**
    - Reconciliation is the process by which React updates the DOM with changes. React compares the new virtual DOM with the previous one and updates only the parts that changed.

25. **Explain the difference between `useReducer` and `useState` hooks.**
    - `useState` is suitable for simple state, while `useReducer` is used for more complex state logic and actions. `useReducer` provides a more scalable way to manage state transitions.

26. **What are render props in React?**
    - Render props are a technique for sharing code between components using a prop whose value is a function. This function returns a React element.

27. **What is the purpose of the `React.memo` function?**
    - `React.memo` is a higher-order component that memoizes a functional component, preventing unnecessary re-renders when props have not changed.

28. **How do you manage complex state in a React application?**
    - Complex state can be managed using state management libraries like Redux, Context API with `useReducer`, or custom hooks for encapsulating state logic.