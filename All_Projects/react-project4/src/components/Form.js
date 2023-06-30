import React from "react";

function Form () {
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: "", email: "", comments: ""}
    )
    //const [firstName, setFirstName] = React.useState("")
    //const [lastName, setLastName] = React.useState("")
    console.log(formData.firstName + " " + formData.lastName + " " + formData.email)
    console.log(formData.comments)


    function handleChange(event) {
        setFormData(prevFormData => {
            return (
                {
                    ...prevFormData,
                    [event.target.name]: event.target.value
                }
                //  The [event.target.name] uses the name of the form
                //  as the field of the object that is being set
            )
        })
    }
    /*
    function handleFirstNameChange (event) {
        setFirstName(event.target.value)
    }

    function handleLastNameChange(event)
    {
        setLastName(event.target.value)    
    }
    */
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="text"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea 
                value={formData.comments} 
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            />
        </form>
    )
}

export default Form