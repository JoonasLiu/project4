// const Henkilo = (props) => {
//     return (
//         <>
//             <h2>{props.name}</h2>
//             <p>{props.whyHyva}</p>
//         </>
//     )
// }

// export default Henkilo

import React from 'react'
import { Heading } from './Heading'
import { HenkiloList } from './HenkiloList'

export const Home = () => {
    return (
        <>
            <Heading />
            <HenkiloList />
        </>
    )
}
