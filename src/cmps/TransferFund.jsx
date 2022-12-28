import React, { Component } from 'react'
import { userService } from '../services/user.service.js'

export class TransferFund extends Component {

    state = {
        amount: '',
        contact: '',
        maxCoins: ''
    }


    componentDidMount() {
        const { contact, maxCoins } = this.props
        console.log("this.props", this.props)
        this.setState({ contact: contact, maxCoins: maxCoins })
    }

    handleChange = ({ target }) => {
        let amount = target.value
        this.setState({ amount: amount })
    }

    onTransferCoins = (ev) => {
        ev.preventDefault()
        if (this.state.amount < this.state.maxCoins) {
            userService.addMove(this.state.contact, this.state.amount)
            this.setState(prevState => ({ maxCoins: prevState.maxCoins - this.state.amount }))
        }
    }

    render() {
        const { maxCoins, contact } = this.state
        console.log("maxCoins", maxCoins)
        console.log("contact", contact)
        return (
            <form className='transferFund' onSubmit={this.onTransferCoins}>

                <label htmlFor="amount">Amount:</label>
                <input ref={this.handleRef} onChange={this.handleChange} value={this.state.amount} type="number" name="amount" id="amount" />
                <button>Transfer</button>
                <p>left coins: {maxCoins}</p>
            </form>

        )
    }
}
