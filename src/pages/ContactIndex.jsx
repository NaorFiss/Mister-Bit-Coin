import { Component } from 'react'
import { Link } from 'react-router-dom'
import { ContactFilter } from '../cmps/ContactFilter.jsx'
import { ContactList } from '../cmps/ContactList.jsx'
import { contactService } from '../services/contact.service.js'

export class ContactIndex extends Component {

    state = {
        contacts: null,
        filterBy: {
            name: '',
            email: '',
            phone: ''
        }
    }

    componentDidMount() {
        this.loadContacts()
    }

    loadContacts = async () => {
        try {
            const contacts = await contactService.getContacts(this.state.filterBy)
            this.setState({ contacts })
        } catch (err) {
            console.log('err:', err)
        }
    }


    onRemoveContact = async (contactId) => {
        try {
            await contactService.deleteContact(contactId)
            this.setState(({ contacts }) => ({
                contacts: contacts.filter(contact => contact._id !== contactId)
            }))
        } catch (err) {
            console.log('err:', err)
        }
    }

    onChangeFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadContacts)
    }

    render() {
        const { contacts, filterBy } = this.state
        if (!contacts) return <div>Loading...</div>
        return (
            <section className='contact-index'>
                <ContactFilter onChangeFilter={this.onChangeFilter} filterBy={filterBy} />
                <Link to='/Contact/edit'>Add Contact</Link>
                <ContactList onRemoveContact={this.onRemoveContact} contacts={contacts} />
            </section>
        )
    }
}
