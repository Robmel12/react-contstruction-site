import { forwardRef } from "react"

export const Reveal = forwardRef(function Reveal(props, ref ) { 

    const {children, direction} = props;
   return (<> <div ref={ref} className={"reveal "+direction}>
        {children}
    </div>
    </>)
 }
 );