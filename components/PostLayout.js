import ProjectWrapper from "../components/ProjectWrapper";
import SocialLinks from "./SocialLinks";
import { useRouter } from 'next/router';
import { useState } from "react";
import IRLprojectsData from "../assets/IRLprojects.js"
import Image from "next/image";

export default function PostLayout({ children }) {
    const router = useRouter();
    const pageLink = router.pathname.split("/").pop();
    let project = IRLprojectsData.filter(project => project.pageLink == pageLink)[0];
    let [currentImage, setCurrentImage] = useState(project.images[0]);
    let [otherImages, setOtherImages] = useState(project.images.slice(1));

    return (
        <ProjectWrapper pageTitle="test">
            <div className="z-20 flex flex-col justify-center w-full px-6 sm:flex-row">
                <div className="flex w-1/3 max-h-96">
                    <div className="flex flex-col">
                            {project.images.map((image, index) =>
                                <Image
                                    key={index}
                                    src={image}
                                    width={256} 
                                    height={256} 
                                    // width="100%" 
                                    // height="100%" 
                                    // layout="responsive" 
                                    // objectFit="contain"
                                />
                            )}
                    </div>
                    <Image src={currentImage} width={256} height={256}/>
                </div>
                {/* <div className="flex flex-col w-1/3">
                    <Image src={currentImage} width={256} height={256}/>
                    {project.images.map((image, index) =>
                        <Image
                            key={index}
                            src={image}
                            width={256} 
                            height={256} 
                            // width="100%" 
                            // height="100%" 
                            // layout="responsive" 
                            // objectFit="contain"
                        />
                    )}
                </div> */}
                
                <div className="flex flex-col w-2/3 px-6 bg-white/90">
                    <h1 className="my-6 text-2xl font-bold text-center text-myred">
                        {project.title}
                    </h1>

                    <div className="flex flex-col justify-between h-full mx-6">
                        {children}
                        <div className="flex justify-center">
                            <SocialLinks />
                        </div>
                    </div>

                </div>
                
                
                
                
            </div>

            {/* <div className='fixed bottom-0'>
                    <SocialLinks />
                </div> */}

        </ProjectWrapper>
    )
}