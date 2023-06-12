// import NewsletterForm from "./NewsletterForm"
import { forwardRef, useState } from "react";
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';


// const Alert = forwardRef(function Alert(props, ref) {
//     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
//   });

  
function Newsletter() {
    const [email, setEmail] = useState('');
    const [open, setOpen] = useState(false);
    const [done, setDone] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };



    // const addEmail = (e) => {
    //     e.preventDefault()
    //     db.collection('newsletter').add({
    //         email:email,
    //     })

    //     console.log('email succesfullly added to firebase database!')
    //     setOpen(true);
    //     setEmail('');

    // }
      
    // console.log(email)


    const handleAdd = (e) =>{
        // The default in this case is the page reloading.
        console.log("done....added")

    }
    return (
        <div id="newsletter" className="md:flex mb-5">


        {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Your email was succesfully added. We'll keep in touch!
            </Alert>
      </Snackbar> */}

            {/* <div className="flex gap-5 mx-32 -mb-32  -z-10 justify-center">
                <Image src="/images/coffee-capuccino-2.jpg" height={400} width={400}  objectFit="cover"/>

               

                <Image src="/images/coffee-capuccino-2.jpg" height={400} width={400} objectFit="cover"/>

            </div> */}
    {/* Newsletter */}
  
                {/* <div className="flex justify-between ml-[525px] mr-[500px] -mb-36">
                    <StarIcon className="h-16 text-coolYellow"/>
                    <StarIcon className="h-36 text-coolYellow pb-10"/>
                    <StarIcon className="h-16 text-coolYellow"/>

                </div> */}
            <div className=" bg-black rounded-[4px] md:px-20 md:pt-16 px-10 py-16 md:pb-10 flex-col  mt-36 z-auto  mx-auto ">
                {/* <img className="-z-[10] h-auto absolute w-auto" src="https://cdn.discordapp.com/attachments/839784544798638090/1105585019411505233/pexels-pixabay-164634.jpg" alt="newsletter background image"/> */}
                <div className="flex justify-center">
                    <h1 className="text-yellow-600 text-3xl font-serif font-extrabold">JOIN OUR MAILING LIST</h1>

                </div>

                <div className="">
                    <p className="text-gray-400 mt-5 text-sm leading-6">Sign up for our newsletter to remain up to date with the latest coffee and food related news</p>
                </div>

                <div className="flex justify-center mt-10">
                    <input value={email} onChange={(e) => setEmail(e.target.value)}className="p-1 bg-transparent font-serif md:w-[300px] text-gray-100 border-b border-white focus:outline-none focus:border-coolYellow transform transition duration-300 ease-out" type="email" placeholder="Enter your email here"/>
                </div>
                
                <div className="flex justify-center mt-10">
                    <button  onClick={email && handleAdd} className="bg-coolYellowFocus border border-coolYellowFocus p-3 hover:bg-transparent font-serif font-extrabold text-darkBrown hover:text-coolYellow transform transition duration-300 ease-out active:scale-90">SUBMIT</button>
                </div>

          
            </div>  
         
        </div>
    )
}

export default Newsletter