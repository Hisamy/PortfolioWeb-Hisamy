export function AppHeader() {
    return (
        <header className="flex items-center justify-between px-4">
            <div className="flex items-end gap-8">
                <p className="font-arsenica text-3xl">Hisamy</p>
                <nav className="font-altone text-black/70 flex gap-8 text-xs">
                    <a href="#" className="hover:text-black/100 ">HOME</a>
                    <a href="#" className="hover:text-black/100 ">ABOUT ME</a>
                    <a href="#" className="hover:text-black/100 ">SKILLS</a>
                    <a href="#" className="hover:text-black/100 ">PROJECTS</a>
                    <a href="#" className="hover:text-black/100 ">CONTACT</a>
                </nav>
            </div>

            <div className="flex h-7 gap-1">
                <button className=" flex items-center justify-center rounded-lg">
                    <img className="max-h-full object-contain" src="../src/assets/images/black-github-icon.png" alt="black-github-icon" />
                </button>
                <button className="flex items-center justify-center rounded-lg">
                    <img className="max-h-full object-contain" src="../src/assets/images/black-linkedin-icon.png" alt="black-linkedin-icon" />
                </button>
                <button className="flex items-center justify-center rounded-lg">
                    <img className="max-h-full object-contain" src="../src/assets/images/black-mail-icon.webp" alt="black-mail-icon" />
                </button>
            </div>
        </header>
    );
}