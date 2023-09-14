"use client";
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function SearchBox() {
    const [search, setSearch] = useState ("");
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!search) return;
        router.push(`/search/${search}`);
    }

  return (
    <form onSubmit={handleSubmit} className='flex max-w-6xl mx-auto justify-between items-center px-5'>
      <input value={search} className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent border-b-2 border-gray-500 focus:border-amber-500 flex-1" onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search keywords..." />
     
      <button disabled={!search} type="submit" className='text-amber-600 disabled:text-gray-400 '>検索Search</button>
    </form>
  )
}
