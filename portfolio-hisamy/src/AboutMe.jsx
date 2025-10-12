import { Button } from "./Button";
export function AboutMe() {
    return (
        <div className="h-[100vh] flex items-center">
            <div>
                <div className="flex flex-col gap-[2vw]">
                    <div>
                        <h2 className="font-arsenica text-7xl">About Me</h2>
                    </div>
                    <div>
                        <p className="font-altone">An aspiring Software Engineer.
                            I combine a strong creative problem-solving
                            approach with solid academic fundamentals.
                            I am highly motivated to master new coding skills
                            and transition my project experience into impactful
                            industry contributions.
                        </p>
                    </div>
                    <div className="flex gap-[3%] justify-center">
                        <Button
                            variant="dark"
                            size="auto"
                            text="VIEW PROJECTS"
                            action={() => alert('Clicked!')}
                        />
                        <Button
                            variant="dark"
                            size="auto"
                            text="DOWNLOAD CV"
                            action={() => alert('Clicked!')}
                        />


                    </div>







                </div>


            </div>

        </div>
    );

}