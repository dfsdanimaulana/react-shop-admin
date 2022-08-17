import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// components
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'

// pages
import Home from './pages/Home'
import User from './pages/User'
import UserList from './pages/UserList'
import NewUser from './pages/NewUser'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import NewProduct from './pages/NewProduct'

// styles
const Container = styled.div``
const Wrapper = styled.div`
    display: flex;
    margin-top: 10px;
`
const Menu = styled.div`
    flex: 4;
    padding:20px;
`

export default function App() {
    return (
        <Container>
            <Router>
                <Topbar />
                <Wrapper>
                    <Sidebar />
                    <Menu>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/user/:userId' component={User} />
                            <Route path='/users' component={UserList} />
                            <Route path='/new_user' component={NewUser} />
                            <Route
                                path='/product/:productId'
                                component={Product}
                            />
                            <Route path='/products' component={ProductList} />
                            <Route path='/new_product' component={NewProduct} />
                        </Switch>
                    </Menu>
                </Wrapper>
            </Router>
        </Container>
    )
}
