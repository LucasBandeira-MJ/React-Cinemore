const AppHeader = () => {
    return (
        <header style={styles.header}>
            <nav>
                <h1 style={styles.title} >Cinemore</h1>
            </nav>
        </header>
    )
}


const styles = {
        header: {
            color: '#7159c1',
            width: '95%',
            maxWidth: '1100px',
            padding: '5px 0 10px'
        },
        title: {
            textTransform: 'uppercase'
        }
    }

export default AppHeader
