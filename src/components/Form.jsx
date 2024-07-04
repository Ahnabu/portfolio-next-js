"use client"
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { Button } from './ui/button';

const Form = () => {
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('')
    const sendEmail =async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const message = form.message.value;
        console.log(name, email, message);
        if (!name || !email || !message) {
            setError('Please fill in all the required fields.')
            return;
        }
        const templateParams = {
            from_name: email,
            to_name: "Syed Md Abu Horaira",
            message: message
        }
    

        try {
            await emailjs.send(process.env.NEXT_PUBLIC_SERVICE_KEY, process.env.NEXT_PUBLIC_TEMPLATE_KEY, templateParams, {
                publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
            });
            console.log('Email sent successfully!');
            setSuccess('Your email has been successfully sent')
            form.reset();
        } catch (err) {
            console.error('Failed to send email:', err);
            setError(`Failed to send the email.${err.text} `)
           
        }
            
          
    };

    return (
        <div>
            
                <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl' onSubmit={sendEmail}>
                    <h3 className='text-4xl text-accent'>Let&apos;s work together</h3>
                    <p className='text-white/60' >
                        Passionate and dedicated junior web developer eager to bring your projects to life. Let&apos;s collaborate and create amazing, dynamic web applications together!
                    </p>
                    {/* input  */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
                        <input className="flex h-12 rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none" type="text" name='name' placeholder="Your Name" />

                        <input className="flex h-12 rounded-md border border-white/10 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-white/60 outline-none" type="email" name="email" placeholder="Email address" />

                    </div>
               
                   
                    {/* textarea  */}
                    <textarea
                    className="h-[200px] flex min-h-[80px] w-full rounded-md  border border-white/10 bg-primary  border-slate-200  px-3 py-2 text-sm ring-offset-white placeholder:text-white/60 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Type your message here"
                        name='message'
                    ></textarea>
                    <div className='mx-auto'>
                        {success && <p className='text-green-700 font-bold'>{success}</p>}
                        {error && <p className='text-red-600 font-bold'> {error}</p>}
                            </div>
                            
                          
                            {/* button  */}
                <button size='md' type="submit" className="max-w-40 border rounded-2xl border-accent bg-transparent text-accent hover:bg-accent hover:text-primary py-1 hover:text-bold">
                                Send Message
                            </button>
                       
            </form>
        </div>
    );
};

export default Form;