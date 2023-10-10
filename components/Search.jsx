'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

const Search = () =>
{
    const [search, setSearch] = useState("")
    const router = useRouter()

    function handleSubmit(e)
    {
        e.preventDefault()
        setSearch('');
        router.push(`/${search}`)
    }

    return (
        <>
            <form className="text-black w-50" onSubmit={handleSubmit}>
                <input type="text" placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="rounded-xl text-xl text-black p-3 mr-2" />
                <button className="p-2 border rounded-xl">
                    🔎
                </button>
            </form>

        </>
    )
}

export default Search
