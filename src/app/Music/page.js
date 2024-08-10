// import React from 'react';

// const imgURL = "https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/337147520_1155640452500053_7109786030305892488_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=iXNtAatAQxEQ7kNvgFgD-QQ&_nc_ht=scontent-mia3-1.xx&oh=00_AYBcRFBx4PmFzYYt5t45zsY1mzZXQlox9-koUc-DOtV2yA&oe=66BCF821"

// const Music = () => {
//     return (
//         <div className='flex min-h-screen justify-center' 
//             style={{ 
//                 backgroundImage: `url(${imgURL})`,
//                 // backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat',
//                 backgroundSize: 'cover',
//                 position: 'relative',
//                 marginTop: '15vh'
//                 }} >
//             <p className="text-3xl indent-12 w-3/4 h-auto text-slate-900 bg-opacity-10 backdrop-blur-lg rounded-lg leading-loose">
//                 The Most Recent of Mike's many musical projects is a 
//                 band called <a className='text-indigo-500' href='https://www.facebook.com/its.giorgi/'>Giorgi</a>,
//                 Big! Catchy! Chorus! - fueled rock that only Florida can produce.
//             </p>
//         </div>
//     );
// };

// export default Music;
import React from 'react';

const imgURL = "https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/337147520_1155640452500053_7109786030305892488_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=iXNtAatAQxEQ7kNvgFgD-QQ&_nc_ht=scontent-mia3-1.xx&oh=00_AYBcRFBx4PmFzYYt5t45zsY1mzZXQlox9-koUc-DOtV2yA&oe=66BCF821"

const Music = () => {
    return (
        <div className='flex min-h-screen justify-center' 
            style={{ 
                backgroundImage: `url(${imgURL})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                position: 'relative',
                marginTop: '15vh'
                }} >
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6">
                <p className="text-3xl indent-12 w-full h-auto text-slate-900 leading-loose">
                    The Most Recent of Mike's many musical projects is a 
                    band called <a className='text-indigo-500' href='https://www.facebook.com/its.giorgi/'>Giorgi</a>,
                    Big! Catchy! Chorus! - fueled rock that only Florida can produce.
                </p>
            </div>
        </div>
    );
};

export default Music;