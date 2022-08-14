import { Visibility } from '@material-ui/icons'
import styled from 'styled-components'
import { boxShadow } from './FeaturedInfo'

const Container = styled.div`
    flex: 1;
    padding: 20px;
    margin-right: 20px;
    ${boxShadow}
`
const Title = styled.span`
    font-size: 22px;
    font-weight: 600;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`
const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0;
`
const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`
const User = styled.div`
    display: flex;
    flex-direction: column;
`
const Username = styled.span`
    font-weight: 600;
`
const UserTitle = styled.span`
    font-weight: 300;
`
const Button = styled.button`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 8px;
    padding: 7px 14px;
    cursor: pointer;
    background-color: #eeeef7;
    color: #555;
`

const ListUser = ({ img, username, title }) => {
    return (
        <ListItem>
            <Image src={img} />
            <User>
                <Username>{username}</Username>
                <UserTitle>{title}</UserTitle>
            </User>
            <Button>
                <Visibility
                    style={{
                        fontSize: '16px',
                        marginRight: '5px'
                    }}
                />{' '}
                Display
            </Button>
        </ListItem>
    )
}

export default function WidgetSm() {
    return (
        <Container>
            <Title>New Join Members</Title>
            <List>
                <ListUser
                    img='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
                    username='Dani Maulana'
                    title='CEO'
                />
                <ListUser
                    img='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
                    username='Dani Maulana'
                    title='CEO'
                />
                <ListUser
                    img='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
                    username='Dani Maulana'
                    title='CEO'
                />
                <ListUser
                    img='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
                    username='Dani Maulana'
                    title='CEO'
                />
                <ListUser
                    img='https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500'
                    username='Dani Maulana'
                    title='CEO'
                />
            </List>
        </Container>
    )
}
