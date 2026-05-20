import "./Header.css"
import heroImg from './assets/hero.png'

function Header(){
    return(
        <div>
           <logo><img src={heroImg} alt = "Hero Vita"/> </logo>
           <nav>
                <a href="/home">HOME</a>
                <a href="/contactos">CONTACTOS </a>
                </nav>
                <div classname="clear"></div>
        </div>
    )
}

export default Header