import React from 'react';
import Image from 'next/image';

const bandIMG = "/Giorgi_band.jpg";

const Music = () => {
  return (
    <div className='relative flex container min-h-screen justify-center'>
      <Image
        className='fixed rounded-lg'
        src={bandIMG}
        alt="Giorgi Band"
        layout='responsive'
        objectFit='cover'
        width={100} 
        height={50} 
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-y-7/8 -translate-x-1/2 w-full md:w-3/4 h-auto bg-black bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
        <p className="text-lg md:text-2xl indent-12 h-auto text-slate-900 leading-loose">
          The Most Recent of Mike's many musical projects is a 
          band called <a className='text-indigo-500' href='https://www.facebook.com/its.giorgi/'>Giorgi</a>,
          Big! Catchy! Chorus! - fueled rock that only Florida can produce.
        </p>
        <p className="text-lg md:text-2xl indent-12 h-auto text-slate-900 leading-loose">
          The Most Recent of Mike's many musical projects is a 
          band called <a className='text-indigo-500' href='https://www.facebook.com/its.giorgi/'>Giorgi</a>,
          Big! Catchy! Chorus! - fueled rock that only Florida can produce.
        </p>
        <p className="text-lg md:text-2xl indent-12 h-auto text-slate-900 leading-loose">
          The Most Recent of Mike's many musical projects is a 
          band called <a className='text-indigo-500' href='https://www.facebook.com/its.giorgi/'>Giorgi</a>,
          Big! Catchy! Chorus! - fueled rock that only Florida can produce.
        </p>
        <p className="text-lg md:text-2xl indent-12 h-auto text-slate-900 leading-loose">
          The Most Recent of Mike's many musical projects is a 
          band called <a className='text-indigo-500' href='https://www.facebook.com/its.giorgi/'>Giorgi</a>,
          Big! Catchy! Chorus! - fueled rock that only Florida can produce.
        </p>
        <p className="text-lg md:text-2xl indent-12 h-auto text-slate-900 leading-loose">
          The Most Recent of Mike's many musical projects is a 
          band called <a className='text-indigo-500' href='https://www.facebook.com/its.giorgi/'>Giorgi</a>,
          Big! Catchy! Chorus! - fueled rock that only Florida can produce.
        </p>
        <p className="text-lg md:text-2xl indent-12 h-auto text-slate-900 leading-loose">
          The Most Recent of Mike's many musical projects is a 
          band called <a className='text-indigo-500' href='https://www.facebook.com/its.giorgi/'>Giorgi</a>,
          Big! Catchy! Chorus! - fueled rock that only Florida can produce.
        </p>
      </div>
    </div>
  );
};

export default Music;