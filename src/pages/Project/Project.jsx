import React from 'react'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import TopDescrip from '../../components/TopDescrip/TopDescrip'
import PmImg from '../../imgs/PmImg.png'
import EniWriter from '../../imgs/EniWriter.png'
import './Project.css'

const Project = () => {
  return (
    <div className="Project">
        <Navbar/>
        <TopDescrip
         title="PROJECT MANAGEMENT"
         src={PmImg}
         name="Joy Gumz"
         comments="“Operations keeps the lights on, strategy provides a light at the end of the tunnel, but project management is the train engine that moves the organization forward.”"
         />

        <div className="project-about">
            <img src={EniWriter} alt="Eniola Agunbiade" />
            <h3>ENIOLA AS A PROJECT MANAGER</h3>
            <div>
                <p>Eniola started her journey into the tech world in April, 2022 when she got awarded the Google Roothub scholarship for Project management. She completed the course in 4 months and got her certificate. <a href="https://drive.google.com/file/d/102YUGkBgGn4phGoTyrjSzjBKoSKQmbJP/view?usp=drivesdk">Click here to view certificate</a></p>
                <p>
                She went on to serve as a Product management intern where she has been applying the knowledge she has gained in real life scenarios.
                </p>
            </div>

        </div>
        <Footer/>
    </div>
  )
}

export default Project