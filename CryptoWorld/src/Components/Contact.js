import bgImg from '../Assets/img/bg-removebg.png'


export const Contact = () => {
    return (
      <div className="overflow-hidden bg-black relative" id = "contact">
        <img src={bgImg} alt="" srcset="" className = "hidden lg:block lg:absolute lg:right-0 lg:top-5 lg:opacity-30 lg:w-1/4 "/>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
              <p className="max-w-xl mb-6 text-base text-gray-200 md:text-4xl">
              GOT ANY QUESTIONS<br/>OR SUGGESTIONS?<br/>
              </p>
              <p className="max-w-xl mb-4 text-base text-gray-200 md:text-4xl">
              GET IN TOUCH WITH<br/> 
              US AND WE'LL GET <br/>
              BACK TO YOU
              </p>
            </div>
            
          </div>
        </div>
      </div>
    );
  };