 "use client"
 /* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { HeroParallax } from '@/components/connect-parallax'
import { ContainerScroll } from '@/components/container-scroll-animation'
import { InfiniteMovingCards } from '@/components/infinite-moving-cards'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { Card, CardTitle } from '@/components/ui/card'
import { clients, products } from '@/lib/constant'
import { motion } from 'framer-motion'
import axios from "axios";
import { CheckIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Cover } from '@/components/ui/cover'
import { Spotlight } from '@/components/ui/Spootlight'
import RequestComponents from '@/components/requestcomponets'
import { Icons } from '@/components/icon'
import Footer from '@/components/footer'

export default function Home() {
  const[star, setStar] = useState(0);
 
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.15,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  const fetchGithubData = () => {
    axios
      .get("https://api.github.com/repos/ezeslucky/BotNextUI")
      .then((response: { data: { stargazers_count: any } }) => {
        const star = response.data.stargazers_count;
        setStar(star);
      })
      .catch((error) => {
        console.error("Error fetching GitHub data:", error);
      });
  };

  useEffect(() => {
    fetchGithubData();
  }, []);
  return (
    
      
      <><motion.div
      className="flex items-center justify-center flex-col"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="gray" />
      <div className="pt-3"><RequestComponents /></div>
      <motion.div
        className="flex items-center justify-center mt-12"
        variants={staggerItem}
      >
        <div className="flex flex-col items-center">

          <h1 className="md:text-6xl text-2xl text-center md:mt-12 font-bold">
            Pick it up, place it in, and let the magic happen.<br /> {" "}
            <Cover>
              <span className=" dark:text-neutral-100">Elevate with Design Shine</span>
            </Cover>
          </h1>
          <p className="text-md md:text-lg text-center mt-6 mb-5 text-gray-400">
            Speed up your project&apos;s growth with ready-to-use UI {" "}
            <br /> components—saving time and enhancing quality.
          </p>
          <h1 className="text-center font-bold mt-6 text-2xl text-gray-400">
            Built With
          </h1>
          <InfiniteMovingCards
            className="md:mt-[3rem] mt-[-5px]"
            items={clients}
            direction="right"
            speed="slow" />

          <motion.div
            className="flex gap-6 flex-col md:flex-row items-center justify-center"
            variants={staggerItem}
          >
            <Link href="/docs">
              <Button size={"lg"} className="rounded-2xl">
                Explore Components
              </Button>
            </Link>
            <Link href="https://github.com/ezeslucky/BotNextUI.git">
              <Button
                className="gap-4 rounded-2xl"
                variant={"secondary"}
                size={"lg"}
              >
                <Icons.gitHub className="icon-class w-4 " />

              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="">
          <div className="md:ml-5 h-full w-full"></div>
        </div>
      </motion.div>


    </motion.div><motion.div className="mt-16" variants={staggerItem}>
        <Card className="hidden md:flex md:flex-col">
          <CardTitle className="mt-5 text-center mb-8">

          </CardTitle>
          <HeroParallax products={products}></HeroParallax>
        </Card>
      </motion.div></>
      
        
    
     
   
  )
}
