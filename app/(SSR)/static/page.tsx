import StaticImage from "../../components/StaticImage";

export const metadata = {
    title: 'Static Image Fetching | Visual Vista'
}

export default function Page() {

    return (
        <div className="flex flex-col items-center mt-5 p-5">
            <div className="grid gap-x-6 lg:grid-cols-3">
                <StaticImage />
                <StaticImage />
                <StaticImage />
            </div>
        </div>
    )
}