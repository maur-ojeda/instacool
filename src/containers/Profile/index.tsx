import * as React from 'react'
import Button from 'src/components/Button';
import Card from 'src/components/Center';
import ProfileImg from 'src/components/ProfileImg'


const style ={
    container:{ padding: '15px',},
    row: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBoton:   '30px' 
    }
}

export default class Profile extends React.Component {
    public render() {
      return (
          <div style={style.container}>
            <div style={style.row}>
                <ProfileImg/>
                <Button>Agregar</Button>
            </div>
            <div style={style.row}> 
                <Card> <img src="https://placekitten.com/g/130/130"/></Card>
                <Card> <img src="https://placekitten.com/g/130/130"/></Card>
                <Card> <img src="https://placekitten.com/g/130/130"/></Card>
                </div>

                <div style={style.row}> 
                <Card> <img src="https://placekitten.com/g/130/130"/></Card>
                <Card> <img src="https://placekitten.com/g/130/130"/></Card>
                <Card> <img src="https://placekitten.com/g/130/130"/></Card>
                </div>
        </div>
        )
    }
  }
  
  