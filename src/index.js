import React from 'react';
import ReactDOM from 'react-dom';

//create a nested user element using React.createElement{h1,h2,h3 inside a div with class title}
const header = React.createElement(
    "div",{className:"Title",key:"Title"},
    [React.createElement("h1",{key:"h1"},"Created by using h1 tag"),
     React.createElement("h2",{key:"h2"},"Created by using h2 tag"),
     React.createElement("h3",{key:"h3"},"Created by using h3 tag"),
]);
ReactDOM.render(header,document.getElementById("root"))

//create same element using JSX
const header1 = (
    <div className='Title'>
        <h1>"This is created using JSX"</h1>
        <h2>"This is created using JSX"</h2>
        <h3>"This is created using JSX"</h3>
    </div>
);
ReactDOM.render(header1,document.getElementById("root2"))

//create a functional component of same element with JSX
const Header2 = () => {
    return(
    <div className='Title'>
        <h1>"This is a Functional component_1"</h1>
        <h2>"This is a Functional component_2"</h2>
        <h3>"This is a Functional component_3"</h3>
    </div>
    )
};
ReactDOM.render(<Header2/>,document.getElementById("root3"))

//pass attributes into the tag in JSX
const header3 = (
    <div className='Title'>
        <h1 style={{color:"gray"}}>"Represents heading-1 in JSX</h1>
        <h2 style={{color:"purple"}}>"Represents heading-2 in JSX</h2>
        <h3 style={{color:"blue"}}>"Represents heading-3 in JSX</h3>
    </div>
)
ReactDOM.render(header3,document.getElementById("root4"))

//Composition of component (Add a component inside another component)
const Header4 = () => {
    return(
        <h1> "added component inside another component" </h1>,
        <Header2/>
    )
}
ReactDOM.render(<Header2/>,document.getElementById("root5"))

//{TitleComponent}vs{<TitleComponent/>}vs{<TitleComponent><TitleComponent/>} in JSX
const TitleElement = () => {
    return <h2 style={{color:"pink"}}>This is title component</h2>;
};

const Header = () => {
    return(
        <div className="Title" key="title">
            <TitleElement/>
            <TitleElement></TitleElement>
        </div>
    );
};
ReactDOM.render(<Header/>,document.getElementById("root6"))



