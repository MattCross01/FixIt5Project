// BODY JS
// ---------------------------------------------------------------------------

import React from "react";

function Body(props) {
    return <div className={`container${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

export default Body;