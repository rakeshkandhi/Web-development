# Hooks

Hooks are a feature introduced in React 16.8 that allow functional components to use state and other React features without writing a class.

## Introduction to Hooks

Hooks are functions that let you use React state and lifecycle features from functional components. They allow for code reuse and improved organization.

## useState

The `useState` hook is used to add state variables to functional components. It returns a stateful value and a function to update it, similar to `setState()` in class components.

## useEffect

The `useEffect` hook allows functional components to perform side effects, such as data fetching, subscriptions, or DOM manipulations, after rendering.

## useContext

The `useContext` hook allows functional components to consume values from React context, providing a way to pass data through the component tree without prop drilling.

## useReducer

The `useReducer` hook is an alternative to `useState` for managing complex state logic. It accepts a reducer function and an initial state, returning the current state and a dispatch function.
