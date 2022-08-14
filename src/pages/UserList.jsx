import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { DeleteOutline } from '@material-ui/icons'
import { DataGrid } from '@material-ui/data-grid'
import { userRows } from '../dummyData'

const Container = styled.div`
    width: 100%;
    height: 400px;
    margin: 20px;
`
const User = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`
const Image = styled.img`
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 50%;
`
const Name = styled.span`
    margin-left: 10px;
`
const Button = styled.button`
    border: none;
    border-radius: 8px;
    padding: 5px 15px;
    background-color: #3bb077;
    color: #e5faf2;
    cursor: pointer;
    margin-right: 20px;
`

export default function UserList() {
    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'username',
            headerName: 'User',
            width: 190,
            renderCell: (params) => {
                return (
                    <User>
                        <Image src={params.row.avatar} alt='Not found' />
                        <Name>{params.row.username}</Name>
                    </User>
                )
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            type: 'email',
            width: 200
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 160
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 160
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={'/user/' + params.row.id}>
                            <Button>Edit</Button>
                        </Link>
                        <DeleteOutline
                            style={{
                                cursor: 'pointer',
                                color: '#d95087'
                            }}
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                )
            }
        }
    ]
    return (
        <Container>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                checkboxSelection
                disableSelectionOnClick
            />
        </Container>
    )
}
