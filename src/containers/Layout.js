import React , { Suspense,useContext } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MenuContext } from "../context/Menu/MenuContext";

const GamePage = React.lazy(()=> import('../views/Game/Game'))
const Menu = React.lazy(()=> import('../views/Menu/Menu'))

function Layout() {
    return (
        <>
        <Router>
            <Suspense fallback={<div className='d-flex justify-content-center'>Loading...</div>}>
                <Switch>

                    <Route exact path='/'>
                        <MenuContext>
                             <Menu/>
                        </MenuContext>
                    </Route>
                    <Route  path='/GamePage'>
                        <MenuContext>
                            <GamePage/>
                        </MenuContext>
                    </Route>
                    
                </Switch>
            </Suspense>

        </Router>
        </>
    )
}

export default Layout
