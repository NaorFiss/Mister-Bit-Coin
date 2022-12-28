import { Component } from 'react'
import { TransferFund } from '../cmps/TransferFund.jsx'
import { contactService } from '../services/contact.service.js'
import { userService } from '../services/user.service.js'

export class ContactDetails extends Component {

    state = {
        contact: null,
        user: null
    }

    componentDidMount() {
        this.loadContact()
        this.loadUser()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact()

        }
    }

    loadContact = async () => {
        const contact = await contactService.getContactById(this.props.match.params.id)
        this.setState({ contact })
    }

    loadUser = async () => {
        const user = await userService.getUser()
        this.setState({ user })
    }

    onBack = () => {
        this.props.history.push('/contact')
    }

    render() {
        const { contact, user } = this.state
        console.log("contact", contact)
        console.log("user", user)

        if (!contact || !user) return <div>Loading...</div>
        return (
            <section className='contact-details'>
                <section>
                    <h3>Name: {contact.name}</h3>
                </section>
                <section>
                    <h3>eMail: {contact.email}</h3>
                </section>
                <section>
                    <h3>Phone: {contact.phone}</h3>
                </section>
                <img src={`https://robohash.org/set_set4/${contact._id}`} alt="" />
                <button onClick={this.onBack}>Back</button>


                <TransferFund contact={contact} maxCoins={user.coins} />
            </section>

        )
    }
}
