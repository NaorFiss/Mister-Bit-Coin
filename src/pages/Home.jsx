import { Component } from 'react'
import { NavLink, Route } from "react-router-dom"

import { bitCoinService } from '../services/bitCoin.service.js'
import { userService } from '../services/user.service.js'

export class Home extends Component {

    state = {
        user: null,
        rate: null
    }


    componentDidMount() {
        this.loadUser()
    }

    loadUser = async () => {
        const user = await userService.getUser()
        const rate = await bitCoinService.getRate()
        this.setState({ user, rate })
    }


    render() {

        const { user, rate } = this.state
        if (!user) return <div>Loading...</div>

        return (
            <section className='user-home'>
                <p className='user-title'>Hello {user.name}!!!</p>
                <section className="user-details flex space-between" >
                    <img src={user.url} alt="" />
                    <section className='user-coins'>
                        <h2>Your Coins: {user.coins}</h2>
                        <h2>BTC Rate: {rate}</h2>
                    </section>
                </section>
            </section >
        )
    }
}
