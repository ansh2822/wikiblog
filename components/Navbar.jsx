import Link from "next/link"
import Search from "./Search"


export default function Navbar()
{
    return (
        <nav className="flex flex-col justify-between items-center border p-5 mb-5">
            <Link href="/" className="mb-2"> Mini Wiki </Link>
            <Search />
        </nav>
    )
}
