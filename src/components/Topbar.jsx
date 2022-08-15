import styled from 'styled-components'
import { NotificationsNone, Settings, Language } from '@material-ui/icons'

// style
const Container = styled.div`
    width: 100%;
    padding: 20px 10px;
    background-color: #fff;
    position: sticky;
    top: 0;
    z-index: 999;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
`
const Wrapper = styled.div`
    width: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Left = styled.div``
const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.span`
    font-weight: bold;
    font-size: 30px;
    color: #6666c9;
    cursor: pointer;
`
const Icon = styled.div`
    position: relative;
    cursor: pointer;
    margin-right: 20px;
    color: #555;
    &:hover {
        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.1);
        }
    }
`
const Badge = styled.span`
    position: absolute;
    top: -7px;
    right: -7px;
    background-color: red;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    padding: 2px 4px;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Image = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
`

export default function Topbar() {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>ADMIN</Logo>
                </Left>
                <Right>
                    <Icon>
                        <NotificationsNone />
                        <Badge>0</Badge>
                    </Icon>
                    <Icon>
                        <Language />
                    </Icon>
                    <Icon>
                        <Settings />
                    </Icon>
                    <Image src='https://avatars.githubusercontent.com/u/76860942?v=4' />
                </Right>
            </Wrapper>
        </Container>
    )
}
