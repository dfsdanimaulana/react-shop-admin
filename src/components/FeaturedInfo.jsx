import styled from 'styled-components'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

export const boxShadow = () => {
    return `
    -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
    `
}
const Item = styled.div`
    flex: 1;
    margin: 0 20px;
    padding: 30px;
    border-radius: 8px;
    cursor: pointer;
    ${boxShadow()}
`
const Title = styled.span`
    font-size: 20px;
`
const MoneyContainer = styled.div`
    margin: 10px 0;
    display: flex;
    align-items: center;
`
const Money = styled.span`
    font-size: 30px;
    font-weight: 600;
`
const Rate = styled.span`
    display: flex;
    align-items: center;
    margin-left: 20px;
`
const Sub = styled.span`
    font-size: 15px;
    color: grey;
`

const iconStyle = (sign = '+') => {
    return {
        fontSize: '14px',
        marginLeft: '5px',
        color: sign === '-' ? 'red' : 'green'
    }
}

export default function FeaturedInfo() {
    return (
        <Container>
            <Item>
                <Title>Revenue</Title>
                <MoneyContainer>
                    <Money>$2.45</Money>
                    <Rate>
                        -11.4 <ArrowDownward style={iconStyle('-')} />
                    </Rate>
                </MoneyContainer>
                <Sub>Compared to last month</Sub>
            </Item>
            <Item>
                <Title>Sales</Title>
                <MoneyContainer>
                    <Money>$3.45</Money>
                    <Rate>
                        -14.4 <ArrowDownward style={iconStyle('-')} />
                    </Rate>
                </MoneyContainer>
                <Sub>Compared to last month</Sub>
            </Item>
            <Item>
                <Title>Cost</Title>
                <MoneyContainer>
                    <Money>$11.45</Money>
                    <Rate>
                        +2.4 <ArrowUpward style={iconStyle()} />
                    </Rate>
                </MoneyContainer>
                <Sub>Compared to last month</Sub>
            </Item>
        </Container>
    )
}
