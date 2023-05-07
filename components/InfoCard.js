import { HeartIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import Image from 'next/legacy/image';
const InfoCard = ({
  img,
  location,
  star,
  price,
  total,
  title,
  description,
}) => {
  return (
    <div className='flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition: duration-200 ease-out first:border-t'>
      <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 '>
        <Image
          alt='Image'
          src={img}
          layout='fill' // required
          objectFit='cover' // change as you like
          className='rounded-2xl'
        />
      </div>
      <div className='flex flex-col flex-grow pl-5'>
        <div className='flex justify-between'>
          <p>{location}</p>
          <HeartIcon className='h-7 cursor-pointer' />
        </div>
        <h4 className='text-xl'>{title}</h4>
        <div className='border-b w-10 pt-2'></div>
        <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
        <div className='flex justify-between pt-5'>
          <p className='flex item-center'>
            <StarIcon className='h-5 text-red-400' />
          </p>
          <div>
            <p className='text-lg font-semibold pb-2 lg:text-2xl'>{price}</p>
            <p className='text-right font-extralight'>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
