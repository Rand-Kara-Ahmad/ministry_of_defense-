import {Fragment} from "react";
import Hero from "../../../components/ServiceType/ServiceType.jsx";
import TopCategory from "./main/components/TopCategory/TopCategory.jsx";
import Service from "./main/components/Service/Service.jsx";
import Classes from "./main/components/Classes/Classes.jsx";
import Courses from "./main/components/Courses/Courses.jsx";
import heroImage from './../../../assets/images/hero.jpg'
import enrollImage from './../../../assets/images/enroll.jpg'
import News from "./main/components/News/News.jsx";
import Pricing from "./main/components/Pricing/Pricing.jsx";
import WhyUs from "./main/components/WhyUs/WhyUs.jsx";
import WhyUsImg from "./../../../assets/images/whyUs/img-school-5-min.jpg";

const Main = () => {

    return (
        <Fragment>
            <Hero title=" Watch the video "
                  desc="Education is the Mother of Leadership"
                  image={heroImage}
                  button="Explore courses"/>
            <TopCategory title="Browse Top Category"/>
            <Service sec="service"/>
            <Classes title="We Have Best Education"
                     desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."/>
            <Courses title="The Right Course For You"
                     desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."/>
            <Hero subTitle="Education for Tomorrow's Leaders"
                  image={enrollImage}
                  subDesc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."
                  button="Enroll Now"
            />
            <Service sec="about"/>
            <News/>
            <Pricing title="Pricing"
                     desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."/>
            <WhyUs title="Why Choose Us" img={WhyUsImg} desc="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
             there live the blind texts. " />
        </Fragment>
    );
};

export default Main;
