import React from 'react'


// {/*   props.alert && ::will save from errors and not working site : blank site */}
export default function Alert(props) {
    const capitalize =(word)=>{
        let low=word.toLowerCase();
        return low.charAt(0).toUpperCase() + low.slice(1);
    }
  return (
        props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)} : </strong> {props.alert.msg}
        </div>

  )
}



