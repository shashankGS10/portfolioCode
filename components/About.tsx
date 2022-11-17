import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="UX/UI Design"
                        icon="/icons/design.svg"
                        description="I create design  products with unique ideas."
                        projects={5} />
                    <AboutCard
                        title="Web Design"
                        icon="/icons/code.svg"
                        description="I develop Front-End with coding super smooth."
                        projects={10} />
                    <AboutCard
                        title="Mobile"
                        icon="/icons/phone.svg"
                        description="I develop cross-platform mobile applications."
                        projects={4} />
                </div>
                
                <div className="flex-full about-text">
                    <h5 className="gray">Introduce</h5>
                    <h1 className="white">Hello, I&#39;m Shashank</h1>
                    <h3 className="white">Design is not just what it looks like. Design is how it feels!</h3>
                    <p className="gray">I have proceeded my dream to be a developer as it has been my lifelong ambition. I am a talented Front-End developer with a UI/UX design background. During my 3.5 years of work as a Software Developer and Freelancer, I had the opportunity to enhance my expertise by collaborating with different companies and by creating useful content for both business and customer use.<br/><br/>
                    I am naturally persevered, self-confident, quietly curios, innovative and constantly challenging my skills. Failures doesn&apos;t fear me, not trying does.</p>
                </div>
            </div>
            <div className="skillWrap">
            <h5 className="gray">Tech Stack</h5>
                <div className="flex partners justify-space flexWrap">
                    <Image src="/images/partners/js-logo.png" height={55} width={55} alt="javascript" />
                    <Image src="/images/partners/react-logo.png" height={55} width={110} alt="reactjs" />
                    <Image src="/images/partners/native-logo.png" height={45} width={45} alt="react-native" />
                    <Image src="/images/partners/figma-logo.png" height={45} width={45} alt="figma" />
                    <Image src="/images/partners/vue-logo.png" height={40} width={45} alt="vuejs" />
                    <Image src="/images/partners/fire-logo.png" height={55} width={110} alt="firebase" />
                    <Image src="/images/partners/redux-react-logo.png" height={45} width={45} alt="redux" />
                </div>
                <div className="flex partners justify-space flexWrap">
                    <Image src="/images/partners/npm-logo.png" height={30} width={55} alt="javascript" />
                    <Image src="/images/partners/webpack-logo.png" height={55} width={55} alt="reactjs" />
                    <Image src="/images/partners/css-logo.png" height={45} width={35} alt="react-native" />
                    <Image src="/images/partners/html5-logo.png" height={45} width={45} alt="figma" />
                    <Image src="/images/partners/d3-logo.png" height={40} width={45} alt="vuejs" />
                    <Image src="/images/partners/babel-logo.png" height={55} width={110} alt="firebase" />
                    <Image src="/images/partners/xcode-logo.png" height={45} width={45} alt="redux" />
                </div>
            </div>
        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    projects: number
}

function AboutCard ({title, icon, description, projects} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
            <span className="gray">{projects.toString()} projects</span>
        </div>
    )
}