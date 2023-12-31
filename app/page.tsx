import Link from "next/link"

export default function Home() {

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Unplash API image generator.{' '}
              <Link href="https://unsplash.com/documentation" className="font-semibold text-indigo-600" target="_blank">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Visual Vista
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Welcome to VisualVista, the ultimate destination for all your image gallery API needs. Whether you&apos;re a professional developer, an aspiring artist, or a photography enthusiast, VisualVista is here to simplify and enhance your image-related projects.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/gallery"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Gallery
              </Link>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
