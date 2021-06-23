
import Director from "./Components/Routing/Director";

const App=()=> {
  const date = new date().toLocalTimeString();
  return (
    <div className="container">
      
      
      <h1>APP says the time is {date}</h1>
      {/* <MyFirstComponent/> */}
      {/* <MySecondComponent/> */}
      {/* <Standard/> */}
      {/* <MyFooter/> */}
      {/* <Parent/> */}
      {/* <PropWithDifferentTypes/> */}
      {/* <FirstContactCard/> */}
      {/* <EndContactCard/> */}
      {/* <Blog/> */}
      {/* <User/> */}
      {/* <Strap/> */}
      {/* <ClassClock/> */}
      {/* <ClockFunctional/> */}
      {/* <DifferentStates/> */}
      {/* <Counter/> */}
      {/* <UncontrolledInput/> */}
      {/* <ControlledInput/> */}
      {/* <LetsSearch/> */}
      {/* <HomePage/> */}
      {/* <SearchableList/> */}
      {/* <Clock/>
      <Counter/> */}
      {/* <Director/> */}
      {/* <Tesco/> */}
      <Director/>

      <Main/>


    </div>
  );
}

//ONLY ONE DEFAULT EXPORT PER FILE
export default App;