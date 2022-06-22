const setTime = () => {
  //! Vanilla JS Element
  const jsElement = `
   <div>
      <h1>Javascript Element</h1>
      <input type="text" />
      <p>${new Date().toLocaleTimeString()}</p>            // sadece p yani child element guncellenmesine ragmen parentlarda guncelleniyor.
   </div>
`;

  document.querySelector('.container-1').innerHTML = jsElement;

  // //! React Element
  const reactElement = React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'React'),
    React.createElement(
      'div',                                                      //! reactta ise sadece p elemnti guncelleniyor. 
      null,
      React.createElement('input', { type: 'text' })
    ),
    React.createElement('p', null, new Date().toLocaleTimeString())
  );
  ReactDOM.render(reactElement, document.querySelector('.container-2'));
};

setInterval(setTime, 1000);
