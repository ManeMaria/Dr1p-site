/* eslint-disable jsx-a11y/alt-text */
import Image, { ImageProps } from 'next/image';
import React from 'react';

const NextImage = (props: ImageProps) => {
  return (
    <div className='relative w-[100%] h-[100%]'>
      <Image fill style={{
        objectFit: 'cover',
        objectPosition: 'center'
      }} {...props} />
    </div>
  )
}

export default NextImage;