import React from 'react'
import Image from 'next/image'
import {CiTwitter} from 'react-icons/ci'

const Page = () => {
  return (
    <main >
      <div className='flex bg-orange-100  rounded-bl-[130px]'>
        <div className='w-[70%] h-screen '>
          <div className='bg-orange-100  px-20 h-[100vh]  rounded-bl-[130px]'>
            <header className='  w-[100%]'>
              <div className=' w-[100%] flex bg-orange-100 mb-5 '>
                <Image
                  src="/market.png"
                  alt="market"
                  width={200}
                  height={30}
                  priority
                />
                <div className='mt-6 text-[25px] flex list-none gap-8 item-center  ml-24 '>
                  <li><a href='Solutions'>Solutions</a></li>
                  <li>   <a href='Contact us'>Contact us</a></li>
                  <li><a href='About us'>About us</a></li>
                </div>
              </div>
            </header>
            <div className='text-[64px]'>
              <p>Food intelligence for all,<br></br>
                market data at your <br></br>
                fingertips.</p></div>
            <p className='text-[20px] mt-8'>Make smart decisions with
              our food data. Tap into <br></br>our real-time, daily, and historical food market data<br></br>
              pipeline.</p>
            <button className='h-16 w-80 bg-black text-white text-[23px] rounded-lg mt-[200px]'>Get started</button>
          </div>
        </div>

        <section className='w-[30%] h-[100vh]'>
          <div className='bg-green-500 w-[100] rounded-tl-[130px] h-[100vh] -mb-36 '>
            <header className='pt-6 ml-20'>

              <button className='py-2 px-6 rounded-lg text-white bg-black text-[23px]'>Sign-up</button>
             <button className='py-2 px-6 rounded-lg text-black ml-4 text-[23px]'> Login</button>

            </header>
            <div className='mr-[7rem] mt-14'>
              <Image
                src="/apple.png"
                alt="apple"
                className='h-[500px w-96] -ml-[80px] -mb-36'
                width={800}
                height={1300}
                priority
              />
            </div>
          </div>
        </section>

      </div>
      <div> 
      <section className='flex'>
        <div className='mt-20 px-20'>
          <h1 className='text-[50px]'>Explore the latest live <br></br> trends on food data</h1>
          <p className='text-[22px]'>We constantly track and update in real-<br></br>time food market data, enabling informed<br></br> decisions.</p>
        </div>
        <div>
                <input className='mt-[15rem] outline-0 px-20 ml-[40rem]' placeholder='try Yam or Lagos or North east ' type="text" />
                <hr className='p-[1px] w-[50rem] ml-[20rem] justify-center bg-gray-300'/>
        </div>
      </section>
      <div className='flex mt-16 px-[4rem] py-3 gap-[250px] h-[5.5rem] w-[95%] ml-10 bg-orange-200 items-center rounded-tl-[10rem] rounded-tr-[10rem]'>
    <h1><strong>Name</strong></h1>
    <div className='flex gap-[120px]'> 
    <h1><strong>Last Price (N)</strong></h1>
    <h1><strong>24h Change</strong></h1>
    </div>
    <div className='flex gap-[120px]'> 
    <h1><strong>State</strong></h1>
    <h1><strong>Region</strong></h1>
    </div>
    <h1><strong>Market</strong></h1>
      </div>
      <div className='flex h-[6rem] w-[70rem] text-[23px]  mt-32 ml-96 bg-black justify-center gap-2 rounded-tl-[10rem] rounded-br-[10rem]'>
        <div> 
          <h1 className='justify-center text-white mt-5'>Advertise your produce with us.</h1>
       </div>
       <div>
       <h1 className='text-orange-200  mt-5'><a href='Click here'>Click here</a></h1>
       </div>
        </div>
        </div>
        <section className='flex mt-[140px] bg-red-600  '>
  
          <div className='w-[35%] h-[100vh] '>
          <div className='bg-red-600 w-[100%] h-[100%] rounded-tl-[130px]   '>
          <div className='  mr-[7rem] '>
        
              <Image
              
                src="/pepper.png"
                alt="apple"
                className='h-[500px ] ml-72 mr-[-8rem] absolute pt-72  '
                width={500}
                height={100}
                priority
              />
            </div>
            </div>
            </div>

          <div className='w-[65%] h-[100vh]'>
            <div className='bg-orange-100 w-[100%] h-[100%] ml-[120] py-40 pl-[25rem] '>
              <h1 className='text-[70px]  '>Ready to build a smart<br></br> portfolio for food<br></br> market data?</h1>
              <p className='mt-10 text-[25px] '>Create your account, subscribe and see how market data helps your<br></br> business performance with informed decision making.</p>
              <button className='h-16 w-80  bg-black text-white text-[23px] rounded-lg mt-[150px]'>Get started</button>
            </div> 
            </div>
          
        </section >
        
        <section className='mt-24 h-[100%]'>
          <div className='text-center text-[23px]'>
            <h1>Subscribe to our monthly newsletter to stay connected to our activities, get insights and <br></br> updates on what's happening with everyday food data.</h1>
          </div>
          <form
          action=""
          className="ml-[35%] w-[30%]  mt-[60px] border-[#ff5446] border-[1px]"
        >
          <input
            placeholder="E-mail address"
            type="text"
            className="ml-4 my-3 focus:outline-0 border-t-white border-b--white"
          />
          <button className="bg-black text-white ml-28 px-16 rounded-sm my-3 py-2">
            Subscribe
          </button>
        </form>
          <footer className='flex mt-24 gap-[12rem] px-[8rem] '>
            <div>
            <Image
                  src="/market.png"
                  alt="market"
                  width={200}
                  height={30}
                  priority
                />
            </div>
            <div className='leading-[3rem]'> 
              <h1 className='text-[24px]'><strong>Contact</strong></h1>
              <p className=' text-green-500 text-[23px]'>info@marketdata.com ,<br></br>operations@marketdata.ng</p>
            </div>
            <div  className="flex gap-4 mt-2 cursor-pointer">
            <CiTwitter className=''/>
            </div>
            <div className='leading-[3rem]'>
              <h1 className='text-[24px]'><strong>Lagos</strong></h1>
              <p className='text-[23px]'>21, Oremeji Street,<br></br> behind toll gate,<br></br> Victoria Island, Lagos.</p>
            </div>
            <div className='leading-[3rem]'>
              <h1 className='text-[24px]'><strong>Company</strong></h1>
              <a className='text-[23px]' href='Solutions'>Solutions</a><br></br>
              <a className='text-[23px]' href='About'>About</a><br></br>
              <a className='text-[23px]' href='Terms of use'>Term of use</a><br></br>
              <a className='text-[23px]' href='Privacy Policy'>Privacy Policy</a><br></br>
              <a className='text-[23px]' href='Dispute resolution'>Dispute resolution</a>
            </div>
          </footer>
          
          <div className="bg-white mt-24">
        <hr className="ml-[550px] p-[1px] w-[40%] bg-red-600" />
        <h1 className="bg-white text-center pb-20">
          Copyright © 2021 Market Data Limited - RC234523. Built within Lagos.💖
        </h1>
      </div>
        </section>
    </main>


  )
}

export default Page