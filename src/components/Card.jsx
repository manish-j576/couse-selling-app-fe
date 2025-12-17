export function Card({title , description , price , imgUrl}){
    
    return (
      <div className="w-1/3 h-1/3 max-w-sm rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* Content */}
        <div className="p-5 space-y-3">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

          <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
          <img src={imgUrl} className="w-full"></img>
          <div className="flex items-center justify-between pt-2">
            <span className="text-lg font-bold text-blue-600">₹{price}</span>

            <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              Visit Course
            </button>
          </div>
        </div>
      </div>
    );
}