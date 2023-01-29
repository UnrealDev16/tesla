import React,{useState,createContext} from 'react'
import styled from 'styled-components';
import CancelIcon from '@mui/icons-material/Cancel';
export const HeaderContext = createContext();

function Header() {
    const [burgerStatus,setBurger] = useState(false)

    return (
        <Container>
            <a>
                <img src='/images/logo.svg'></img>
            </a>
            <Menu>
                <a href="#Model-S"> Model S </a>
                <a href="#Model-3"> Model 3 </a>
                <a href="#Model-X"> Model X </a>
                <a href="#Model-Y"> Model Y </a>
                <a href="#SR"> Solar Roof</a>
                <a href="#SP"> Solar Panels </a>
            </Menu>
            <RightMenu>
                <a href="#">Shop</a>
                <a href="#">Account</a>
                <a onClick={()=>setBurger(true)}>Menu</a>
            </RightMenu>
            
            <SideMenu show={burgerStatus}>
                <CloseWrapper>
                    <CustomClose onClick={()=>setBurger(false)}/>
                </CloseWrapper>
                <li><a href="#Model-S">Model S</a></li>
                <li><a href="#Model-3">Model 3</a></li>
                <li><a href="#Model-X">Model X</a></li>
                <li><a href="#Model-Y">Model Y</a></li>
                <li><a href="#SR">Solar Roof</a></li>
                <li><a href="#SP">Solar Panels</a></li>
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-In</a></li>
                <li><a href="#">Demo Drive</a></li>
                <li><a href="#">Insurance</a></li>
                <li><a href="#">Powerwall</a></li>
                <li><a href="#">Commercial Energy</a></li>
                <li><a href="#">Utilities</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Find Us</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Account</a></li>
            </SideMenu>

        </Container>
     );
}

export default Header;

const Container = styled.div`
    min-height: 60px;
    position: fixed;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content:space-between;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a{
        font-weight:600;
        padding: 0 10px;
        flex-wrap: nowrap;
    }

    @media(max-width: 768px){
        display:none;
    }

`

const RightMenu = styled.div`
    display: flex;
    align-center: center;
    a{
        font-weight:600;
        padding: 0 10px;
        margin-right: 10px;
        cursor:pointer;
}
`

const SideMenu = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    overflow-y:scroll;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? "translateX(0);" :'translateX(100%)'};
    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2);
        a{
            font-weight:600px;
        }
    }
`

const CustomClose = styled(CancelIcon)`
    cursor:pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;

`