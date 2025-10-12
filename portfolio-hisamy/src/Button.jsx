export function Button({ variant, text, size, action }) {

    const variants = {
        dark: 'bg-black text-white hover:bg-gray',
        light: 'bg-white text-black hover:bg-background',
    };

    const sizes = {
        full: 'w-full',
        auto: 'w-auto',
    };


    return (
        <button
            onClick={action}
            className={`${variants[variant]} ${sizes[size]} font-altone text-sm px-15 py-3 rounded-[50px]  transition-colors cursor-pointer`}
        >
            {text}
        </button >
    );
}