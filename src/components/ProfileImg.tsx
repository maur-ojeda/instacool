import * as React from 'react'

const style ={
    img: {
        borderRadius: '100%'
    }
}

export default class ProfileImg extends React.Component {
    public render() {
      return (
        <div>
            <img style={style.img} src="https://placekitten.com/g/100/100"/>
        </div>
        )
    }
  }
  
  