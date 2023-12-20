let currentDate = new Date().getFullYear()

function Footer() {
    return (
        <footer>
            <p>&copy; {currentDate} Your website name</p>
        </footer>
    )
}

export default Footer