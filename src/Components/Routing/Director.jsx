import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import About from './About'
import Home from './Home'
import Nav from './Nav'
import NotFound from './NotFound'
import Product from './Product'
import User from './User'

const Director=()=>{
    return(
        <>
        <h1>Welcome to my website </h1>
            <Router>
            <Nav/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                  { /* <Route path="/nav" component={Nav}/>*/}
                  
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/product">
                        <Product/>
                    </Route>
                    <Route path="/user/:id">
                        <User/>
                    </Route>
                    <Route>
                        <NotFound/>
                    </Route>
                </Switch>
            </Router>

        </>
    )


}

export default Director;