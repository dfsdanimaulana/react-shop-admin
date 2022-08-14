import styled from 'styled-components'
import { boxShadow } from './FeaturedInfo'

const Container = styled.div`
    flex: 2;
    padding: 20px;
    ${boxShadow}
`
const Title = styled.h3`
    font-size: 22px;
    font-weight: 600;
`
const Table = styled.table`
    width: 100%;
    border-spacing: 20px;
`
const TableRow = styled.tr``
const TableCell = styled.td`
    ${(props) => {
        if (props.type === 'user') {
            return `
                display: flex;
                align-items: center;
                font-weight: 600;
            `
        } else if (props.type === 'date' || props.type === 'amount') {
            return `
                font-weight: 300;
            `
        }
    }}
`
const TableHeader = styled.th`
    text-align: left;
`
const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
`
const User = styled.span``
const Btn = styled.button`
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.color};
    padding: 5px 7px;
    border: none;
    border-radius: 8px;
`

const TableList = ({ img, name, date, amount, status }) => {
    const Button = ({ type }) => {
        let bgColor
        let color

        switch (type) {
            case 'Approved':
                bgColor = '#e5faf2'
                color = '#3bb077'
                break
            case 'Pending':
                bgColor = '#ebf1fe'
                color = '#2a7ade'
                break
            case 'Declined':
                bgColor = '#fff0f1'
                color = '#d95087'
                break
            default:
                bgColor = '#eeeef7'
                color = '#555'
                break
        }

        return (
            <Btn bgColor={bgColor} color={color}>
                {type}
            </Btn>
        )
    }
    return (
        <TableRow>
            <TableCell type='user'>
                <Image src={img} />
                <User>{name}</User>
            </TableCell>
            <TableCell type='date'>{date}</TableCell>
            <TableCell type='amount'>{amount}</TableCell>
            <TableCell>
                <Button type={status} />
            </TableCell>
        </TableRow>
    )
}

export default function WidgetLg() {
    return (
        <Container>
            <Title>Latest Transaction</Title>
            <Table>
                <TableRow>
                    <TableHeader>Customer</TableHeader>
                    <TableHeader>Date</TableHeader>
                    <TableHeader>Amount</TableHeader>
                    <TableHeader>Status</TableHeader>
                </TableRow>
                <TableList
                    img='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                    name='Dani Maulana'
                    date='2 Jun 2022'
                    amount='$100'
                    status='Approved'
                />
                <TableList
                    img='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                    name='Dewi Renata'
                    date='3 May 2022'
                    amount='$150'
                    status='Declined'
                />
                <TableList
                    img='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                    name='Feyza Latifa'
                    date='5 August 2022'
                    amount='$300'
                    status='Pending'
                />
                <TableList
                    img='https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                    name='Feyza Latifa'
                    date='5 August 2022'
                    amount='$300'
                    status='Pending'
                />
            </Table>
        </Container>
    )
}
