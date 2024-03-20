let Footer = ({length})=> {
        let time = new Date()
    return <section>
        <h2>{length} {length <2 ? 'Item' : 'Items'} {time.getFullYear()}</h2>
       
    </section>
}

export default Footer