import React from "react";
import List from "./Pembahasan/List";
// import Conditional from "./Pembahasan/Conditional";
// import Variable from "./Pembahasan/Variable";

export default class Rendering extends React.Component {
    render(){
        return (
            <div>
                {/* <Variable /> */}
                {/* <Conditional /> */}
                <List />
            </div>
        )
    }
}