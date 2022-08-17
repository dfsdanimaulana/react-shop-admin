import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts'

// style
import styled from 'styled-components'
import { boxShadow } from './FeaturedInfo'

const Container = styled.div`
    padding: 10px;
    ${boxShadow()}
`
const Title = styled.h3`
    margin-bottom: 20px;
`

export default function Charts({
    title,
    data,
    dataKeyX,
    dataKeyY,
    dataKeyLine,
    grid
}) {
    return (
        <Container>
            <Title>{title}</Title>
            <ResponsiveContainer width='100%' aspect={4 / 1}>
                <LineChart data={data}>
                    {dataKeyX && <XAxis dataKey={dataKeyX} stroke='#5550bd' />}
                    {dataKeyY && <YAxis dataKey={dataKeyY} stroke='#5550bd' />}
                    {dataKeyLine && (
                        <Line
                            dataKey={dataKeyLine}
                            stroke='#5550bd'
                            type='monotone'
                        />
                    )}
                    <Tooltip />
                    <Legend />
                    {grid && (
                        <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />
                    )}
                </LineChart>
            </ResponsiveContainer>
        </Container>
    )
}
