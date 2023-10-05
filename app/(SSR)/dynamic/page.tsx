import DynamicImage from "@/app/components/DynamicImage";

export default function Page() {
    return (
        <div className="h-[calc(100vh-64px)] flex justify-center mt-5 p-5">
            <div className="grid grid-cols-12 gap-2 gap-y-4 max-w-6xl">
                <DynamicImage />
            </div>
        </div>
    )
}