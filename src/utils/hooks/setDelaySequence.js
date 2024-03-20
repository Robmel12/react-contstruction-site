import { createElement } from "react";

export default function setDelaySequence(obj){
const {el, array, ratio=0, reverse= false, delay=0, props} = obj;
const {style ={}, ...rest} = props
let elDelay;
 return array.map((e, index)=>{
elDelay = reverse?  ((array.length-1-index))*ratio+delay: ratio * index+delay;
console.log(elDelay)
if(typeof e === 'string'){
 return    createElement(el, {key: index, ...rest, style: {...style,  transitionDelay: `${elDelay}s`}}, e)
}else if(typeof e === 'object'){
    console.log(elDelay)
    return createElement(el, {key: index, ...rest, style: {...style,  transitionDelay: `${elDelay}s`}})
}else{
    return console.error('Error: array param must be an array of strings or objects')
}
 
})

}