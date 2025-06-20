
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import clsx from "clsx";
import css from "./ContactList.module.css";
import { useAppSelector } from "../../hooks/redux";
import { type Contact } from "../../types/redux";

interface Props {
    contacts: Contact[];
}

export default function ContactList({contacts}: Props) {
    const filteredContacts = useAppSelector(selectFilteredContacts);

    return (<div className={clsx(css.wrapper)}>
        <ul className={clsx(css.list)}>
        {filteredContacts.map(contact => (<li className={clsx(css.item)} key={contact.id}>
            <Contact contact={contact} />
        </li>))}
    </ul>
        </div>)
};