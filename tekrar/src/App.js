import Counter from "./Counter";

function App() {
  //console.log(window);

  // const elif = document.getElementsByClassName('elif').addEventListener('click', function(){
  //   window.alert('butona basildi')
  // })

  return (
    <div className="App">
     <Counter/>
    </div>
  );
}

export default App;


// DOM :  The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web. The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

// JSX : JSX stands for JavaScript XML.
// JSX allows us to write HTML in React.
// JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.
// JSX stands for Javascript XML and it is a very useful tool for React developers. JSX is an extension of the JavaScript language which provides a way to structure component rendering using syntax similar to HTML. JSX gives us the ability to write HTML elements in Javascript and place them in the DOM by converting the HTML tags into React elements without the need for other methods like createElement() or appendChild(). This combination of Javascript and HTML leads to having more powerful applications with boosted performance.
// There's nothing like JSX - neither to JavaScript, nor to the browser. JSX is simply syntactic sugar for creating very specific JavaScript objects.

// component: Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. LEGO parcasi denebilir.

// state : The state is a built-in React object that is used to contain data or information about the component. A component’s state can change over time; whenever it changes, the component re-renders. state componente aittir.
// n other words, the State of a component is an object that holds some information that may change over the lifetime of the component.

// props: Props are arguments passed into React components.
// “Props” is a special keyword in React, which stands for properties and is being used for passing data from one component to another.

// But the important part here is that data with props are being passed in a uni-directional flow. (one way from parent to child). tek bir componente ait degildir.
// https://itnext.io/what-is-props-and-how-to-use-it-in-react-da307f500da0

// One-way Data Binding: ReactJS uses one-way data binding. 

// How does it work: So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM.
// https://medium.com/@alex_lobera/introduction-to-react-3000e9cbcd26