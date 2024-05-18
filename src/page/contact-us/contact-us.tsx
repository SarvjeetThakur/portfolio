import * as React from 'react'
import EmailSvgIcon from './email-svg'
import PhoneSvg from './phone-svg'
import Each from '@/components/ui/each'
import { Link } from 'react-router-dom'
import FbLogo from './fbLogo'
import LinkedinLogo from './linkedIn-logo'
import InstagramLogo from './instagram-logo'

const contactValue = [
    {
        icon: <EmailSvgIcon />,
        value: 'info@example.com',
        show: true,
    },
    {
        icon: <PhoneSvg />,
        value: '+158 996 888',
        show: true,
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' viewBox="0 0 368.16 368.16">
            <path d="M184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.288c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.296c5.096-7.728 12.144-20.912 15.72-29.4.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zM293.8 182.152c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.296c-1.84 2.792-2.424 2.792-4.264 0L88.696 208.952c-4.568-6.928-11.136-19.2-14.328-26.808-.136-.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z" data-original="#000000"></path>
            <path d="M184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z" data-original="#000000"></path>
        </svg>,
        value: '123 Street 256 House',
        show: false,
    },
];

const socialLinks = [
    {
        logo: <FbLogo />,
        link: '',
    },
    {
        logo: <LinkedinLogo />,
        link: '',
    },
    {
        logo: <InstagramLogo />,
        link: '',
    },
];

const INTEREST_IN=['Web design','Graphic design','Design system']
const ContactUs = () => {
    return (
        <>
            <div className="py-6 h-screen flex justify-center items-center">
                <div className="max-w-6xl mx-auto bg-[#2e0249] rounded-lg">
                    <div className=' pt-3 pl-3'>
                        <Link to={'/'} className='text-white' style={{ textShadow: 'white 0 0 7px' }} >Back</Link>
                    </div>
                    <div className="grid md:grid-cols-2 items-center gap-16 sm:p-10 p-4 font-[sans-serif]">
                        <div>
                            <h1 className="text-4xl font-extrabold text-white">Get in Touch</h1>
                            <p className="text-sm text-gray-400 mt-3">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>
                            <ul className="mt-12 space-y-8">
                                <Each of={contactValue} render={(item) => (
                                    item.show ? <li className="flex items-center">
                                        {item.icon}
                                        <span className="text-white text-sm ml-3">
                                            <strong>{item.value}</strong>
                                        </span>
                                    </li> : null
                                )} />
                            </ul>
                            <ul className="flex mt-12 space-x-4">
                                <Each of={socialLinks} render={(socialLink) => (
                                    <li className="bg-[#a91079] hover:bg-[#a91079e2] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                        <Link to={socialLink.link}>
                                            {socialLink.logo}
                                        </Link>
                                    </li>
                                )} />
                            </ul>
                        </div>
                        <div className="bg-gray-200 p-6 rounded-lg">
                            <p className="text-sm font-semibold text-[#333]">I'm interested in...</p>
                            <div className="space-y-4 max-lg:mt-4">
                                <Each of={INTEREST_IN} render={(interest,index)=>(
                                <button disabled={index !==0} type="button" className="px-4 py-2 rounded-md bg-[#a91079] text-white text-sm tracking-wider font-medium outline-none border-2 border-[#a91079] mr-4 disabled:bg-transparent disabled:text-gray-400 disabled:text-sm disabled:border-gray-300">{interest}</button>
                                )} />
                            </div>
                            <form className="mt-8 space-y-4 text-black">
                                <input type='text' placeholder='Name'
                                    className="w-full rounded-md py-3 px-4 text-sm outline-[#a91079]" />
                                <input type='email' placeholder='Email'
                                    className="w-full rounded-md py-3 px-4 text-sm outline-[#a91079]" />
                                <input type='text' placeholder='Subject'
                                    className="w-full rounded-md py-3 px-4 text-sm outline-[#a91079]" />
                                <textarea placeholder='Message'
                                    className="w-full max-h-[300px] rounded-md px-4 text-sm pt-3 outline-[#a91079]"></textarea>
                                <button type='button'
                                    className="text-white bg-[#a91079] hover:bg-[#a91079e2] font-semibold rounded-md text-sm px-4 py-3 flex items-center justify-center w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' className="mr-2" viewBox="0 0 548.244 548.244">
                                        <path fill-rule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clip-rule="evenodd" data-original="#000000" />
                                    </svg>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs