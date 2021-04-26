import React , { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const GamePage = React.lazy(()=> import('../views/Game/Game'))
const Menu = React.lazy(()=> import('../views/Menu/Menu'))

function Layout() {
    return (
        <>
        <Router>
            <Suspense fallback={<div className='d-flex justify-content-center'>Loading...</div>}>
                <Switch>
                    <Route exact path='/' component={Menu}  />
                    <Route exact path='/GamePage' component={GamePage}  />
                </Switch>
            </Suspense>

        </Router>
        </>
    )
}

export default Layout
