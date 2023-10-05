import React from 'react';
import Image from 'next/image'

export default function Gallery() {

    const projects = [
        {
            image: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.jpg",
            name: "Hollywood exhibition"
        },
        {
            image: "https://mdbcdn.b-cdn.net/img/new/standard/city/044.jpg",
            name: "Genius Loci"
        },
        {
            image: "https://mdbcdn.b-cdn.net/img/new/standard/city/045.jpg",
            name: "Big Apple"
        },
        {
            image: "https://mdbcdn.b-cdn.net/img/new/standard/city/047.jpg",
            name: "Sun City"
        },
        {
            image: "https://mdbcdn.b-cdn.net/img/new/standard/city/048.jpg",
            name: "Paris flavor"
        },
        {
            image: "https://mdbcdn.b-cdn.net/img/new/standard/city/049.jpg",
            name: "Sky is the limit"
        },
    ];

    return (
        <div className="container my-24 mx-auto md:px-6">
            {/* Section: Design Block */}
            <section className="mb-32">
                <style>
                    {`
            .zoom:hover img {
              transform: scale(1.1);
            }
          `}
                </style>
                <div className="grid gap-6 lg:grid-cols-3 px-2">
                    {/* Repeat this block for each project */}
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
                            data-te-ripple-init
                            data-te-ripple-color="dark"
                        >
                            <img
                                src={project.image}
                                className="w-full align-middle transition duration-300 ease-linear"
                                alt={project.name}

                            />
                            <a href="#!">
                                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                                    <div className="flex h-full items-end justify-start">
                                        <h5 className="m-6 text-lg font-bold text-white">
                                            {project.name}
                                        </h5>
                                    </div>
                                </div>
                                <div>
                                    <div className="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"></div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </section>
            {/* Section: Design Block */}
        </div>
    );
};
