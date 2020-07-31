import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.styles.scss';
import {auth} from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import Cart from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from "reselect";


import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles'
import { signOutStart } from '../../redux/user/user.actions';

const Header = ({currentUser, hidden,signOutStart})=>{
    return(
       <HeaderContainer>
            <LogoContainer to ='/'>
                <Logo className='logo'/>
            </LogoContainer>
            
        <OptionsContainer >
            <OptionLink  to = '/shop'>
                SHOP
            </OptionLink>
            <OptionLink to = '/shop'>
                CONTACT
            </OptionLink>
           {
               currentUser?
               <OptionDiv onClick = {signOutStart}>SIGN OUT</OptionDiv>
               :
               <OptionLink  to='/signin'>SIGN IN</OptionLink>
           }
           <CartIcon/>
        </OptionsContainer>
        {
            hidden ?(null):(<Cart/>)   
        }
        </HeaderContainer>
    )
}

const mapStatetoProps = createStructuredSelector({

    currentUser: selectCurrentUser,
    hidden: selectCartHidden

}) 

const mapDispatchToProps = dispatch =>({

    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStatetoProps,mapDispatchToProps)(Header);