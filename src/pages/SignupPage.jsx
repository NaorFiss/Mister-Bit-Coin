import { Component } from 'react'
import { NavLink, Route } from "react-router-dom"

import { bitCoinService } from '../services/bitCoin.service.js'
import { userService } from '../services/user.service.js'

export class SignupPage extends Component {

    state = {
        userName: ""
    }


    componentDidMount() {

    }

    onSignupUser = (ev) => {
        ev.preventDefault()
        userService.signup(this.state.userName)
        this.props.history.push('/home')
    }

    handleChange = ({ target }) => {
        let value = target.value
        this.setState({ userName: value })

    }


    render() {

        return (
            <section className='Sign-Up'>
                <h1>Please Enter Your Name</h1>
                <form onSubmit={this.onSignupUser}>
                    <label htmlFor="name"></label>
                    <input onChange={this.handleChange} value={this.state.userName} type="text" name="name" id="name" />

                    <button>Sign up</button>
                </form>
            </section>
        )
    }
}
