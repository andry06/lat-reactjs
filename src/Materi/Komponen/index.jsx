import React from "react";
import ClassComponent from "./pembahasan/ClassComponent";
import FunctionalComponent from "./pembahasan/FunctionalComponent";
import FunctionalComponent2 from "./pembahasan/FunctionalComponent2";

export default class Komponen extends React.Component {

    render(){
        return (
            <div>
                <ClassComponent nama = "Andri Suryono" />
                <FunctionalComponent nama = "Nurdin"/>  
                <FunctionalComponent2 nama = "Adelia"/>  
            </div>
        )
    }
}