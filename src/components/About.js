import React from 'react'

const About = () => {

    return (
        <div>
           <h3 style={{color:'white', textAlign:'center', fontWeight:'700'}}>About iNotebook</h3> 

           <div className="row" style={{marginTop:'4rem', color:'white'}}>
            
                <p style={{color:'white'}}>Welcome to iNotebook – the ultimate online notebook for organizing your thoughts and ideas.</p><br></br>
                <p style={{color:'white'}}>iNotebook is designed to help you keep all your notes in one convenient place, accessible from anywhere with an internet connection. No more paper notebooks or scattered notes on your computer. With iNotebook, you can store your notes in the cloud and access them anytime, anywhere.</p>
                <p style={{color:'white'}}>Our mission is to provide a simple and user-friendly platform that helps you capture, organize, and access your notes effortlessly. Whether you're a student, a professional, or just someone who loves to jot down ideas, iNotebook is the perfect tool for you.</p>


                <p style={{color:'white'}}>Here are some of the key features of iNotebook:</p>
                <ul style={{color:'white'}}>
                    <li><p style={{color:'white'}}>Easy note-taking: Quickly capture your ideas and thoughts with our intuitive user interface.</p></li>
                    <li><p style={{color:'white'}}>Cloud storage: All your notes are stored securely in the cloud, so you can access them from any device with an internet connection.</p></li>
                    <li><p style={{color:'white'}}>Search and organization: Find the notes you're looking for in seconds with our powerful search functionality and easy-to-use organizational tools.</p></li>
                    <li><p style={{color:'white'}}>Sharing and collaboration: Share your notes with friends, family, or coworkers, or collaborate on notes in real-time.</p></li>
                </ul>
                <p style={{color:'white'}}>We're dedicated to making iNotebook the best it can be. If you have any feedback or suggestions, please don't hesitate to reach out. We'd love to hear from you.</p>
                <p style={{fontSize:'15px', color:"white"}}>Thank you for choosing iNotebook. Happy note-taking! 😊</p>
           </div>

           <div style={{textAlign:'center', fontSize:'12px', marginTop:'2rem'}}>
        <p style={{color:'white'}}>Made with 💖 by Rajat Vaidhya</p>
      </div>
        </div>
    )
}

export default About;
