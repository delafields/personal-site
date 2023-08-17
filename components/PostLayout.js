import ProjectWrapper from "../components/ProjectWrapper";
import { Carousel } from 'flowbite-react';
import Image from 'next/image'

export default function PostLayout({ post, children }) {
    return (
        <ProjectWrapper pageTitle="test">
            
            <Carousel className="mt-64">
                <img
                    alt="..."
                    src="/projectImages/sunglass-blobs.jpeg"
                />
                <img
                    alt="..."
                    src="/projectImages/sunglass-blobs.jpeg"
                />
                <img
                    alt="..."
                    src="/projectImages/sunglass-blobs.jpeg"
                />
                <img
                    alt="..."
                    src="/projectImages/sunglass-blobs.jpeg"
                />
                <img
                    alt="..."
                    src="/projectImages/sunglass-blobs.jpeg"
                />
                </Carousel>

        {children}

        </ProjectWrapper>
    )
}