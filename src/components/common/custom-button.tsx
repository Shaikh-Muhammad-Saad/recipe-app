type PropType = {
    disable?: boolean;
    children: string;
    onClick: () => void
    buttonClassName?: string
}

const CustomButton = ({ disable = false, onClick, children, buttonClassName }: PropType) => {
    return (
        <button
            onClick={() => onClick()}
            disabled={disable}
            className={`cursor-pointer rounded text-text-secondary  px-10 py-2 text-sm font-semibold ${disable ? 'bg-[#5a86a3]' : 'bg-tertiary'} ${buttonClassName}`}
        >
            {children}
        </button>
    )
}

export default CustomButton;