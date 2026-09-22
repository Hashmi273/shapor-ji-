import React,{useEffect,useState} from 'react';
import {Link,useLocation} from 'react-router-dom';
import {Menu,X,ArrowUpRight} from 'lucide-react';
interface NavbarProps{onOpenEnquiryModal?: (item?:string)=>void}
export default function Navbar({onOpenEnquiryModal}:NavbarProps){
const [open,setOpen]=useState(false);const [scrolled,setScrolled]=useState(false);const location=useLocation();
useEffect(()=>{const f=()=>setScrolled(window.scrollY>24);window.addEventListener('scroll',f,{passive:true});return()=>window.removeEventListener('scroll',f)},[]);
useEffect(()=>setOpen(false),[location.pathname,location.hash]);
const nav=[{label:'Projects',to:'/products'},{label:'Our Story',to:'/about'},{label:'Experience',to:'/fragrances'},{label:'Contact',to:'/contact'}];
return <header className={`fixed inset-x-0 top-0 z-[60] border-b border-[#ded8ce]/70 bg-[#fbfaf7]/95 backdrop-blur-xl transition duration-300 ${scrolled?'shadow-[0_8px_28px_rgba(35,34,31,.06)]':''}`}>
<div className="mx-auto flex h-[104px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
<Link to="/" className="flex items-center gap-3">
<div className="flex h-12 w-12 items-center justify-center bg-[#2c2c28] text-lg font-semibold tracking-tight text-white">SP</div>
<div className="hidden sm:block leading-tight"><div className="text-sm font-semibold tracking-[-.02em]">Shapoorji Pallonji</div><div className="text-[10px] uppercase tracking-[.17em] text-[#7a7b74]">Real Estate</div></div>
</Link>
<nav className="hidden lg:flex items-center gap-1">{nav.map(item=><Link key={item.to} to={item.to} className="px-4 py-2.5 text-[13px] font-medium text-[#4e514b] transition hover:text-[#1f211d]">{item.label}</Link>)}</nav>
<div className="hidden lg:flex items-center gap-4">
<a href="tel:+918700983465" className="text-xs font-medium text-[#686a63] hover:text-[#20221f]">+91 87009 83465</a>
<button onClick={()=>onOpenEnquiryModal?.('Residential Enquiry')} className="inline-flex items-center gap-2 bg-[#262723] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#3a3b34]">Book a conversation<ArrowUpRight className="h-3.5 w-3.5"/></button>
</div>
<div className="flex items-center gap-2 lg:hidden">
<button onClick={()=>onOpenEnquiryModal?.('Residential Enquiry')} className="bg-[#262723] px-3 py-2 text-xs font-semibold text-white">Enquire</button>
<button onClick={()=>setOpen(!open)} className="p-2 text-[#262723]" aria-label="Toggle navigation">{open?<X className="h-6 w-6"/>:<Menu className="h-6 w-6"/>}</button>
</div>
</div>
{open&&<div className="border-t border-[#ded8ce] bg-[#fbfaf7] px-5 py-5 lg:hidden"><div className="space-y-1">{nav.map(item=><Link key={item.to} to={item.to} className="block px-3 py-3 text-sm font-medium text-[#31332f] hover:bg-[#eeeae2]">{item.label}</Link>)}</div><div className="mt-4 border-t border-[#ded8ce] pt-4 text-sm text-[#696b64]"><a href="tel:+918700983465">+91 87009 83465</a></div></div>}
</header>
}