type PropType = {
    children: React.ReactNode | React.ReactNode[];
}

const CardsContainer = ({ children }: PropType) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-5 md:gap-8 lg:gap-10 px-10 sm:px-14 md:px-24 lg:px-66 xl:px-52 mt-20 pb-20">
            {children}
        </div>
    );
}

export default CardsContainer