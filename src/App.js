import React, { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";

// MiniOne
// import Greeting from "./components/miniOne/greeting";


// MiniTwo
// import About from "./components/miniTwo/about";
// import Header from "./components/miniTwo/header";
// import TextForm from "./components/miniTwo/textForm";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   useParams,
//   Routes,
// } from "react-router-dom";


// Redux - CAKE & ICECREAM
// import store from "./components/Redux/store";
// import CakeContainer from "./components/Redux/Cake/cakeContainer";
// import IcecreamContainer from "./components/Redux/Icecream/icecreamContainer";
// import HookCakeContainer from "./components/Redux/Cake/hookCakeContainer";


// COUNTER REDUX
// import store from "./components/Counter-Redux/store";
// import CounterContainer from "./components/Counter-Redux/counterContainer";


// FETCHAPI - REDUX
// import store from './components/FatchAPI-Redux/store';
// import ApiContainer from "./components/FatchAPI-Redux/apiContainer";


// DestructingProps&State
// import PassingProps from "./components/DestructuringPropsState/passingProps";
// import PassingPropsClass from "./components/DestructuringPropsState/passingPropsClass";


// EVENT Handling
// import EventExperiment from "./components/Event-Handling/eventExperiment";
// import EventExperimentClass from "./components/Event-Handling/eventExperimentClass";
// import EventBinding from "./components/Event-Handling/eventBinding";


// METHORD AS PROPS
// import ParentComponent from "./components/MethordAsProps/parentComponent";


// CONDITIONAL RENDERING
// import IfElseConditionRendering from "./components/Conditional-Rendering/ifElseConditionRendering";
// import ElementConditional from "./components/Conditional-Rendering/elementConditional";
// import TernaryCondition from "./components/Conditional-Rendering/ternaryCondition";


// LIST-RENDERING
// import ListRender from "./components/List-Rendering/listRender";


// STYLING REACT COMPONENT
// import StyleSheet from "./components/StyleReact-Component/styleSheet";
// import Inline from "./components/StyleReact-Component/Inline";


// BASIC OF FORM HANDLING
import FormValidation from "./components/Form-Handling/formValidation";



function App() {
  // const [color, setColor] = useState("green");
  // const [mode, setMode] = useState("light");

  // const toggleModes = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "black";
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //   }
  // };

  return (
    // <Provider store={store}>
    <div>
      {/* MINIONE  */}
      {/* <Greeting /> */}


      {/* MINITWO  */}
      {/* <Router>
        <Header title={"Text-Validation"} />
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/" element={<TextForm />} />
        </Routes>
      </Router> */}


      {/* Redux - CAKE & ICECREAM */}
      {/* <CakeContainer />
      <IcecreamContainer /> */}
      {/* <HookCakeContainer /> */}


      {/* COUNTER REDUX  */}
      {/* <CounterContainer /> */}


      {/* FETCHAPI - REDUX */}
      {/* <ApiContainer /> */}
      

            {/* Here to Tutorial Start  */}
{/* ------------------------------------------------------ */}

      {/* DESTRUCTURING PROPS AND STATE  */}
      {/* <PassingProps name="Vekariya Nayan" college="GLS University" /> */}
      {/* <PassingPropsClass  name="Vekariya Nayan" college="GLS University" /> */}


      {/* EVENT HANDLING  */}
      {/* <EventExperiment /> */}
      {/* <EventExperimentClass /> */}
      {/* <EventBinding name="Nayan Vekariya" /> */}


      {/* METHORD AS PROPS  */}  
      {/* <ParentComponent /> */}


      {/* CONDITIONAL RENDERING  */}
      {/* <IfElseConditionRendering /> */}
      {/* <ElementConditional /> */}
      {/* <TernaryCondition /> */}


      {/* LIST RENDERING */}
      {/* <ListRender /> */}


      {/* REACT STYLING COMPONENTS  */}
      {/* <StyleSheet container={true}/>
      <Inline/> */}


      {/* BASIC OF FORM HANDLING  */}
      <FormValidation />

    </div>
    // </Provider>
  );
}

export default App;
