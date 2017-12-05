# Magic photo gallery

The purpose for building this photo gallery app is mainly for learning how to use ReactJS library. Things covered are:

- Event handling like button clicks.
- Data flow: how to manage state. Maybe use a library like Redux. 
- Fetch data from API and integrate part of data flow.
- Unit testing using Jest.
- Snapshot testing.
- Learn ES6 features
- Functional 'display' components vs classes

Built using `react-create-app`

# Learnings

Taking [Dan Abramov](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367) post about you might not need Redux a bit further.

In the above post it's about moving the logic for changing the state out of your component and into a reducer function. The object returned is passed into `.setState()` to update the component. I've taken this a step further so that state is completely removed from the component using a custom `connect()` high order function. This has help better my understanding of the flow of data in a React app.