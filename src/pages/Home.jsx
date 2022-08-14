import styled from 'styled-components'

// data
import { userData } from '../dummyData'

// components
import FeaturedInfo from '../components/FeaturedInfo'
import Charts from '../components/Charts'
import WidgetSm from '../components/WidgetSm'
import WidgetLg from '../components/WidgetLg'

const Container = styled.div``
const Widget = styled.div`
    display: flex;
    margin: 20px;
`

export default function Home() {
    return (
        <Container>
            <FeaturedInfo />
            <Charts
                title='User Analytics'
                data={userData}
                grid
                dataKeyX='name'
                dataKeyY='Active User'
                dataKeyLine='Active User'
            />
            <Widget>
                <WidgetSm />
                <WidgetLg />
            </Widget>
        </Container>
    )
}
