import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar() {
    return (
        <form>
            <div>
                <div className="relative w-full">
                    <input type="search" className="block p-3 w-full lg:w-72 z-20 text-sm text-greenish-black bg-gray-50 rounded-lg focus:border-none" placeholder="Search a song..." required />
                    <button className="absolute top-0 end-0 p-2.5 h-full rounded-e-lg">
                        <FontAwesomeIcon className="h-4 w-4" icon={faMagnifyingGlass} style={{ color: "#202120", }} />
                    </button>
                </div>
            </div>
        </form>
    )
}
