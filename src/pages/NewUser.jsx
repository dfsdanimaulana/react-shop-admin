import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    padding: 20px;
`
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
const Select = styled.select`
    width: 400px;
    border: 1px solid #ccc;
    border-radius: 5px;
    height: 30px;
`
const SelectOption = styled.option``
const FormSelect = styled.span``

export default function NewUser() {
    const [user, setUser] = useState({
        username: '',
        full_name: '',
        birthday: '',
        email: '',
        phone: '',
        address: '',
        img_url: '',
        job_title: '',
        gender: ''
    })

    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
    }

    return (
        <Container>
            <Title>New User</Title>
            <Form onSubmit={handleSubmit}>
                <FormInput>
                    <Label htmlFor='username'>Username</Label>
                    <Input
                        type='text'
                        name='username'
                        id='username'
                        onChange={handleInputChange}
                    />
                </FormInput>
                <FormInput>
                    <Label htmlFor='full_name'>Full Name</Label>
                    <Input
                        type='text'
                        name='full_name'
                        id='full_name'
                        onChange={handleInputChange}
                    />
                </FormInput>
                <FormInput>
                    <Label htmlFor='birthday'>Birthday</Label>
                    <Input
                        type='date'
                        name='birthday'
                        id='birthday'
                        onChange={handleInputChange}
                    />
                </FormInput>
                <FormInput>
                    <Label htmlFor='email'>Email</Label>
                    <Input
                        type='email'
                        name='email'
                        id='email'
                        onChange={handleInputChange}
                    />
                </FormInput>
                <FormInput>
                    <Label htmlFor='phone'>Phone</Label>
                    <Input
                        type='text'
                        name='phone'
                        id='phone'
                        onChange={handleInputChange}
                    />
                </FormInput>
                <FormInput>
                    <Label htmlFor='address'>Address</Label>
                    <Input
                        type='text'
                        name='address'
                        id='address'
                        onChange={handleInputChange}
                    />
                </FormInput>
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
                    <Label htmlFor='job_title'>Job Title</Label>
                    <Input
                        type='text'
                        name='job_title'
                        id='job_title'
                        onChange={handleInputChange}
                    />
                </FormInput>
                <RadioContainer>
                    <Label>Gender</Label>
                    <FormRadio>
                        <Radio
                            type='radio'
                            name='gender'
                            id='male'
                            value='male'
                            defaultChecked
                        />
                        <RadioLabel htmlFor='male'>Male</RadioLabel>

                        <Radio
                            type='radio'
                            name='gender'
                            id='female'
                            value='female'
                        />
                        <RadioLabel htmlFor='female'>Female</RadioLabel>

                        <Radio
                            type='radio'
                            name='gender'
                            id='custom'
                            value='custom'
                        />
                        <RadioLabel htmlFor='custom'>Custom</RadioLabel>
                    </FormRadio>
                </RadioContainer>
                <SelectContainer>
                    <FormSelect>
                        <Label htmlFor='active'>Active</Label>
                        <Select name='active' id='active'>
                            <SelectOption value='yes'>Yes</SelectOption>
                            <SelectOption value='no'>No</SelectOption>
                        </Select>
                    </FormSelect>
                </SelectContainer>
                <Button type='submit'>Create</Button>
            </Form>
        </Container>
    )
}
