import { LayoutGrid } from '@/components/ui/layout-grid'
import { ParallaxScroll } from '@/components/ui/parallax-scroll'
import { useParams } from 'next/navigation'
import React from 'react'
const cards = [
  {
    id: 1,
    title: "Mugisha's Wedding",
    date: "2023-12-12",
    image:['https://picsum.photos/200?random=1',
      'https://picsum.photos/200?random=2','https://picsum.photos/200?random=3'
    ,'https://picsum.photos/200?random=4','https://picsum.photos/200?random=5',
    'https://picsum.photos/200?random=6','https://picsum.photos/200?random=7','https://picsum.photos/200?random=8',
    'https://picsum.photos/200?random=9','https://picsum.photos/200?random=10','https://picsum.photos/200?random=11',
    'https://picsum.photos/200?random=12','https://picsum.photos/200?random=13','https://picsum.photos/200?random=14',
    'https://picsum.photos/200?random=15','https://picsum.photos/200?random=16','https://picsum.photos/200?random=17',
    'https://picsum.photos/200?random=18','https://picsum.photos/200?random=19','https://picsum.photos/200?random=20',
    'https://picsum.photos/200?random=21','https://picsum.photos/200?random=22','https://picsum.photos/200?random=23',
    'https://picsum.photos/200?random=24','https://picsum.photos/200?random=25','https://picsum.photos/200?random=26',],

  },
  {
    id: 2,
    title: "Major's Wedding",
    date: "2023-12-12",
    image:['https://picsum.photos/200?random=1',
      'https://picsum.photos/200?random=2','https://picsum.photos/200?random=3'
    ,'https://picsum.photos/200?random=4','https://picsum.photos/200?random=5',
    'https://picsum.photos/200?random=6','https://picsum.photos/200?random=7','https://picsum.photos/200?random=8',
    'https://picsum.photos/200?random=9','https://picsum.photos/200?random=10','https://picsum.photos/200?random=11',
    'https://picsum.photos/200?random=12','https://picsum.photos/200?random=13','https://picsum.photos/200?random=14',
    'https://picsum.photos/200?random=15','https://picsum.photos/200?random=16','https://picsum.photos/200?random=17',
    'https://picsum.photos/200?random=18','https://picsum.photos/200?random=19','https://picsum.photos/200?random=20',
    'https://picsum.photos/200?random=21','https://picsum.photos/200?random=22','https://picsum.photos/200?random=23',
    'https://picsum.photos/200?random=24','https://picsum.photos/200?random=25','https://picsum.photos/200?random=26',],
      
  },]
interface params {
  params: {
    id: string
  }
}
export default function Page(params: params) {
  // searchparams nextjs get id
  console.log('[params]', params.params.id)
  const { params: { id } } = params
  const mugisha = cards.find((card) => card.id === +id)
  console.log(mugisha?.image)

  return (
    <div className='py-20 w-full'>
      <h1 className='text-4xl font-bold text-center'>{mugisha?.title}</h1>
      <ParallaxScroll className='h-full' images={mugisha?.image ?? []} /> 
      {/* <LayoutGrid cards={mugisha?.images ?? []} /> */}
    </div>
  )
}
