export default function Container({children, className}) { 
    return (
        <div className={`${className ? className : ''} px-[32px] lg:px-0 mx-auto max-w-screen-lg`}>
            {children}
        </div>
    )
}