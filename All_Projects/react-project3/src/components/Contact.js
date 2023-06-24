import React from "react"

/*
function Contact(props) {
    console.log(props)
    const cat_img = props.img
    const name = props.name
    const phone = props.phone
    const email = props.email

    return(
        <div className="contact-card">
            <img src={cat_img}/>
            <h3>{name}</h3>
            <div className="info-group">
                <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png" />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src="https://cdn-icons-png.flaticon.com/512/561/561188.png" />
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Contact
*/

//This is another way of doing it

export default function Contact({img, name, phone, email}) {
    return (
        <div className="contact-card">
            <img src={img}/>
            <h3>{name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{email}</p>
            </div>
        </div>
    )
}
