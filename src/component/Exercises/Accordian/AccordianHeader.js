const AccordianHeader = (({title, children, onToggle, isOpen}) =>{
    // const [isOpen, setOpen  ] = useState(false);
    
    return (
       <section>
        <h3 onClick={onToggle}>{title}</h3>
        {isOpen && <p>{children}</p>}
        </section>
    );
})

export default AccordianHeader;