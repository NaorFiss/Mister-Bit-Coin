import { Link } from "react-router-dom"

export function ContactPreview({ contact, onSelectContactId, onRemoveContact }) {


    const previewStyle = { backgroundImage: `url(https://robohash.org/set_set4/${contact._id})` }
    return (
        <section style={previewStyle} className="contact-preview">
            <Link to={`/contact/${contact._id}`} className="info">
                <h2>{contact.name}</h2>
            </Link>
            <section className="actions">
                <button onClick={() => onRemoveContact(contact._id)}>X</button>
                <Link to={`/contact/edit/${contact._id}`}>Edit</Link>
            </section>
        </section >
    )
}
