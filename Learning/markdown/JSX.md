# JSX and Basic Syntax

JSX (JavaScript XML) is an extension to JavaScript syntax that allows XML-like code to be written directly within JavaScript. It's commonly used in React for defining the structure of UI components.

```js
import React from "react";

interface Props {
  name: string;
}

const Greet: React.FC<Props> = (props) => {
  return (
    <>
      <h1>Hello World</h1>
      <p>Welcome {props.name}</p>
    </>
  );
};

export default function App() {
  const name = "Rakesh";
  return <Greet name={name} />;
}
```

Here as we are working with typescript we do need to mention the types of props and Imported the `<Greet/>` component.

## Understanding JSX

JSX allows developers to write HTML-like code within JavaScript, making it easier to visualize and define UI components.

## JSX vs. HTML

While JSX resembles HTML syntax, it's important to note that JSX is not HTML. JSX gets transformed into JavaScript objects before being rendered by the browser.

## JSX Expressions

JSX expressions can be embedded within curly braces `{}` to evaluate JavaScript expressions and variables within JSX code. In the provided code snippet, we enclosed the `name` variable in curly brackets within the JSX expression `<p>Welcome {props.name}</p>`. This allows React to interpret `props.name` as a JavaScript expression and dynamically render its value within the paragraph element.
