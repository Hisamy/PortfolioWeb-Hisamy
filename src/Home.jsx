import { Button } from "./Button"
export function Home() {
    return (
        <div className="h-[calc(100vh-7rem)] bg-background">
            <div className="w-full h-full bg-red flex justify-between gap-2">
                <div className="flex items-center justify-start">
                    <div className="flex flex-col gap-8 lg:ml-[70%]">
                        <div className="text-white text-center">
                            <p className="font-altone">Hola, I'm</p>
                            <p className="font-arsenica text-7xl">Hisamy</p>
                            <p className="font-altone text-start mt-3">SOFTWARE ENGINEER</p>
                        </div>
                        <div className="w-full">
                            <Button
                                variant="light"
                                size="full"
                                text="VIEW PROJECTS"
                                action={() => alert('Clicked!')}
                            />
                        </div>
                    </div>

                </div>
                <div className="sm:flex sm:items-end h-full">
                    <img
                        className=" w-24 h-24 rounded-full border-4 border-background bg-background mb-4
                        sm:w-auto sm:h-[90%] sm:rounded-none sm:border-0 sm:bg-transparent sm:mb-0"
                        src="https://i.pinimg.com/originals/a2/43/fe/a243feb03fbf40c21f18f63e28162700.png"
                        alt="Gato llorando"
                    />
                </div>


            </div>

        </div>
    )
}