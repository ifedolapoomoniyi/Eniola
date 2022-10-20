import React from 'react'
import TopDescrip from '../../components/TopDescrip/TopDescrip'
import WritingImg from '../../imgs/WritingImg.png'
import Peter from '../../imgs/Peter.png'
import small_eni from '../../imgs/small_eni.png'
import Navbar from '../../components/Navbar/Navbar'
import ResumeCards from '../../components/ResumeCards/ResumeCards'
import Resume1 from '../../imgs/Resume1.png'
import Resume2 from '../../imgs/Resume2.png'
import Resume3 from '../../imgs/Resume3.png'
import Footer from '../../components/Footer/Footer'
import './Writing.css'

const Writing = () => {
  return (
    <div className="Writing">
        <Navbar/>
        <TopDescrip 
            title= "Writing"
            src= {WritingImg}
            name= 'Olayiwola Peter'
            picture={Peter}
            comments= {`"Eniolas' letters are so inspiring. I'm not a fan of reading long texts on WhatsApp if it doesn't relate to my line of business but once I start reading hers, I couldn't stop reading as her letters were practical, fun, and full of wisdom. I could easily relate with what she writes.
            Over the past few months I have learnt from her what it takes to dream, what you must do to achieve those dreams and how to keep persisting.
           I would recommend anyone to subscribe to and read her letters." 
           `}
            
        />

        <div className="writer-about">
          <div className="writer-about-img">
            <img src={small_eni} alt="Beautiful Eni" />
          </div>
          <h2>ENIOLA AS A WRITER</h2>
          <p>
            Eniola started writing as a young girl in secondary school where she represented her school in different essay competitions. After graduating secondary school, she  decided to hone in on her writing skills by starting her own blog in October 2021 which then metamorphosed into her newsletters called "Love Letters by Eniola Divine". The newsletters currently has 300 readers with 30 posts. She also writes contents for websites, captions, ad campaigns, product descriptions and much more.</p>

          <p>
            She believes that "there are tales to be told and stories to be painted through words" and she wants to explore them all in any area. Eniola uses a unique art of storytelling, creativity and research to make her write ups exceptional. 
          </p>
        </div>

        <div className="writer-resume">
            <div className="absolute-resume">
              RESUME

            </div>
            <div className="ResumeCards">
                <div>
                   <img src={Resume1} alt="" className="card-img"/>
                </div>
                <div className="card-details">
                  <div>
                    <div>FREELANCE GHOSTWRITER</div>
                    <div>june 2022 till present</div>
                  </div>
               <ul>
                 <li>
                  I worked with a reporter at a reputable news outlet to produce detailed articles weekly in the lifestyle niche</li>
               </ul>
              </div>
            </div>

          <ResumeCards
            src={Resume2}
            title='CONTENT WRITER FOR TITAN UPDATES'
            timeline='Freelance contract'
          >
            <li>I wrote an ad campaign to generate leads.</li>
          </ResumeCards>

          <ResumeCards
            src={Resume3}
            title="CONTENT WRITER FOR LOVE LETTERS NEWSLETTER"
            timeline="June, 2022 till present"
            >
              <li>I wrote over 30 articles containing over 500 words each covering topics like life, motivation, business and more.</li>
              <li>Grew the list by 76% in 7 months</li>
          </ResumeCards>


        </div>

        <Footer/>
    </div>
  )
}

export default Writing