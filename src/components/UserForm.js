import React, { useEffect, useState } from 'react'
import { TextareaAutosize, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import "../css/UserForm.css";

function UserForm({addOrEdit,currentId,contactObjects}) {

    const initialFieldUser = {
        fullName: "",
        mobile: "",
        email: "",
        address: "",
    }

    useEffect(() => {
        if(currentId == '')
        setUser({
            ...initialFieldUser
        })
         else 
        setUser({
        ...contactObjects[currentId]
        })
    },[currentId,contactObjects])

    const [user, setUser] = useState(initialFieldUser);

    let name,value;
    const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({...user,[name]:value});
    }

    const postData = (e) => {
        e.preventDefault();
        if(handleInput === 0) {
            console.log("Eror")
        } else 
        addOrEdit(user);
    }

    return (
        <div className="form">
            <h1>Register Form</h1>
            <div className="form__Container">
               
                <TextField value={user.fullName} onChange={handleInput} label="FullName" name="fullName" type="text" margin="normal" required variant="outlined" autoComplete="off"
                fullWidth />
                <div className="form__container-row">
                <TextField className="form-input" id="email" value={user.email} onChange={handleInput} label="Email" name="email" type="text" margin="normal" required variant="outlined" autoComplete="off"  />
                <TextField id="mobile" value={user.mobile} onChange={handleInput} label="Mobile.No" type="text" name="mobile" margin="normal" required variant="outlined" autoComplete="off"  />
                </div>
                <TextField id="address" value={user.address} onChange={handleInput} label="Address" type="text" name="address" margin="normal" required variant="outlined" autoComplete="off" fullWidth />
                <Button type="submit" id="submit" name="submit" fullWidth  variant="contained"
                color="primary"
                style={{ marginTop: "1rem" }}
                onClick={postData} >{currentId == "" ? "Save" : "Update"}</Button>
            </div>
        </div>
    )
}

export default UserForm
