import React from 'react'

const Input = ({type,className,name,value,onChange,placeholder,children,inputCont,label,error}) => {
  return (
    <div className={`input-div ${inputCont}`}
    >
      {
        label && <label>{label}</label>
      }
      <input
        type={type}
        className={`form-control ${className}`}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {children}
      {
        error && <div className="error-text">
          {error}
        </div>
      }
    </div>
  )
}

export default Input