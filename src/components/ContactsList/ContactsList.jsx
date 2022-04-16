import React from "react";
import { ContactsItem } from "components/ContactsItem/ContactsItem";

export const ContactsList = ({data, actions}) => {

   return <ul>
        {
            data.contacts.map(item => {
                if(item.name.toLowerCase().includes(data.filter)) {
                    return (
                        <ContactsItem key={item.id} 
                            id={item.id} 
                            name={item.name}
                            number={item.number}
                            actionOnClick={actions}
                        />
                    )
                } else {
                  return ''
                }
                
            })
        }
    </ul>
}