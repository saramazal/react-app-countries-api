import { useContext } from "react"
import { PopupContext } from "../App"

export default function Popup() {

    const [popup, setPopup] = useContext(PopupContext)

    return <div
        className={`overlay ${popup ? '' : 'close'}`}
        onClick={() => setPopup('')}
    >
        <div className='popup'>{popup}</div>
    </div>
}