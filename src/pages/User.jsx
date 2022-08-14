import {
    CalendarToday,
    LocationSearching,
    MailOutline,
    PermIdentity,
    PhoneAndroid,
    Publish
} from '@material-ui/icons'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { boxShadow } from '../components/FeaturedInfo'

const Container = styled.div`
    padding: 20px;
`
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
    padding: 10px;
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
    fontSize: '16px !important'
}

const InfoTitle = styled.span`
    margin-left: 10px;
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
`
const Input = styled.input`
    &,
    &:focus {
        border: none;
        border-bottom: 1px solid gray;
        outline: none;
        padding: 10px;
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
    return (
        <Container>
            <TitleContainer>
                <Title>Edit User</Title>
                <TitleButton>Create</TitleButton>
            </TitleContainer>
            <UserContainer>
                <UserProfile>
                    <Top>
                        <Image
                            src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                            alt='not fond'
                        />
                        <TopTitle>
                            <Name>Dani Maulana</Name>
                            <UserTitle>CEO</UserTitle>
                        </TopTitle>
                    </Top>
                    <Bottom>
                        <UserInfoTitle>Account Details</UserInfoTitle>
                        <UserInfo>
                            <PermIdentity style={iconStyle} />
                            <InfoTitle>dnm17_</InfoTitle>
                        </UserInfo>
                        <UserInfo>
                            <CalendarToday style={iconStyle} />
                            <InfoTitle>09.03.1999</InfoTitle>
                        </UserInfo>
                        <UserInfoTitle>Contact Details</UserInfoTitle>
                        <UserInfo>
                            <PhoneAndroid style={iconStyle} />
                            <InfoTitle>+62 8232 3010 004</InfoTitle>
                        </UserInfo>
                        <UserInfo>
                            <MailOutline style={iconStyle} />
                            <InfoTitle>danimaulana9f@gmail.com</InfoTitle>
                        </UserInfo>
                        <UserInfo>
                            <LocationSearching style={iconStyle} />
                            <InfoTitle>Karawang | IDN</InfoTitle>
                        </UserInfo>
                    </Bottom>
                </UserProfile>
                <FormUpdate>
                    <Left>
                        <FormTitle>Edit</FormTitle>
                        <Fields>
                            <FormField>
                                <Label>Username</Label>
                                <Input placeholder='dnm17_'></Input>
                            </FormField>
                            <FormField>
                                <Label>Full Name</Label>
                                <Input placeholder='Dani Maulana'></Input>
                            </FormField>
                            <FormField>
                                <Label>Email</Label>
                                <Input placeholder='danimaulana9f@gmail.com'></Input>
                            </FormField>
                            <FormField>
                                <Label>Phone</Label>
                                <Input placeholder='+62 8232 3010 004'></Input>
                            </FormField>
                            <FormField>
                                <Label>Address</Label>
                                <Input placeholder='Karawang | IDN'></Input>
                            </FormField>
                        </Fields>
                    </Left>
                    <Right>
                        <ImageUpload>
                            <FormImage
                                src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                                alt='not found'
                            />
                            <Label
                                style={{
                                    position: 'absolute',
                                    bottom: '50px',
                                    right: '-25px'
                                }}>
                                <Publish />
                            </Label>
                        </ImageUpload>
                        <UploadButton>
                            <FormButton>Update</FormButton>
                        </UploadButton>
                    </Right>
                </FormUpdate>
            </UserContainer>
        </Container>
    )
}
