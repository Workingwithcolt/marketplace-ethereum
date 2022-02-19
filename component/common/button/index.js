const Button = ({
    children,
    disabled,
    classname = "text-white bg-indigo-600 hover:bg-indo-700",...rest}) =>{
    return (
        <button 
                disabled = {disabled}
                {...rest}
                className={`disabled:opacity-50  px-8 py-3 rounded-lg border text-base font-medium ${classname}`} >
                {children}
        </button>

    )
}

export default Button;