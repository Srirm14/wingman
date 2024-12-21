'use client';

import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import Loading from './loading';


const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      redirect('/dashboard'); 
    }, 200);  

  }, []);

  return loading ? <Loading /> : null;
};

export default Page;
