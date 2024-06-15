import React from 'react'
import { useState } from 'react'
// import Counter from './Counter';
// import FunctionalCounter from './FunctionalCounter';

function ConditionalComponent() {
    const [display, setDisplay] = useState(false);
    
    return display ? (
        <div>
            <h3>This is the Conditional Component</h3>
        </div>
    ) : (
        <div>
            <h3>Nothing to see here</h3>
        </div>
    );
    // if (display) {
    //     return (
    //         <div>
    //             <h3>This is the Conditional Component</h3>
    //             {/* <FunctionalCounter/> */}
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <h3>Nothing to see here</h3>
    //             {/* <Counter/> */}
    //         </div>
    //     )
    // }
    // let output;
    // if(display){
    //     output = <h3>This is the Conditional Component</h3>
    // } else {
    //     output = <h3>Nothing to see here</h3>
    // }
    // return (
    //     <div>
    //         {output}
    //     </div>
    // )
}

export default ConditionalComponent
