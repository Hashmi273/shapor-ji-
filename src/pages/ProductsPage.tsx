import React,{useState} from 'react';
import {ArrowRight,Check,MapPin,Search,X} from 'lucide-react';

interface Props{onOpenEnquiryModal?: (item?:string)=>void}

const projects=[
{name:'Runwal 7 Mahalaxmi',location:'Mahalaxmi, Mumbai',type:'Residential',image:'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85'},
{name:'Runwal The Central Park',location:'Pune, Maharashtra',type:'Residential',image:'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85'},
{name:'Runwal Auris',location:'Malad West, Mumbai',type:'Residential',image:'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85'},
{name:'Runwal Lands End',location:'Bandra, Mumbai',type:'Premium residential',image:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85'},
{name:'Runwal Woods',location:'Chembur, Mumbai',type:'Residential community',image:'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=85'},
{name:'Puranik’s Abitante Fiore',location:'Thane, Maharashtra',type:'Residential',image:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85'}
];

export default function ProductsPage({onOpenEnquiryModal}:Props){
const [q,setQ]=useState('');
const filtered=projects.filter(p=>[p.name,p.location,p.type].join(' ').toLowerCase().includes(q.toLowerCase()));
return <main className="bg-realestate-sand pb-24">
<section className="bg-[#e8e2d8] border-b border-realestate-line">
<div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
<p className="section-kicker">Projects</p><h1 className="section-title mt-4 max-w-3xl text-5xl sm:text-6xl">Addresses that become part of the city.</h1>
<p className="mt-6 max-w-2xl text-base leading-7">Explore selected residential destinations and use the details below as a starting point for your property enquiry.</p>
<div className="mt-8 flex max-w-xl items-center border border-[#cfc8bc] bg-white"><Search className="ml-4 h-4 w-4 text-[#7a7b74]"/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search projects or locations" className="w-full bg-transparent px-3 py-3.5 text-sm outline-none"/>{q&&<button onClick={()=>setQ('')} className="mr-3"><X className="h-4 w-4"/></button>}</div>
</div></section>
<div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
<div className="mb-6 flex items-center justify-between"><p className="text-sm text-realestate-muted">{filtered.length} project{filtered.length!==1?'s':''} shown</p><p className="text-xs uppercase tracking-[.14em] text-realestate-muted">Selected portfolio</p></div>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
{filtered.map((p,i)=><article key={p.name} className="group border border-realestate-line bg-white">
<div className="aspect-[4/3] overflow-hidden"><img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"/></div>
<div className="p-6"><p className="text-[10px] uppercase tracking-[.16em] text-realestate-muted">{p.type}</p><h2 className="mt-3 text-xl font-semibold">{p.name}</h2><div className="mt-4 flex items-center gap-2 text-sm text-realestate-muted"><MapPin className="h-4 w-4 text-realestate-brass"/>{p.location}</div>
<div className="mt-6 flex items-center justify-between border-t border-realestate-line pt-5"><span className="inline-flex items-center gap-2 text-xs text-realestate-muted"><Check className="h-4 w-4 text-realestate-brass"/>Property information</span><button onClick={()=>onOpenEnquiryModal?.(p.name)} className="inline-flex items-center gap-2 text-sm font-semibold">Enquire<ArrowRight className="h-4 w-4"/></button></div>
</div></article>)}
</div>
</div></main>
}
