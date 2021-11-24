import techBlog from '../../assets/images/techBlog.PNG'
import triviaBrews from '../../assets/images/triviaBrews.PNG'
import fitnessBuddy from '../../assets/images/fitnessBuddy.png'
import budgetTracker from '../../assets/images/budget.PNG'
import dNH from '../../assets/images/dNH.PNG'
import React from "react";



function Carousel() {
    const projectList = [
                {
                    id: 1,
                    title: 'Tech Blog',
                    subTitle: 'Get info about your running goals!',
                    imgSrc: techBlog,
                    link: 'https://quiet-escarpment-36399.herokuapp.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Trivia Brews',
                    subTitle: 'Trivia app to play and drink with',
                    imgSrc: triviaBrews,
                    link: 'https://jbedford18.github.io/Triviabrews/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Fitness Buddy',
                    subTitle: 'Choose a plan to bulk or cut!',
                    imgSrc: fitnessBuddy,
                    link: 'https://fitness-buddy-2.herokuapp.com/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Distilled News Hub',
                    subTitle: 'Filter for the news you want!',
                    imgSrc: dNH,
                    link: 'https://github.com/Cluce059/fitness-buddy-v2.git',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Budget Tracker',
                    subTitle: 'Track your budget on or offline',
                    imgSrc: budgetTracker,
                    link: 'https://whispering-badlands-17410.herokuapp.com/',
                    selected: false
                }
                
            
            ]
            return (
                <div className="portfolio"> 
                <div className="carousel-container">
               
        
                    <Carousel variant="dark">
                      
                    
                     {projectList.map((data) => (
                        <Carousel.Item key={data.id}>
                            <a href={data.link} target="_blank" rel="noreferrer">
                                <img className="d-block w-100"
                                src={data.img}
                                alt={data.information} />
                                <Carousel.Caption>
                                    {data.title} : 
                                    <br></br>
                                    <br></br>
                                    <span>{data.information}</span>
        
                                </Carousel.Caption>
                            </a>
                        </Carousel.Item>
        
                        
                    ))} 
                    
                </Carousel>
        
            
                </div>
        
                
            </div>
            
        
        
                
                
            )
        }

export default Carousel;
