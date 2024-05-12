import React from 'react';
import logon from '../images/logo.png';
import tvi from '../images/tv.png';
import eli from '../images/mobile-0819.jpg';
import strangeri from '../images/boxshot.png';
import devicei from '../images/device-pile-in.png';
import children from '../images/children.png';

export default function Home() {

    const faqClick = async () => {
        
    let allquestion = document.querySelectorAll(".faq-question");
    allquestion.forEach((v,index)=>{
        v.addEventListener("click",()=>{

            v.nextElementSibling.classList.toggle("h-[auto]")
            v.nextElementSibling.classList.toggle("scale-y-100")
            v.nextElementSibling.classList.toggle("p-[20px]")
            v.children[1].classList.toggle("rotate-45")

            allquestion.forEach((el,i)=>{
                if(i!==index){
                    el.nextElementSibling.classList.remove("h-[auto]","scale-y-100","p-[20px]")
                    el.children[1].classList.remove("rotate-45")
                }
            })
        })
    })
};
    return (
        <div>
            {/* banner section start */}
            <section className="w-[100%] h-[100vh] bg-[url('../src/images/netflix_bg.jpg')] bg-cover bg-center">
                <div className="w-[100%] h-[100vh] bg-[rgba(0,0,0,0.5)]">
                    <header className="max-w-[1170px] mx-auto">
                        <div className="grid sm:grid-cols-2 grid-cols-[30%_auto] px-[10px] items-center">
                            <figure>
                                <img src={logon} className='w-[148px]' alt=''/>
                            </figure>
                            <div className='flex justify-end gap-[10px]'>
                                <div className='relative'>
                                    <i className="absolute text-white fa-solid fa-globe top-2.5 left-1"></i>
                                    <select name='' id='' className='bg-[black] text-white border-[1px] border-[white] sm:p-[5px_25px] p-[5px_20px] rounded-[5px]'>
                                        <option value="">English</option>
                                        <option value="">Hindi</option>
                                    </select>
                                </div>
                                <button className='bg-[red] text-white rounded-[5px] px-[10px]'>
                                    Sign in
                                </button>
                            </div>
                        </div>
                    </header>
                    <div className='max-w-[1170px] mx-auto sm:py-[150px] py-[50px] text-center text-white'>
                        <h1 className='sm:text-[50px] text-[35px]  font-bold'>Unlimited movies, TV shows and more</h1>
                        <h4 className='text-[25px] py-[15px]'>Watch anywhere. Cancel anytime.</h4>
                        <p className='sm:text-[25px] text-[20px]'>Ready to watch? Enter your email or mobile number to create or restart your membership.</p>
                        <div className='max-w-[700px] sm:px-[10px] px-[40px] mx-auto mt-[30px] '>
                            <form action='' className='grid gap-[20px] sm:grid-cols-[70%_auto] grid-cols[1]'>
                                <input type='text' placeholder='Email Adress' className=' h-[50px] border-[1px] border-[#ccc] bg-transparent pl-[20px]'></input>
                                <button className='bg-[red] text-[25px] text-white rounded-[5px] px-[10px] py-[7px] hover:bg-[rgb(193,17,25)] duration-300 font-bold'>Get Started ></button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            {/* banner section end */}

            {/* enjoy tv section start */}
            <section className='w-[100%] bg-[black] border-t-[7px] border-t-[#605d5d] sm:py-[50px] py-[50px]'>
                <div className='max-w-[1170px] mx-auto sm:px-[15px] px-[80px]'>
                    <div className='grid sm:grid-cols-2 sm:grid-flow-cols-1 items-center'>
                        <div className='text-white'>
                            <h2 className='sm:text-[50px] text-[40px] font-bold'>Enjoy On Your TV</h2>
                            <p className='sm:text-[25px] text-[20px] pt-[30px]'>Watch on smart TVs, PlayStation, Xbox,<br/>Chromecast, Apple TV, Blu-ray players and<br/>more.</p>
                        </div>
                        <figure className='relative'>
                            <video data-uia="nmhp-card-animation-asset-video" autoplay="" playsinline="" muted="" loop="" className='absolute w-[80%] left-[10%] bottom-[20%] z-[1]'>
                                <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v' type="video/mp4"/>
                            </video>
                            <img className='relative z-[2]' src={tvi} alt=''/>
                        </figure>
                    </div>
                </div>
            </section>
            {/* enjoy tv section end */}

            {/* stranger things section start */}
            <section className='w-[100%] bg-[black] border-t-[8px] border-t-[#605d5d] sm:py-[70px] py-[50px]'>
                <div className='max-w-[1170px] mx-auto sm:px-[15px] px-[80px]'>
                    <div className='grid sm:grid-cols-2 grid-cols-1 items-center'>
                        <figure className='relative sm:order-1 order-2'>
                            <img className='' src={eli} alt=''/>
                            <div className='sm:w-[60%] w-[90%] absolute sm:left-[20%] left-[5%] border-[1px] border-[#ccc] bottom-[0px] grid grid-cols-[70%_auto] bg-[black] rounded-[15px] items-center'>
                                <div className='grid grid-cols-[25%_auto] gap-[10px] p-[10px] items-center'>
                                    <img src={strangeri}  alt=''/>
                                    <div className='text-white'>
                                        <h3 className='font-bold text-[14px]'>Stranger things</h3>
                                        <span className='text-[blue]'>downloading...</span>
                                    </div>
                                </div>
                                <div>
                                    <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif' alt='' />
                                </div>
                            </div>
                        </figure>
                        <div className='text-white sm:order-2 order-1 '>
                            <h2 className='sm:text-[50px] text-[40px] font-bold sm:leading-[65px] leading-[50px]'>Download your shows to watch offline</h2>
                            <p className='sm:text-[25px] text-[20px] pt-[30px]'>Save your favourites easily and always have<br/>something to watch.</p>
                        </div>                           
                    </div>
                </div>
            </section>
            {/* stranger things section end */}   

            {/* watch every where section start */}
            <section className='w-[100%] bg-[black] border-t-[7px] border-t-[#605d5d] sm:py-[50px] py-[50px]'>
                <div className='max-w-[1170px] mx-auto sm:px-[15px] px-[80px]'>
                    <div className='grid sm:grid-cols-2 sm:grid-flow-cols-1 items-center'>
                        <div className='text-white'>
                            <h2 className='sm:text-[50px] text-[40px] font-bold'>Watch everywhere</h2>
                            <p className='sm:text-[25px] text-[20px] pt-[30px]'>Stream unlimited movies and TV shows on<br/> your phone, tablet, laptop, and TV.</p>
                        </div>
                        <figure className='relative'>
                            <video data-uia="nmhp-card-animation-asset-video" autoplay="" playsinline="" muted="" loop="" className='absolute w-[60%] left-[20%] bottom-[40%] z-[1]'>
                                <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v' type="video/mp4"/>
                            </video>
                            <img className='relative z-[2]' src={devicei} alt=''/>
                        </figure>
                    </div>
                </div>
            </section>
            {/* watch every where section end */}  

            {/* profile for kids section start */}
            <section className='w-[100%] bg-[black] border-t-[7px] border-t-[#605d5d] sm:py-[50px] py-[50px]'>
                <div className='max-w-[1170px] mx-auto sm:px-[15px] px-[80px]'>
                    <div className='grid sm:grid-cols-2 sm:grid-flow-cols-1 items-center'>
                        <figure className='sm:order-1 order-2'>
                            <img className='relative' src={children} alt=''/>
                        </figure>                    
                        <div className='text-white sm:order-2 order-1'>
                            <h2 className='sm:text-[50px] text-[40px] font-bold'>Create profiles for<br/> kids</h2>
                            <p className='sm:text-[25px] text-[20px] pt-[30px]'>Send children on adventures with their<br/>favourite characters in a space made just<br/>for them—free with your membership.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* profile for kids section end */}   

            {/* faq section start */}
            <section className='w-[100%] bg-[black] border-t-[7px] border-t-[#605d5d] sm:py-[50px] py-[50px]'>
                <div className='max-w-[1170px] mx-auto px-[15px] text-white'>
                    <h2 className='sm:text-[50px] text-[40px] font-bold text-center'>Frequently Asked Questions</h2>
                    <div className='py-[30px]'>
                        <div className='bg-[#2d2d2d] mb-[20px]' onClick={faqClick}>
                            <div className='faq-question p-[20px] text-[30px] relative border-b-[2px] border-[black] hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer'>
                                <h3>What is Netflix?</h3><span className='absolute right-[20px] top-[15px]'>+</span>
                            </div>
                            <div className='text-[20px] scale-y-0 h-[0px] origin-top'>
                                <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
                                <p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                            </div>
                        </div>
                        <div className='bg-[#2d2d2d] mb-[20px]' onClick={faqClick}>
                            <div className='faq-question p-[20px] text-[30px] relative border-b-[2px] border-[black] hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer'>
                                <h3>What is Netflix?</h3><span className='absolute right-[20px] top-[15px]'>+</span>
                            </div>
                            <div className='text-[20px] scale-y-0 h-[0px] origin-top'>
                                <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
                                <p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                            </div>
                        </div>
                        <div className='bg-[#2d2d2d] mb-[20px]' onClick={faqClick}>
                            <div className='faq-question p-[20px] text-[30px] relative border-b-[2px] border-[black] hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer'>
                                <h3>What is Netflix?</h3><span className='absolute right-[20px] top-[15px]'>+</span>
                            </div>
                            <div className='text-[20px] scale-y-0 h-[0px] origin-top'>
                                <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
                                <p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                            </div>
                        </div>
                        <div className='bg-[#2d2d2d] mb-[20px]' onClick={faqClick}>
                            <div className='faq-question p-[20px] text-[30px] relative border-b-[2px] border-[black] hover:bg-[rgb(78,78,78)] duration-300 cursor-pointer'>
                                <h3>What is Netflix?</h3><span className='absolute right-[20px] top-[15px]'>+</span>
                            </div>
                            <div className='text-[20px] scale-y-0 h-[0px] origin-top'>
                                <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
                                <p>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                            </div>
                        </div>
                    </div>
                    <p className='sm:text-[25px] text-[20px] text-center'>Ready to watch? Enter your email or mobile number to create or restart your membership.</p>
                        <div className='max-w-[700px] sm:px-[10px] px-[40px] mx-auto mt-[30px] '>
                            <form action='' className='grid gap-[20px] sm:grid-cols-[70%_auto] grid-cols[1]'>
                                <input type='text' placeholder='Email Adress' className=' h-[50px] border-[1px] border-[#ccc] bg-transparent pl-[20px]'></input>
                                <button className='bg-[red] text-[25px] text-white rounded-[5px] px-[10px] py-[7px] hover:bg-[rgb(193,17,25)] duration-300 font-bold'>Get Started ></button>
                            </form>
                        </div>
                </div>
            </section>
            {/* faq section end */}    

            {/* footer section start */}  
            <footer className='w-[100%] bg-[black] border-t-[7px] border-t-[#605d5d] sm:py-[60px] py-[50px]'>
                <div className='max-w-[1170px] mx-auto px-[15px] text-white text-[20px]'>
                    <h3 className='text-[#ccc]'>Questions? Call <a className='underline' href="tel:000-800-919-1694">000-800-919-1694</a></h3>
                    <div className='py-30px grid sm:grid-cols-3 grid-cols-1'>
                        <div>
                            <ul className='text-[#ccc]'>
                                <li className='mb-[10px]'><a className='underline' href='#'>FAQ</a></li>
                                <li className='mb-[10px]'><a className='underline' href='#'>Investor Relations</a></li>
                                <li className='mb-[10px]'><a className='underline' href='#'>Privacy</a></li>
                                <li className='mb-[10px]'><a className='underline' href='#'>Speed Test</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul className='text-[#ccc]'>
                                <li className='mb-[10px]'><a className='underline' href='#'>FAQ</a></li>
                                <li className='mb-[10px]'><a className='underline' href='#'>Investor Relations</a></li>
                                <li className='mb-[10px]'><a className='underline' href='#'>Privacy</a></li>
                                <li className='mb-[10px]'><a className='underline' href='#'>Speed Test</a></li>
                            </ul>                        
                        </div>
                        <div>
                            <ul className='text-[#ccc]'>
                                <li className='mb-[10px]'><a className='underline' href='#'>FAQ</a></li>
                                <li className='mb-[10px]'><a className='underline' href='#'>Investor Relations</a></li>
                                <li className='mb-[10px]'><a className='underline' href='#'>Privacy</a></li>
                                <li className='mb-[10px]'><a className='underline' href='#'>Speed Test</a></li>
                            </ul>                            
                        </div>
                    </div>
                    <div>
                        <div className='relative'>
                            <i className="absolute text-white fa-solid fa-globe top-2.5 left-1"></i>
                            <select name='' id='' className='bg-[black] text-white border-[1px] border-[white] sm:p-[5px_25px] p-[5px_20px] rounded-[5px]'>
                                <option value="">English</option>
                                <option value="">Hindi</option>
                            </select>
                        </div>   
                        <h3 className='text-[#ccc] pt-[20px]'>Netflix India</h3>                     
                    </div>
                </div>
            </footer>                            
            {/* footer section end */}  
        </div>
    )
}
