import * as React from 'react'
import Footer from '../components/Footer'
   

const style = {
     backgroundColor:'#fff',
     border:'1px solid #ddd',
     marginBottom: '10px',
     padding: '10px 15px',
     
}

interface IPostProps {
    image: string
}

export default class Post extends React.Component<IPostProps> {
    public render(){
        const { image } = this.props
        return(
                <div style={style}>
                    <img src={ image } />

                    <div style={{ backgroundColor:'#eee', marginLeft: '-15px' ,marginBottom:'-10px', width:'calc(100% -30px)', display:'flex' }}>
    <Footer/>
                    </div>
                </div>
        )
    }
}