export default function Skill({ name, image, alt, bgColor }) {
    return (
        <div className="flex max-w-10">
            <div className={`${bgColor} rounded-[50px]`}>
                <img src={image} alt={alt} />
            </div>
            <div>
                {name}
            </div>
        </div>
    )

}