import React, { useContext } from 'react'
import Header from '../Header'
import { authContext } from '../../contexts/AuthContexts'
import Hero from '../Hero'
import FeaturedProducts from '../FeaturedProducts'

const Homepage = () => {
    // STEP 3
    const { user } = useContext(authContext)

    return (
        <div >
            <Hero />
            <FeaturedProducts />
        </div>
    )
}

export default Homepage