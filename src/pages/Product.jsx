import styled from 'styled-components'
import Select from 'react-select'
import Charts from '../components/Charts'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { boxShadow } from '../components/FeaturedInfo'
import { productData } from '../dummyData'
import { CloudUpload } from '@material-ui/icons'

const Container = styled.div`
    width: 100%;
`
const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Title = styled.h3`
    font-size: 30px;
`
const TitleButton = styled.button`
    border: none;
    width: 80px;
    padding: 5px;
    background-color: teal;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
`
const Top = styled.div`
    display: flex;
`

const ChartsContainer = styled.div`
    flex: 1;
    margin: 20px;
`
const TopInfo = styled.div`
    flex: 1;
    margin: 20px;
    padding: 10px 20px;
    ${boxShadow}
`
const TopInfoHeader = styled.div`
    display: flex;
    align-items: center;
`
const TopImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
`
const TopTitle = styled.span`
    font-weight: 600;
    font-size: 20px;
`
const TopList = styled.div`
    margin-top: 15px;
`
const TopListItem = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
`
const TopListItemTitle = styled.span`
    font-weight: 600;
    font-size: 16px;
`
const TopListItemValue = styled.span`
    font-weight: 300;
    font-size: 16px;
`
const ProductForm = styled.form`
    display: flex;
    margin: 20px;
    padding: 10px;
    ${boxShadow}
`
const FormTitle = styled.h3`
    font-weight: 600;
    color: #555;
    font-size: 20px;
    margin-bottom: 10px;
`
const FormSubTitle = styled.h4`
    font-weight: 300;
    color: #555;
    font-size: 16px;
    margin-bottom: 5px;
`
const Hr = styled.hr`
    margin-bottom: 20px;
    color: #555;
`
const FormInputContainer = styled.div`
    flex: 1;
    padding: 10px;
`
const FormInput = styled.div`
    &:not(:last-child) {
        margin-bottom: 20px;
    }
`
const FormInputLabel = styled.label`
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 20px;
    color: #333;
`
const FormImageContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
`
const FormImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 5px;
    margin-right: 10px;
`
const ImageUpload = styled.div``
const FormImageLabel = styled.label``
const FormImagInput = styled.input``
const FormButton = styled.button`
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
    background-color: darkblue;
    color: white;
    font-weight: 600;
    width: 150px;
    margin-top: 10px;
`
export default function Product() {
    const [inStock, setInStock] = useState('no')
    const [active, setActive] = useState('no')
    return (
        <Container>
            <TitleContainer>
                <Title>Product</Title>
                <Link to={`/new_product`}>
                    <TitleButton>Create</TitleButton>
                </Link>
            </TitleContainer>
            <Top>
                <ChartsContainer>
                    <Charts
                        title='Sales Performance'
                        data={productData}
                        grid
                        dataKeyX='name'
                        dataKeyLine='sales'
                    />
                </ChartsContainer>
                <TopInfo>
                    <TopInfoHeader>
                        <TopImage
                            src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                            alt='not found'
                        />
                        <TopTitle>Apple Watch</TopTitle>
                    </TopInfoHeader>
                    <TopList>
                        <TopListItem>
                            <TopListItemTitle>id :</TopListItemTitle>
                            <TopListItemValue>123</TopListItemValue>
                        </TopListItem>
                        <TopListItem>
                            <TopListItemTitle>sales :</TopListItemTitle>
                            <TopListItemValue>345</TopListItemValue>
                        </TopListItem>
                        <TopListItem>
                            <TopListItemTitle>active :</TopListItemTitle>
                            <TopListItemValue>yes</TopListItemValue>
                        </TopListItem>
                        <TopListItem>
                            <TopListItemTitle>in stock :</TopListItemTitle>
                            <TopListItemValue>no</TopListItemValue>
                        </TopListItem>
                    </TopList>
                </TopInfo>
            </Top>

            <ProductForm>
                <FormInputContainer>
                    <FormTitle>Product Name</FormTitle>
                    <FormSubTitle>Apple Watch</FormSubTitle>
                    <Hr />
                    <FormInput>
                        <FormInputLabel>In Stock</FormInputLabel>
                        <Select
                            onChange={(e) => setInStock(e.value)}
                            options={[
                                {
                                    value: 'yes',
                                    label: 'yes'
                                },
                                {
                                    value: 'no',
                                    label: 'no'
                                }
                            ]}
                        />
                    </FormInput>
                    <FormInput>
                        <FormInputLabel>Active</FormInputLabel>
                        <Select
                            onChange={(e) => setActive(e.value)}
                            options={[
                                {
                                    value: 'yes',
                                    label: 'yes'
                                },
                                {
                                    value: 'no',
                                    label: 'no'
                                }
                            ]}
                        />
                    </FormInput>
                </FormInputContainer>
                <FormImageContainer>
                    <ImageUpload>
                        <FormImage
                            src='https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                            alt='not found'
                        />
                        <FormImageLabel>
                            <CloudUpload />
                        </FormImageLabel>
                        <FormImagInput type='file' hidden />
                    </ImageUpload>
                    <FormButton type='submit'>Submit</FormButton>
                </FormImageContainer>
            </ProductForm>
        </Container>
    )
}
