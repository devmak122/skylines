import React from 'react';
import { motion } from 'framer-motion';
import con_bg from "../assets/images/con_bg.png";
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm();

  const apiKey ="62805f85-5dbe-464b-bfc3-1fc755d8c495";

  const { submit: onSubmit } = useWeb3Forms({
    access_key: apiKey,
    settings: {
      from_name: "Acme Inc",
      subject: "New Contact Message from your Website",
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    },
  });

  const [isSuccess, setIsSuccess] = React.useState(false);
  const [message, setMessage] = React.useState('');

  return (
    <div className='font-semibold overflow-hidden  '>
      <div
        className="w-full bg-black bg-opacity-50  justify-center mobile:bg-center mobile:bg-cover bg-cover bg-no-repeat flex flex-col  mb-36 items-center"
        style={{ backgroundImage: `url(${con_bg})`, height: '50vh' }}      >
        <h1 className="text-white text-center flex items-center justify-center font-roboto font-bold text-6xl">
        Contact Us
        </h1>
      </div>
      <div className="relative   font-poppins flex flex-col mobile:mb-10  md:flex-row justify-center items-start mt-10 space-y-10 md:space-y-0 md:space-x-11 px-10 md:px-0">
        <div
          className="relative bg-white-100 mb-24 shadow-xl rounded-lg p-4 text-center md:w-2/6 w-full flex flex-col justify-between h-auto z-10"
         
        >
          <div className="absolute top-[-10px] left-[-25px] w-16 h-16 bg-green-500 opacity-50 rounded-md z-0"></div>
          <p className="text-black my-5 mx-6 ">
            Empowering your power transmission needs. For custom transformer solutions or partnership opportunities, <br/>please get in touch with us below:
          </p>
          <div className="flex flex-col  space-y-4  font-medium rounded-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="hidden" name="access_key" value={apiKey} />
              
              <label className="text-black flex items-start mt-7 " htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder=""
                className={`w-full p-2 border border-black rounded mt-1 bg-white text-black placeholder-black shadow-md text-sm ${errors.name ? 'border-red-600' : ''}`}
                {...register("name", {
                  required: "Full name is required",
                  maxLength: 80,
                })}
              />
              {errors.name && <div className="mt-1 text-red-600"><small>{errors.name.message}</small></div>}
              
              <label className="text-black flex items-start mt-7 " htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder=""
                className={`w-full p-2 border border-black rounded mt-1 bg-white text-black placeholder-black shadow-md text-sm ${errors.email ? 'border-red-600' : ''}`}
                {...register("email", {
                  required: "Enter your email",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Please enter a valid email",
                  },
                })}
              />
              {errors.email && <div className="mt-1 text-red-600"><small>{errors.email.message}</small></div>}
              
              <label className="text-black flex items-start mt-7 " htmlFor="mobile">Mobile Number</label>
              <input
                type="text"
                id="mobile"
                placeholder=""
                className={`w-full p-2 border border-black rounded mt-1 bg-white text-black placeholder-black shadow-md text-sm ${errors.mobile ? 'border-red-600' : ''}`}
                {...register("mobile")}
              />
              
              <label className="text-black flex items-start mt-7 " htmlFor="message">Your Message</label>
              <textarea
                id="message"
                placeholder=""
                className={`w-full p-2 border border-black rounded mt-1 bg-white text-black placeholder-black shadow-md text-sm h-24 ${errors.message ? 'border-red-600' : ''}`}
                {...register("message", {
                  required: "Enter your Message",
                })}
              />
              {errors.message && <div className="mt-1 text-red-600"><small>{errors.message.message}</small></div>}
              
              <button
                type="submit"
                className={`w-full p-2 mt-7 bg-orange-500 text-white rounded ${isSubmitting ? 'cursor-not-allowed' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <svg
                    className="w-5 h-5 mx-auto text-white animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
            
            {isSubmitSuccessful && isSuccess && (
              <div className="mt-3 text-xl text-center text-blue-900 font-bold">
                {message || "Success. Message sent successfully"}
              </div>
            )}
            {isSubmitSuccessful && !isSuccess && (
              <div className="mt-3 text-sm text-center text-red-500">
                {message || "Something went wrong. Please try later."}
              </div>
            )}
            <div className="absolute bottom-[-20px] left-[-20px] w-16 h-16 border-b-[8px] border-l-[8px] border-orange-500"></div>
          </div>
        </div>
        <div
          className="relative shadow-2xl mobile:mb-20  my-10 p-[1px] md:w-1/3 w-full h-auto flex items-center justify-center z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="absolute top-[-20px] right-[-20px] w-12 h-12 border-t-[8px] border-r-[8px] border-orange-500"></div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58804.97078721449!2d73.18332905968675!3d22.289755603188707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc540ecc9deef%3A0xd4c2855a43401060!2sSkyline%20Enterprises%2C%20Raama%20Emperro%2C%202nd%20Floor%2C%20Behind%20Shell%20Petrol%20Pump%2C%20Vadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1688821948504!5m2!1sen!2sin"
            width="100%"
            height="642px"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Skyline Enterprises Location"
            className='shadow-2xl rounded-lg '
          ></iframe>
          <div className="absolute bottom-[-20px] right-[-20px] w-16 h-16 border-b-[8px] border-r-[8px] border-orange-500"></div>
        </div>
        {/* Background circles */}
        <motion.div
          className="absolute top-[20px] left-[-90px] w-24 h-24 bg-green-500 rounded-full opacity-20 overflow-x-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.6 }}
        ></motion.div>
        <motion.div
          className="absolute top-[20px] right-[-30px] w-24 h-24 bg-green-500 rounded-full opacity-20 overflow-x-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.8 }}
        ></motion.div>
        <motion.div
          className="absolute bottom-[-30px] left-[-90px] w-24 h-24 bg-green-500 rounded-full opacity-20 overflow-x-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 1 }}
        ></motion.div>
        <motion.div
          className="absolute bottom-[-30px] right-[-50px] w-24 h-24 bg-green-500 rounded-full opacity-20 overflow-x-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 1
 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
