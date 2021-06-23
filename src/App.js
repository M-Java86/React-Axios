
import DataRequestExample from "./Components/Data-Request/DataRequest-Axios";

const App =()=> {
  const date = new Date().toLocaleTimeString();
  return (
    <div className="container">

      <h1>APPP says the time is {date}</h1>
      {/* <MyFirstComponent/> */}
      {/* <MySecondComponent/> */}
      {/* <MyMain/> */}
      {/* <Parent/> */}
      {/* <PropsWithDifferentTypes/> */}
      {/* <FirstContactCard/> */}
      {/* <Album/> */}
      {/* <ClassClock/> */}
      {/* <DifferentStates/> */}
      {/* <Counter/> */}
      {/* <UncontrolledInput/> */}
      {/* <ControlledInput/> */}
      {/* <SearchList/> */}
      {/* <FunctionClock/> */}
      {/* <Director/> */}
      <DataRequestExample/>


     
    </div>
  );
}

export default App;