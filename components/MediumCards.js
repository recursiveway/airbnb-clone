import Image from "next/image"

const MediumCards = ({ img, title }) => {
    return (
        <div className="cursor-pointer hover:scale-105 transform transition duration-200 ease-out hover:rounded-3xl">
            <div className="relative h-80 w-80">
                <Image alt="asl;kdf" src={img} layout="fill" className="rounded-xl" />
            </div>
            <h3 className="text-2xl mt-3">{title}</h3>
        </div>
    )
}

export default MediumCards