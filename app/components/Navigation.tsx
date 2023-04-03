import { FaBook } from 'react-icons/fa'

export function Navigation() {
    return (
        <div className="w-full flex">
            <button className="border border-red-500 rounded-lg">
                <FaBook size={30} className="text-white" />
            </button>
        </div>
    )
}