import Skill from "./Skill";
export function Skills() {
    return (
        <div className="h-[100vh] flex items-center">
            <div>
                <h2 className="font-arsenica text-7xl">Skills</h2>
            </div>
            <div>
                <Skill
                    name="React"
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
                    alt="react"
                    bgColor="bg-white"
                />

            </div>
        </div>
    );
}