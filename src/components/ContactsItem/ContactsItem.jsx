import React from "react";
import { ContactActionBtn, ContactItem, ContactNumber  } from 'components/ContactsItem/ContactsItem.styled';


export const ContactsItem = ({ id, name, number, actionOnClick }) => {
    return (
        <ContactItem  key={id} id={id}>
            {name}:<ContactNumber>{number}</ContactNumber>
            <ContactActionBtn 
                type="button" 
                onClick={() => {
                    actionOnClick(id)
                }}>
                Delete
            </ContactActionBtn>
        </ContactItem >
    )
}