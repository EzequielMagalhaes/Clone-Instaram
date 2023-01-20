import { doc } from 'firebase/firestore';
import {firebaseAuth} from './firebase.js';
import {useEffect,useState} from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function Header(props){
    useEffect(()=>{
        props.setUser();
    },[])

    function criarConta(e){
        //e.preventDefaut();
        let email = document.getElementById('email-cadastro').value;
        let username = document.getElementById('username-cadastro').value;
        let senha = document.getElementById('senha-cadastro').value;
    //Criar conta firebase;
        const auth = getAuth();    
        createUserWithEmailAndPassword(auth,email,senha)
        .then((authUser)=>{
            authUser.user.updateProfile({
                displayName:username
            })
            alert('Conta criada com sucesso.');
            let modal = document.querySelector('.modalCriarConta');
            modal.style.display = 'none';
        }).catch((error)=>{
            alert(error.message);
        })
    }

    function abrirModalCriarConta(e){
        let modal = document.querySelector('.modalCriarConta');
        modal.style.display = 'block';
        //e.preventDefaut();
    }

    function fecharModalCriar(){
        let modal = document.querySelector('.modalCriarConta');
        modal.style.display = 'none';
    }

    return(
        <div className="header">
            <div className='modalCriarConta'>

                <div className='formCriarConta'>
                    <div onClick={()=>fecharModalCriar()} className='close-modal-criar'>X</div>
                    <h2>Criar conta</h2>
                    <form onSubmit={(e)=>criarConta(e)}>
                        <input id='username-cadastro' type='text' placeholder='Seu nome de usuário'/>
                        <input id='email-cadastro' type='text' placeholder='Email'/>
                        <input id='senha-cadastro' type='password' placeholder='Senha'/>
                        <input type='submit' value='Criar conta'/>
                    </form>
                </div>

            </div>

            <div className='center'>

                <div className="header__logo">
                    <a href=""><img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"/></a>
                </div>
            { // validação do usuário, condicional caso o usuário estaja logado;
                (props.user)? // if
                <div className='header__logadoInfo'>
                    <span>Olá, <b>{props.user}</b></span>
                    <a href='#'>Criar publicação</a>
                </div> // userState - L.8
                : // else //
                <div className="header__loginForm">
                    <form>
                        <input type="text" placeholder="Nome de usuário ou email"></input>
                        <input type="password" placeholder='Senha'></input>
                        <input type="submit" name='acao' value='Entrar'></input>
                    </form>

                    <div className='btn__criarConta'>
                        <a onClick={(e)=>abrirModalCriarConta(e)} href='#'>Cadastre-se</a>
                    </div>
                </div>
            }
            </div>
        </div>
    )
}
export default Header;