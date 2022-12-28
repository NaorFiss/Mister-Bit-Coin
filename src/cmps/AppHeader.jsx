import { NavLink, withRouter } from 'react-router-dom'


function _AppHeader(props) {

    function onBack() {
        props.history.goBack()
    }
    return (
        <header className="app-header flex space-between align-center">
            <h1 className="logo">Mister-BitCoin</h1>
            <section className='back'>
                <button onClick={onBack}>Back</button>
            </section>
            <nav>
                <NavLink to="/" >Home</NavLink>
                <NavLink exact to="/contact" >Contact List</NavLink>
            </nav>
        </header>
    )
}


export const AppHeader = withRouter(_AppHeader)