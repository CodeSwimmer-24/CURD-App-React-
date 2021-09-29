import React, { useEffect, useState } from 'react'
import "../css/UserDetails.css";
import UserForm from './UserForm';
import firebaseDb from "../firebase";
import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';

function UserDetails() {

    const [contactObjects, setContactObjects] = useState({});
    const [currentId , setCurrentId] = useState('');

    useEffect (() => {
    firebaseDb.child("contacts").on('value',snapshot => {
        if(snapshot.val() !=null)
        setContactObjects({
            ...snapshot.val()
        })
        else setContactObjects({})
    })
    },[])

    const addOrEdit = obj => {
        if(currentId == "")
             firebaseDb.child('contacts').push(
              obj, err=> {
            if(err)console.log(err)
            else setCurrentId('')
        }
    )
    else 
    firebaseDb.child(`contacts/${currentId}`).set(
        obj, err=> {
            if(err)console.log(err) 
            else setCurrentId('')
        }
    )
    }

    const ondelete = key => {
        if(window.confirm("Are you sure you want to delete the Record? ")){
            firebaseDb.child(`contacts/${key}`).remove( 
                err=> {
                    if(err)console.log(err) 
                    else setCurrentId('')
                }
            )
        }
    }

    return (
        <div className="userDetails">
            <div className="container" >
                <h1>Google User Regisyter</h1>
            </div>
            <div className="row">
                <div className="form">
                    <UserForm {...({addOrEdit,currentId,contactObjects})}/>
                </div>
                <div className="table">
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Full Name</th>
                                    <th>Mobile</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                </tr>
                                </thead>
                            <tbody>
                                {
                                    Object.keys(contactObjects).map(id => {
                                       return <tr key={id}>
                                         <td>{contactObjects[id].fullName}</td>
                                         <td>{contactObjects[id].mobile}</td>
                                         <td>{contactObjects[id].email}</td>
                                         <td>
                                             <a onClick={() => {setCurrentId(id)}}><AiFillEdit /></a>
                                         </td>
                                         <td>
                                             <a onClick={() => {ondelete(id)}}><AiFillDelete /></a>
                                         </td>
                                         </tr>
                                    })
                                }
                            </tbody>
                            </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetails
