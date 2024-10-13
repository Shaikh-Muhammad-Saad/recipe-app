const HeroSection = () => {
    return (<>
        <div className="h-40 md:h-64 border relative">

            <div className="w-full px-5 flex flex-col justify-center items-center absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
                <p className="text-2xl text-center md:text-4xl xl:text-[38px] font-bold text-text-primary mb-5">Optimized Your Meal</p>
                <p className="text-xs text-center text-text-primary">Select Meal to Add in Week. You will be able to edit. Modify and change the Meal Weeks.</p>
            </div>

            <img
                src="/images/hero-section-image.png"
                alt="hero-section-image"
                className="w-full h-full object-cover opacity-25 "
            />

        </div>

        <div className="bg-primary h-20 relative">
            <p className="text-text-primary text-xl md:text-2xl font-semibold absolute top-[50%] left-[20%] transform -translate-x-1/2 -translate-y-1/2">
                Week Orders
            </p>
        </div>
    </>
    )
}


export default HeroSection;