const HamburgerButton = (props) => { 
    const {onClick, cross} = props;
        return(
            <>
            <div data-sticky onClick={onClick} className={cross? "hamburger-button-container active":"hamburger-button-container "}>
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div></div></>
        )
    }
    
    export default HamburgerButton;