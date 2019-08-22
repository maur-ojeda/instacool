import * as React from 'react'
import { Link } from 'react-router-dom'

import {
    faNewspaper ,faUser 
} from '@fortawesome/free-solid-svg-icons'
import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'




const style = {
    borderBottom: 'solid 1px solid',
    marginBottom: '15px',
    padding: '10px 15px'
}
export default class Navbar extends React.Component {
    public render(){
        return(

            <div style={style}>
                <div style={{float:'left'}}><Link style={{color:'#555'}} to='/app/newsfeed'><FontAwesomeIcon icon={faNewspaper}/> Instacool</Link></div>
                <div style={{float:'right'}}><Link style={{color:'#555'}} to='/app/profile'><FontAwesomeIcon icon={faUser}/> Perfil</Link></div>
            </div>
            
            
        )
    }
}