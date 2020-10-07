import React, { useEffect } from "react";
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname == '/') {
      router.push('/docs')
    }
  });

  return (
    <div className="bg-white dark:bg-gray-900 h-screen">
      <div className="container text-base text-black dark:text-white">
        <h1 className="tet-black dark:text-white text-5xl text-center pt-10 mb-3">Blank home :), redirects to /docs</h1>
      </div>
    </div>
  )
}

export default Home;