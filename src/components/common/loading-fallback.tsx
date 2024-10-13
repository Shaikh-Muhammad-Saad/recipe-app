const LoadingFallback = () => {
    return (
        <div className="w-full flex flex-col items-center mt-20">
            <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="animate-spin">
                <circle cx="25" cy="25" r="20" stroke-width="4" stroke="#000" fill="none" stroke-dasharray="31.4 31.4">
                </circle>
            </svg>
            <p className="text-center mt-5">Loading Recipes...</p>
        </div>
    )
}

export default LoadingFallback;