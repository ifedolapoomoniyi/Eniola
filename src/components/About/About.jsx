import React from 'react'
import './About.css'
import EniSitting from '../../imgs/EniNew.png'

const About = () => {
  return (
    <div className="About">
        <div className="about-text">
            <p>
                "I love to see a young girl go out and grab the world by the lapels. Life's a bitch. You've got to go out and kick ass.”- Maya Angelou
            </p>
            <p>
            Eniola is a 19 year old first year Medical student in the prestigious Obafemi Awolowo University, Ile Ife. She is a lover of watching movies, cooking and listening to the I said what I said podcast.</p>
            
            <p>Eniola started her journey as a Medical student right from high school when she cleared her professional exams and got admitted into the university.</p>

            <p>Her gap year from school was the turning point for her as she got involved in digital marketing further broadening her knowledge through books and online courses. In 2022, she got a Google Roothub scholarship for the Project Management Certification Course which she completed in July 2022 under 4 months.</p>

            <p>She is currently working as a PM intern and she enjoys serving in various capacities in her medical students association. Eniola loves creating content and posting videos on her Youtube channel.</p>

            <p>One of her core values is consistency and it has been the bedrock for her progress so far. She is a lover of God and she enjoys dancing to music and watching comedy videos by kiekie.
            </p>
        </div>
        
        <img src={EniSitting} alt="" />
    

    </div>
  )
}

export default About