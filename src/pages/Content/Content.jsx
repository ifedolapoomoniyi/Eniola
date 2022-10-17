import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import TopDescrip from '../../components/TopDescrip/TopDescrip'
import ContentCreation from '../../imgs/ContentCreation.png'
import Youtube from '../../imgs/Youtube.png'
import EniContent from '../../imgs/EniContent.png'
import Dami from '../../imgs/Dami.png'
import Podcast from '../../imgs/Podcast.png'
import Footer from '../../components/Footer/Footer'
import './Content.css'

const Content = () => {
  return (
    <div className="Content">
        <Navbar/>
        <TopDescrip
         title="CONTENT CREATION"
         src={ContentCreation}
         name="Arowosola Damilola"
         picture={Dami}
         comments="Eniola, your videos are so amazing. You really capture moments that I can't help but smile when I watch. 
         You're doing an amazing job with content creation and I know the sky is just the beginning. Keep up the good work babes"
         />
         
         <div className="content-about">
            <img src={EniContent} alt="A Beautiful Picture of Eniola Agunbiade" />
            <h3>ENIOLA AS A CONTENT CREATOR</h3>
            <div>
                <p>In 2021, Eniola started her Youtube channel called Eniola Divine and she started posting videos on fashion, beauty and lifestyle teaching herself to edit, vlog and post content. In 2022, Eniola added content from her experience in Medical School to her channel.</p>
                
                <p>Eniola aims for creativity, entertainment in all her videos. She had one of her videos go viral just 6 months into her career as a content creator and the video currently has over 7,200 views.</p>
            </div>
         </div>

        {/* shared styling from the writer page */}

         <div className="writer-resume">
            <div className="absolute-resume">
                RESUME
            </div>
            <div className='padding'>
                <div>YOUTUBE: ENIOLA DIVINE</div>
                <img src={Youtube} alt="" />
            </div>
            <div className='padding'>
                <div>MEMBER OF PODCAST TEAM, VOICES AND VIBES OF IFUMSA</div>
                <img src={Podcast} alt="" />
            </div>
         </div>

         <Footer/>
    </div>
  )
}

export default Content