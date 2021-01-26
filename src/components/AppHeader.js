const AppHeader = () => {
    return (
        <header style={styles.header}>
            <nav style={styles.nav}>
                <h1 style={styles.title} >Cinemore</h1>
            </nav>
        </header>
    )
}


const styles = {
        header: {
            backgroundColor: '#000',
            color: '#7159c1',
            width: '100%',
            padding: '5px 0 10px'
        },
        nav: {
            width: '100%',
            maxWidth: '1100px',
            padding: '0 2%'
        },
        title: {
            textTransform: 'uppercase'
        }
    }

export default AppHeader
