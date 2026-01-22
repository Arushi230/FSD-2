Experiment -3 Implement routing in SPA
To create navigation between multiple pages in a React application using React Router DOM and implement routing without page reload.

Learnings:-
Learned how to install and use react-router-dom

Learned about BrowserRouter, Routes, Route, and Link

Learned how to create multiple pages (Home, About, Contact) in React

Learned how routing works in a Single Page Application (SPA)

Learned how to navigate between pages without reloading the browser

Learned the difference between normal anchor tags and Link component

Learned how to organize components for routing in React

React Router DOM
React Router DOM is a library used in React applications to handle navigation between different pages without refreshing the browser. It helps in building Single Page Applications (SPA) with multiple views.

<img src="./Screenshots/home%20page.png" alt="Home Page" width="700" />
<img src="./Screenshots/about%20us%20page.png" alt="About Page" width="700" />
<img src="./Screenshots/contact%20us%20page.png" alt="Contact Page" width="700" />

Example:
When you open a React application using React Router:

The application loads only one HTML page

Clicking on Home, About, or Contact does not reload the page

Only the content component changes dynamically

Just like:

Gmail

Instagram

YouTube

How it works (simple flow):
Browser loads a single HTML file

React controls page navigation using JavaScript

React Router matches the URL path

Corresponding component is rendered

No full page reload occurs

In short:
React Router DOM enables smooth navigation in a React application by updating only the required components.
It improves performance and provides a fast, seamless user experience.

