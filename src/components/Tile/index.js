const Tile = (props) => {
    return (
        <div className="w-10 h-10 bg-yellow-200 border-2 border-yellow-400 rounded-md flex items-center justify-center relative cursor-pointer hover:bg-yellow-300 transition-colors">
            <span className="text-xl font-bold">{props.letter}</span>
            <span className="absolute bottom-0 right-1 text-xs">{props.value}</span>
        </div>

    )
}

export default Tile