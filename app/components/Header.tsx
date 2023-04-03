import { FaPlus } from 'react-icons/fa'

const Header: React.FC = () => {
    return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
      <div className="text-3xl text-red-500 font-semibold">
        DexNote
      </div>

      <button type="button" className="text-red-500 border border-red-500 text-sm font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-red-300">
        <FaPlus size={15} />
        Nova Tarefa
      </button>
    </div>
  )
}

export default Header;