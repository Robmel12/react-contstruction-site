
import ResetScrollBar from "../utils/hooks/ResetScrollBar";
import { Curtain } from "../utils/components/Curtain";
import { useOutletContext } from "react-router-dom";

export const About = () => {
    ResetScrollBar();
    return(
<>
<Curtain context={useOutletContext().curtainProps}/>
<section data-scroll-section style={{backgroundColor: 'blue', zIndex: '1', display: 'block'}}>
    <h1>About</h1>
    </section>
    <section style={{height: '4000px', width:"100%"}}></section>
    </>
)}