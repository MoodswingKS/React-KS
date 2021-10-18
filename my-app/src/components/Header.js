// import header__img from "./assets/images/msheader2.png";
// import header__img__lower from "./assets/images/headerimglower.png"


const Header = () => {
    return (
        <div className="header">
            {/* <img 
                class="header__img" 
                src={header__img} 
                alt="header__img"    
            /> */}
            <div className="header__title">
                <p>KASPER SIMONS</p>
            </div>
{/* 
            <img 
                className="header__img-lower" 
                src={header__img__lower}
                alt="header_img-lower" 
            /> */}
        </div>
    )
}

export default Header