import Link from "next/link"
import Image from "next/image"

export default async function StaticImage() {
    const response = await fetch("https://api.unsplash.com/photos/random?client_id=" + process.env.UNSPLASH_ACCESS_KEY)
    const image: UnsplashImage = await response.json();

    const width = Math.min(500, image.width);
    const height = (width / image.width) * image.height;
    return (
        <div className="mb-12 lg:mb-0">
            <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%] h-[500px]" data-te-ripple-init data-te-ripple-color="light">
                <Image
                    src={image.urls.raw}
                    width={width}
                    height={height}
                    alt={image.description}
                    className="rounded-lg drop-shadow-xl object-cover object-center w-full h-full"
                    priority
                />
                <Link href={"/users/" + image.user.username}>
                    <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                </Link>
            </div>
            <h5 className="mb-4 text-lg font-bold">{image.location.name}</h5>
            <div className="mb-4 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400 lg:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                </svg>
                by <Link href={"/users/" + image.user.username}>{image.user.username}</Link>
            </div>
            <p className="text-neutral-500 dark:text-neutral-300">
                {image.description}
            </p>
        </div>
    )
}