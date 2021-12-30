import { useContext } from "react"
import { PopupContext } from "../App"

export default function Footer() {
    const [, setPopup] = useContext(PopupContext)
    return <footer >
        <h6><span onClick={() => setPopup('Yossef')}>Coded by </span><a href="https://github.com/workin-cyber" target="_blank" rel="noopener noreferrer">WORKIN</a> & Design by <a href="https://github.com/saramazal" target="_blank" rel="noopener noreferrer">Sara Mazal</a></h6>
    </footer>
}
