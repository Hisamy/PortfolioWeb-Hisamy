export function Button({ bgColor, textColor, text, action }) {

    return (
        <button
            onClick={action}
            className={`bg-${bgColor} text-${textColor} font-altone text-sm px-10 py-3 rounded-[50px] w-full hover:bg-background transition-colors cursor-pointer`} >
            {text}
        </button >
    )

}