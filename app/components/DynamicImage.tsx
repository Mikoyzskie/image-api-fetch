import Image from "next/image"

export default function DynamicImage() {
    return (
        <div className="col-span-12 sm:col-span-6 md:col-span-3">
            <div className="w-full flex flex-col">
                <div className="relative">
                    {/* Image Video */}
                    <a href="#">
                        <img
                            src="https://picsum.photos/seed/59/300/200"
                            className="w-96 h-auto rounded-lg"
                        />
                    </a>

                </div>
                <div className="flex flex-row mt-2 gap-2">
                    {/* Profile Picture */}
                    <a href="#">
                        <img
                            src="https://picsum.photos/seed/1/40/40"
                            className="rounded-full max-h-10 max-w-10"
                        />
                    </a>
                    {/* Description */}
                    <div className="flex flex-col">
                        <a href="#">
                            <p className="font-semibold">
                                Learn CSS Box Model in 8 Minutes
                            </p>
                        </a>
                        <a className="text-gray-400 mt-2 " href="#">
                            {" "}
                            Web Dev Simplified{" "}
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}