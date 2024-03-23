import './Header.css'



const Header = () => {
    return(
        <header>
        <nav className='containerNav'>
            <img src="../img/cat1.png" alt="gato de cabeça pra baixo" />
                    <span>
                        <a href="#">LOGIN</a>
                        <a href="#">REGISTRAR</a>
            
                   </span>
        </nav>
    </header>
    )
}

export default Header