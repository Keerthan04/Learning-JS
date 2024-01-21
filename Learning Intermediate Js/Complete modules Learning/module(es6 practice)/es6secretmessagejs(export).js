const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}

const changeToFunkyColor = (domElement) => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
        
  domElement.style.background = `rgb(${r}, ${g}, ${b})`;
}

export { toggleHiddenElement, changeToFunkyColor };//exporting functions in es6 syntax direct(already defined functions)
//exporting with function define
/* dom-functions.js 
  export const toggleHiddenElements = (domElement) => {
    // logic omitted...
  }

  export const changeToFunkyColors = (domElement) => {
    // logic omitted...
  }
  */
