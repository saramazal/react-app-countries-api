import { SearchContext } from './Main'
import { useContext } from 'react'

export default function Search() {
    const v = useContext(SearchContext)
    return <input
        onChange={e => v(e.target.value)}
        placeholder='search'
        type='search'
    />
}