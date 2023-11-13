import React, {useState} from 'react'

import '../styles/ThemeButton.css'

const ThemeButton = () => {

    return (
        <span className="buttons" id="button">
           
            <span class="switch"></span>
        </span>
    )
}

export default ThemeButton;

// import React, { useState } from 'react';

// const ThemeButton = () => {
//   const [isHighlighted, setIsHighlighted] = useState(false);

//   const toggleClick = () => {
//     // Toggle the value of isHighlighted when the button is clicked
//     setIsHighlighted(!isHighlighted);
//   };

//   return (
//     <button
//       className={`button ${isHighlighted ? 'highlight' : ''}`}
//       onClick={toggleClick}
//     >
//       Click me
//     </button>
//   );
// };

// export default ThemeButton;
