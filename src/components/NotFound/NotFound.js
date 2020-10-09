import React from 'react'
import {Link} from 'react-router-dom'

export default function NotFound() {
    return (
        <div>
            <h1>Il n'y a rien ici</h1>
            <Link to="/">
                <button className="home__RegistrationButton">Retour à l'accueil</button>
            </Link>
        </div>
    )
}
