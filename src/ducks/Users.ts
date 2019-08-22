import {Dispatch} from 'redux';
import {IServices} from '../services'
// import { auth } from 'firebase';

/*
 * Interfase para el inicio de sesión
 * disponibiliza los recursos de email y password a Login.tsx
*/
export interface ILogin {
    email: string,
    password: string,
}

export default function reducer( state = {}) {
    return state
}

/* TUNK DE LOGIN
 * exporta una constante que recibe el payload y entrega una 
 * función con los servicios extras definidos en services
 * inicia sesión con auth.signInWithEmailAndPassword que recibe email y pass 
 * retorna promesa  por lo que el thunk debe ser una función asincrona  (async - await)
 * se hace un destructuring de login para entregar  email y password
*/
export const login = ({ email, password }: ILogin) =>
    async(dispatch: Dispatch, getState: () => any, { auth }: IServices) => {
       await auth.signInWithEmailAndPassword( email, password )
       
    }
    
/* TUNK DE REGISTRO
 * exporta una constante que recibe el payload y entrega una 
 * función con los servicios extras definidos en services
 * inicia sesión con auth.signInWithEmailAndPassword que recibe email y pass 
 * retorna promesa  por lo que el thunk debe ser una función asincrona  (async - await)
 * se hace un destructuring de login para entregar  email y password
*/
 export const register = ({email, password}: ILogin ) =>
    async (dispatch: Dispatch, getState: () => any, { auth, db  }: IServices) => {
        const userCredential = await auth.createUserWithEmailAndPassword( email, password )
        const { user } = userCredential
        // si el usuario viene definido entrega uid sino undefined
        const id = user ? user.uid : undefined
        // desde db accede a la coleccion de usuarios, llamamos a doc , que si no le pasamos nada
        // le ingresa id unico, al pasarle el id se accede a la coleccion de ese usuario
        const doc = db.collection('users').doc(id)
        // se crea el doc  con el metodo de set que reemplaza todo el documento, no lo actualiza,
        // retorna una promesa
        await doc.set({ role: 'user' })
    } 




    
 