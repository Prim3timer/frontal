const Header = ({title, length})=> {
    return <header>
       <h2 >{length} {title} </h2>
    </header>
}

Header.defaultProps = {
    title: 'Default Title'
}

export default Header