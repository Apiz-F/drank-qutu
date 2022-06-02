import React, { FC } from 'react'
import { Container } from '@components/ui'
import { ArrowRight } from '@components/icons'
import s from './Hero.module.css'
import Link from 'next/link'
import Image from 'next/image'
import bgdrank from '../Hero/bottle.png'
import Reveal from 'react-awesome-reveal'

interface HeroProps {
  className?: string
  headline: string
}

import { fadeInLeftShorter, fadeInRightShorter } from '../Hero/keyframes'

function Hero({}): JSX.Element {
  return (
    <div className="bg-accent-9 border-b border-t border-accent-2">
      <Container>
        <div className="lg:min-h-screen flex flex-wrap items-center relative">
          <div className="container mx-auto px-4 lg:text-left text-center pb-0 pt-8 lg:py-32 block relative z-10 lg:z-0">
            <div className="lg:w-1/2 w-full lg:pr-20">
              <Reveal keyframes={fadeInLeftShorter} duration={1000} delay={200}>
                <h4 className="text-[#333] uppercase text-[2.6em]">
                  THE FUTURE OF SOCIAL DRINKING IS HERE
                </h4>
                <h3 className="text-[#333] uppercase font-bold text-[2.6em]">
                  AND ITS MIGHT GET ADDICTED
                </h3>
              </Reveal>
            </div>
            <div>
              <Link href="/search">
                <a className="flex items-center text-accent-0 pt-3 font-bold hover:underline cursor-pointer w-max-content">
                  Shop Now
                  <ArrowRight width="20" heigh="20" className="ml-1" />
                </a>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-5/12 lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:mt-0 -mt-8 overflow-hidden">
            <div className="pt-[125px] lg:pt-0 relative h-0 lg:h-full">
              <Image src={bgdrank} width={646} height={896} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
