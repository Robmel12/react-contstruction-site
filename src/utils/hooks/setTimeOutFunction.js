export default function SetTimeOutFunction(obj){
    const {delay, ref} = obj;

   const timeOut= setTimeout(()=>{
        ref.current.classList.add('active')
    }, delay)
    const cleanUp = ()=>{
        ref.current = null;
        console.log(ref)
        clearTimeout(timeOut)
    }
    return cleanUp;

}