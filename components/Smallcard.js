import Image from "next/image"


const Smallcard = ({ img, location, distance }) => {
    return (
        <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out">
            {/* left */}
            <div className="relative h-16 w-16">
                <Image
                    alt="kjhl"
                    className="rounded-lg"
                    src={img}
                    layout="fill"

                />
            </div>
            <div >
                <h2>{location}</h2>
                <h3 className="text-gray-500">{distance}</h3>
            </div>
        </div>
    )
}

export default Smallcard