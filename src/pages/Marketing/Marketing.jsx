import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import TopDescrip from '../../components/TopDescrip/TopDescrip'
import MarketingImg from '../../imgs/Marketing.png'
import Malik from '../../imgs/Malik.png'
import EniMarketing from '../../imgs/EniMarketing.png'
import Bg from '../../imgs/Bg.png'
import Scocb from '../../imgs/Scocb.png'
import Upskill from '../../imgs/Upskill.png'
import Years from '../../imgs/Years.png'
import Selar from '../../imgs/Selar.png'
import Blueprint from '../../imgs/Blueprint.png'
import Certificate from '../../imgs/Certificate.png'
import Pegomancy from '../../imgs/Pegomancy.png'
import Pro from '../../imgs/Pro.png'
import Creative from '../../imgs/Creative.png'
import './Marketing.css'
import ResumeCards from '../../components/ResumeCards/ResumeCards'
import Footer from '../../components/Footer/Footer'


const Marketing = () => {
  return (
    <div className="Marketing">
        <Navbar/>
        <TopDescrip
         title="DIGITAL MARKETING"
         name="Kayikunmi Malik"
         src={MarketingImg}
         picture={Malik}
         comments="Working with Eniola has been a blessing 
 
         I wouldn't have stayed in the digital Marketing world without her time and effort in making sure I get things done right.
         Eniola is a very hardworking and determined young lady. I have gained a lot from her and I am still gaining. She is just the best person to learn from."
         />

         <div className="marketing-about">
            <img src={EniMarketing} alt="A beautiful Picture of Eniola Agunbiade" />
            <h3>ENIOLA AS A DIGITAL MARKETER</h3>
            <div className='bg-div'>
                <img src={Bg} alt="" />
                <div><em>"I'M A DIGITAL MARKETER WHO FORMULATES MIND-BLOWING STRATEGIES FOR YOUR BRAND"</em></div>
            </div>
            <div>
                <p>July 2021 was when Eniola started her journey as a digital marketer and she has gained experience in different parts from social media management, branding, content Writing, ad campaigns, email marketing and so much more.</p>
                
                <p>Need a girl to help you build and nurture your online audience? Eniola is the one for the job. With over 1 year experience, Eniola loves Marketing and can discuss it for hours. Due to her passion for it, she has gone to take several courses to improve her knowledge and make her equipped for the industry.</p>
            </div>
         </div>

         <div className="qualifications">
            <h3>QUALIFICATIONS</h3>
            <div className="vector-imgs">
                <img src={Certificate} alt="" />
                <img src={Creative} alt="" />
                <img src={Years} alt="" />
            </div>
         </div>

         <div className="writer-resume">
            <div className="absolute-resume">RESUME</div>
            <ResumeCards
                src={Pegomancy}
                title='DIGITAL MARKETING SPECIALIST AT PEGOMACY CONCEPTS EDUCATION ARM'
                timeline='September, 2022 till present'
                >
                    <li>Formulates strategies to increase sales by 20%</li>
                    <li>Managed social media accounts on Instagram & Twitter. <a href='placeholder'>Click here to view</a></li>
                    <li>Helped in branding the business</li>
            </ResumeCards>

            <ResumeCards
                src={Selar}
                title='MARKETER ON SELAR FOR DIFFERENT INFO PRODUCTS'
                >
                <li>Handled ad campaigns</li>
                <li>Improved sales by 40% in 8 months</li>
            </ResumeCards>

            <ResumeCards
                src={Blueprint}
                title="COURSE CREATOR ON SELAR"
                >
                    <li>Curated an explanatory and very affordable Affiliate marketing guide called "The Affiliate's Blueprint". <a href="placeholder">Click here to view</a></li>
                    <li>Wrote an ebook on whatsapp Marketing called "The 6 figure blueprint for selling properly on whatsapp". <a href="placeholder">Click here to view</a></li>
            </ResumeCards>

            <ResumeCards
                src={Pro}
                title="TEAM LEAD, SOCIAL MEDIA MANAGEMENT, PRO'S OFFICE IFUMSA"
                timeline='July, 2022'
            />

            <ResumeCards
                src={Upskill}
                title="MEMBER OF PUBLICITY TEAM, UPSKILL PROGRAM"
                timeline='July, 2022'
            >
                <li>Worked with other members of the team to publicize the Upskil program in conjunction with Jobberman</li>
            </ResumeCards>

            <ResumeCards
                src={Scocb}
                title="CONTENT CREATOR & SECRETARY OF NIMSA SCOCB IFUMSA"
            >
                <li>Planned a successful webinar alongside team members</li>
                <li>Handled and grew the twitter account by 47% in just 2 months with other team members.</li>
            </ResumeCards>

            <ResumeCards
                src={Pro}
                title='MARKETING COACH'
                timeline='April-June 2022'
            >
                <li>Successfully hosted 2 webinars in April and June respectively with over 130 people in attendance.</li>
            </ResumeCards>


         </div>

        <Footer/>
    </div>
  )
}

export default Marketing