import React, { useState } from 'react'
import Dashboard from './Dashboard';
import Mainbody from './Mainbody';

const Body = () => {
     const [child1Width, setChild1Width] = useState(240);
     const [child2Width, setChild2Width] = useState(900);
     const [margin, setMargin] = useState(0);

     const toggleWidth = () => {
       if (child1Width === 0) {
           setChild1Width(240);
           setChild2Width(900);
           setMargin(0);
       } else {
           setChild1Width(0);
           setChild2Width(1100);
           setMargin(-220);
       }
     };

     

  return (
    <div className="grid grid-cols-5">
      <div
        style={{ width: `${child1Width}px`, transition: "width 1s ease" }}
        className="hidden md:block"
      >
        <Dashboard width={child1Width} toggleWidth={toggleWidth} />
      </div>
      <div style={{ transition: "width 1s ease" }} className="rows-2">
        <Mainbody
          width={child2Width}
          margin={margin}
          toggleWidth={toggleWidth}
        />
      </div>
    </div>
  );
}

export default Body
