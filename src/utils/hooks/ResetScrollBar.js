import { useEffect } from "react"
import { useOutletContext } from "react-router-dom"

export default function ResestScrollBar(){
    const {scroll} = useOutletContext()

   useEffect(()=>{
    scroll.destroy()
    scroll.init();
    console.log('resetscroll')
    return ()=>{
        scroll.destroy()
        console.log('destory!')
    }
   },[])

}