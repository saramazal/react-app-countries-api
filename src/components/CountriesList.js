import Country from "./Country"

export default function CountriesList(props) {
    const { list } = props

    list.sort((a, b) => a.name.common > b.name.common ? 1 : -1)

    return <ul className="listCountries">
        {list.map(c => <Country
            key={c.cca2}
            {...c}
        />)}
    </ul>
}