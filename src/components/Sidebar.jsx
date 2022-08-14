import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report
} from '@material-ui/icons'

const Container = styled.div`
    flex: 1;
    height: calc(100vh - 50px);
    position: sticky;
    top: 50px;
`
const Wrapper = styled.div`
    padding: 20px;
    color: #555;
`
const Menu = styled.div`
    margin-bottom: 10px;
`
const Title = styled.h3`
    font-size: 20px;
    color: rgb(187, 186, 186);
`
const List = styled.ul`
    list-style: none;
    padding: 5px;
`
const Item = styled.li`
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 0 8px 8px 0;

    &:hover {
        background-color: #d9d8d8;
    }
`
const Text = styled.span``
const Icon = styled.span`
    margin-right: 10px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ListItem = ({ icon, text, to }) => {
    const [isHover, setIsHover] = useState(false)
    const location = useLocation()

    const handleMouseEnter = () => {
        setIsHover(true)
    }
    const handleMouseLeave = () => {
        setIsHover(false)
    }

    return (
        <NavLink
            to={to}
            style={{
                textDecoration: 'none',
                color: 'inherit'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <Item
                style={{
                    backgroundColor:
                        location.pathname === to || isHover
                            ? '#d9d8d8'
                            : 'transparent'
                }}>
                <Icon>{icon}</Icon>
                <Text>{text}</Text>
            </Item>
        </NavLink>
    )
}

export default function Sidebar() {
    return (
        <Container>
            <Wrapper>
                <Menu>
                    <Title>Dashboard</Title>
                    <List>
                        <ListItem icon={<LineStyle />} text='Home' to='/' />
                        <ListItem
                            icon={<Timeline />}
                            text='Analytics'
                            to='/analytics'
                        />
                        <ListItem
                            icon={<TrendingUp />}
                            text='Sales'
                            to='/sales'
                        />
                    </List>
                </Menu>
                <Menu>
                    <Title>Quick Menu</Title>
                    <List>
                        <ListItem
                            icon={<PermIdentity />}
                            text='Users'
                            to='/users'
                        />
                        <ListItem
                            icon={<Storefront />}
                            text='Products'
                            to='/products'
                        />
                        <ListItem
                            icon={<AttachMoney />}
                            text='Transactions'
                            to='/transactions'
                        />
                        <ListItem
                            icon={<BarChart />}
                            text='Reports'
                            to='/reports'
                        />
                    </List>
                </Menu>
                <Menu>
                    <Title>Notifications</Title>
                    <List>
                        <ListItem
                            icon={<MailOutline />}
                            text='Mail'
                            to='/mail'
                        />
                        <ListItem
                            icon={<DynamicFeed />}
                            text='Feedback'
                            to='/feedback'
                        />
                        <ListItem
                            icon={<ChatBubbleOutline />}
                            text='Messages'
                            to='/messages'
                        />
                    </List>
                </Menu>
                <Menu>
                    <Title>Staff</Title>
                    <List>
                        <ListItem
                            icon={<WorkOutline />}
                            text='Manage'
                            to='/manage'
                        />
                        <ListItem
                            icon={<Timeline />}
                            text='Analytics'
                            to='/staff_analytics'
                        />
                        <ListItem
                            icon={<Report />}
                            text='Reports'
                            to='/staff_reports'
                        />
                    </List>
                </Menu>
            </Wrapper>
        </Container>
    )
}
