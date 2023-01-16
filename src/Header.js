import {useEffect,useState} from 'react';

function Header(props){
    useEffect(()=>{
        props.setUser('Ezequiel');
    },[])


    return(
        <div className="header">
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
                        <a href='#'>Cadastre-se</a>
                    </div>
                </div>
            }
            </div>
        </div>
    )
}

export default Header;