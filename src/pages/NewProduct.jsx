import { useState } from 'react'
import Select from 'react-select'
import styled from 'styled-components'

const Container = styled.div``
const Title = styled.h1`
    margin-bottom: 30px;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const FormInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    margin-right: 20px;
`
const Input = styled.input`
    &,
    &:focus {
        width: 400px;
        border: 1px solid #ccc;
        border-radius: 5px;
        height: 30px;
        outline: none;
        padding: 0 10px;
    }
`
const Button = styled.button`
    width: 300px;
    margin-top: 20px;
    margin-left: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    height: 30px;
    outline: none;
    padding: 0 10px;
    cursor: pointer;
    color: #fff;
    background-color: #00a8ff;
    &:hover {
        background-color: #028ed3;
    }
`
const Label = styled.label`
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 14px;
    color: #a7a3a3;
`
const RadioContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`
const FormRadio = styled.div`
    width: 400px;
    height: 30px;
    display: flex;
    align-items: center;
    margin-right: 20px;
`
const Radio = styled.input`
    margin-right: 5px;
`
const RadioLabel = styled.label`
    margin-right: 20px;
    font-weight: 600;
    font-size: 14px;
    color: #555;
`
const SelectContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
`
const FormSelect = styled.span``

export default function NewProduct() {
    const [product, setProduct] = useState({
        name: '',
        stock: '',
        active: '',
        img_url: ''
    })
    const [activeStatus, setActiveStatus] = useState('no')
    const handleInputChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        const productData = {
            ...product,
            active: activeStatus
        }
        e.preventDefault()
        console.log(productData)
    }

    return (
        <Container>
            <Title>New product</Title>
            <Form onSubmit={handleSubmit}>
                <FormInput>
                    <Label htmlFor='img_url'>Image URL</Label>
                    <Input
                        type='file'
                        name='img_url'
                        id='img_url'
                        onChange={handleInputChange}
                    />
                </FormInput>
                <FormInput>
                    <Label htmlFor='name'>Name</Label>
                    <Input
                        type='text'
                        name='name'
                        id='name'
                        onChange={handleInputChange}
                    />
                </FormInput>
                <FormInput>
                    <Label htmlFor='stock'>Stock</Label>
                    <Input
                        type='number'
                        name='stock'
                        id='stock'
                        onChange={handleInputChange}
                    />
                </FormInput>
                <SelectContainer>
                    <FormSelect>
                        <Label htmlFor='active'>Active</Label>
                        <Select
                            onChange={(e) => {
                                setActiveStatus(e.value)
                            }}
                            options={[
                                { value: 'yes', label: 'Yes' },
                                { value: 'no', label: 'No' }
                            ]}
                        />
                    </FormSelect>
                </SelectContainer>
                <Button type='submit'>Create</Button>
            </Form>
        </Container>
    )
}
