import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish
} from '@material-ui/icons'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { boxShadow } from '../components/FeaturedInfo'
import { useState, useEffect } from 'react'

const Container = styled.div``
const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Title = styled.h3``
const TitleButton = styled.button`
    border: none;
    width: 80px;
    padding: 5px;
    background-color: teal;
    border-radius: 5px;
    cursor: pointer;
    color: #fff;
`
const UserContainer = styled.div`
    display: flex;
    margin-top: 20px;
`
const UserProfile = styled.div`
    padding: 20px;
    flex: 1;
    ${boxShadow}
`

const Top = styled.div`
    display: flex;
    align-items: center;
`
const TopTitle = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`
const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`
const Bottom = styled.div`
    margin-top: 20px;
`
const Name = styled.span`
    font-weight: 600;
`
const UserTitle = styled.span`
    font-weight: 300;
`
const UserInfoTitle = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: rgb(175, 170, 170);
`
const UserInfo = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0;
    color: #444;
`

const iconStyle = {
    fontSize: '14px !important'
}

const InfoTitle = styled.span`
    margin-left: 10px;
    font-weight: 600;
`

const FormUpdate = styled.form`
    flex: 2;
    ${boxShadow}
    margin-left: 20px;
    display: flex;
`

const FormTitle = styled.h3`
    font-weight: 600;
    margin-bottom: 20px;
`
const Left = styled.div`
    flex: 1;
    padding: 20px;
`
const Right = styled.div`
    flex: 1;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Fields = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const FormField = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
`
const Label = styled.label`
    font-size: 14px;
    margin-bottom: 5px;
    font-style: italic;
`
const Input = styled.input`
    &,
    &:focus {
        border: none;
        border-bottom: 1px solid gray;
        outline: none;
        padding: 10px 0;
        font-weight: 600;
    }
`
const FormImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 20px;
`
const ImageUpload = styled.div`
    flex: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
const UploadButton = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const FormButton = styled.button`
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;
    background-color: darkblue;
    color: white;
    font-weight: 600;
    width: 150px;
`

export default function User() {
    const { userId } = useParams()
    const [user, setUser] = useState({
        username: '',
        full_name: '',
        birthday: '',
        email: '',
        phone: '',
        address: '',
        img_url: '',
        job_title: ''
    })

    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    // const handleImageChange = (e) => {
    //     setUser({
    //         ...user,
    //         img_url: e.target.files[0]
    //     })
    // }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
    }

    useEffect(() => {
        setUser({
            username: 'dnm17_',
            full_name: 'Dani Maulana',
            birthday: '09.03.1999',
            email: 'danimaulana9f@gmail.com',
            phone: '+62 8232 3010 004',
            address: 'Karawang | IDN',
            img_url:
                'https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
            job_title: 'CEO'
        })
    }, [])

    return (
        <Container>
            <TitleContainer>
                <Title>Edit User</Title>
                <Link to={`/new_user`}>
                    <TitleButton>Create</TitleButton>
                </Link>
            </TitleContainer>
            <UserContainer>
                <UserProfile>
                    <Top>
                        <Image src={user.img_url} alt='not fond' />
                        <TopTitle>
                            <Name>{user.full_name}</Name>
                            <UserTitle>{user.job_title}</UserTitle>
                        </TopTitle>
                    </Top>
                    <Bottom>
                        <UserInfoTitle>Account Details</UserInfoTitle>
                        <UserInfo>
                            <PermIdentity style={iconStyle} />
                            <InfoTitle>{user.username}</InfoTitle>
                        </UserInfo>
                        <UserInfo>
                            <CalendarToday style={iconStyle} />
                            <InfoTitle>{user.birthday}</InfoTitle>
                        </UserInfo>
                        <UserInfoTitle>Contact Details</UserInfoTitle>
                        <UserInfo>
                            <PhoneAndroid style={iconStyle} />
                            <InfoTitle>{user.phone}</InfoTitle>
                        </UserInfo>
                        <UserInfo>
                            <MailOutline style={iconStyle} />
                            <InfoTitle>{user.email}</InfoTitle>
                        </UserInfo>
                        <UserInfo>
                            <LocationSearching style={iconStyle} />
                            <InfoTitle>{user.address}</InfoTitle>
                        </UserInfo>
                    </Bottom>
                </UserProfile>
                <FormUpdate onSubmit={handleSubmit}>
                    <Left>
                        <FormTitle>Edit</FormTitle>
                        <Fields>
                            <FormField>
                                <Label htmlFor='username'>Username</Label>
                                <Input
                                    onChange={handleInputChange}
                                    name='username'
                                    id='username'
                                    type='text'
                                    required
                                    placeholder={user.username}
                                    value={user.username}></Input>
                            </FormField>
                            <FormField>
                                <Label htmlFor='full_name'>Full Name</Label>
                                <Input
                                    onChange={handleInputChange}
                                    name='full_name'
                                    id='full_name'
                                    type='text'
                                    required
                                    placeholder={user.full_name}
                                    value={user.full_name}></Input>
                            </FormField>
                            <FormField>
                                <Label htmlFor='email'>Email</Label>
                                <Input
                                    onChange={handleInputChange}
                                    name='email'
                                    id='email'
                                    type='email'
                                    required
                                    placeholder={user.email}
                                    value={user.email}></Input>
                            </FormField>
                            <FormField>
                                <Label htmlFor='phone'>Phone</Label>
                                <Input
                                    onChange={handleInputChange}
                                    name='phone'
                                    id='phone'
                                    type='text'
                                    required
                                    placeholder={user.phone}
                                    value={user.phone}></Input>
                            </FormField>
                            <FormField>
                                <Label htmlFor='address'>Address</Label>
                                <Input
                                    onChange={handleInputChange}
                                    name='address'
                                    id='address'
                                    type='text'
                                    required
                                    placeholder={user.address}
                                    value={user.address}></Input>
                            </FormField>
                        </Fields>
                    </Left>
                    <Right>
                        <ImageUpload>
                            <FormImage src={user.img_url} alt='not found' />
                            <Label
                                style={{
                                    position: 'absolute',
                                    bottom: '50px',
                                    right: '-25px'
                                }}>
                                <Publish />
                            </Label>
                            {/* <Input
                                onChange={handleImageChange}
                                type='file'
                                name='img_url'
                                id='img_url'
                                accept='image/*'
                                required
                                hidden
                            /> */}
                        </ImageUpload>
                        <UploadButton>
                            <FormButton type='submit'>Update</FormButton>
                        </UploadButton>
                    </Right>
                </FormUpdate>
            </UserContainer>
        </Container>
    )
}
