import { forwardRef} from "react";



export const InView= forwardRef((props, ref)=>{
    const { children, IsInView, className=''} = props
    

      return ( <div  ref={ref} className={className} >{IsInView && children}</div>
      )

 })
 