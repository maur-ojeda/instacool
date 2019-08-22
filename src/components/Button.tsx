import * as React from 'react'
const  style = {
    backgroundColor:'#00D1B2',
     border:'0px',
     borderRadius: '4px',
     color: '#fff',
     marginBotton: '10px',
     padding: '10px 15px',
     display: 'block',
     width: '100%'

}
 
export default class Button extends React.Component {
    public render(){
        return(
                <button {...this.props} style={style} />
        )
    }
}