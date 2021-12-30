import Search from "./Search";

export default function Header(props) {
    return <header>
        <h1>COUNTRIES <span>({props.countriesNum})</span></h1>
        <Search />
    </header>
}