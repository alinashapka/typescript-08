import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

import clsx from "clsx";
import css from "./Contact.module.css";
import type { Contact } from "../../types/redux";
import { useAppDispatch } from "../../hooks/redux";

interface Props {
    contact: Contact;
}

export default function Contact({ contact }: Props) {
    console.log(contact);
    const dispatch = useAppDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(contact.id));
    }
    return (
            <div className={clsx(css.wrapper)}>
            <div className={clsx(css.subwrapper)}>
                <p>{contact.name}</p>
                <p>{contact.number}</p>
                </div>
            <button className={clsx(css.button)} onClick={handleDelete}>Delete</button>
            </div>
    );
};