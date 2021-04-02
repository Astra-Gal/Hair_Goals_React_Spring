import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import JSONPretty from 'react-json-pretty'

const Profile = () => {
    const { user, isAuthenticated } = useAuth0()

    return isAuthenticated && <p>Hi, {user.given_name}!</p>
}

export default Profile
