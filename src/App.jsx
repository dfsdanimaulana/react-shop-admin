import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// pages
import Home from './pages/Home'
import UserList from './pages/UserList'
import User from './pages/User'

// components
import Topbar from './components/Topbar'
import Sidebar from './components/Sidebar'

// styles
const Container = styled.div``
const Wrapper = styled.div`
    display: flex;
    margin-top: 10px;
`
const Menu = styled.div`
    flex: 4;
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
                        </Switch>
                    </Menu>
                </Wrapper>
            </Router>
        </Container>
    )
}
