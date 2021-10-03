import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { NextSeo } from 'next-seo'

import LinkWrapper from 'components/LinkWrapper'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My next trips"
        description="A simple project to show my upcoming trips that I will do one day."
        canonical="https://my-next-trips.vercel.app/" // url real do site
        openGraph={{
          url: 'https://my-next-trips.vercel.app/', // url real do site
          title: 'My next trips',
          description:
            'A simple project to show my upcoming trips that I will do one day.',
          images: [
            {
              url: 'nome-do-site/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'My next trips'
            }
          ],
          site_name: 'My next trips'
        }}
      />
      <LinkWrapper href={'/about'}>
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
