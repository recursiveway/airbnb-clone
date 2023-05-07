import Image from 'next/image';
import {
  MagnifyingGlassCircleIcon,
  GlobeAltIcon,
  Bars3Icon,
  UserCircleIcon,
  UserIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';
const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setnumberOfGuests] = useState(1);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };
  const handleSelect = (range) => {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  };
  const cancel = () => {
    setSearchInput('');
  };
  const router = useRouter();

  return (
    <header
      className={`sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md px-5 py-5 md:px-10`}>
      <div
        onClick={() => router.push('/')}
        className={`relative flex items-center h-10 cursor-pointer my-auto `}>
        <Image
          alt='image'
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      <div
        className={`flex items-center justify-between md:border-2 rounded-full py-2 p-5 md:shadow-sm`}>
        <input
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          className={`pl-5 bg-transparent focus:outline-none text-sm test-gray-600`}
          type='text'
          placeholder={placeholder || 'Start your Search'}
        />
        <MagnifyingGlassCircleIcon
          className={`hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer `}
        />
      </div>
      <div className={`flex items-center justify-end text-gray-500 cur`}>
        <p className='hidden md:inline'>Become a Host</p>
        <GlobeAltIcon class='h-6  text-gray-500 pl-2 pr-2' />
        <div className='flex  items-center space-x-2 border-2 p-2 rounded-full cursor-pointer'>
          <Bars3Icon className='h-6 w-6 text-gray-500' />
          <UserCircleIcon class='h-6 w-6 text-gray-500' />
        </div>
      </div>
      {searchInput && (
        <div className='flex flex-col  col-span-3 mx-auto '>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5861']}
            onChange={handleSelect}
          />

          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl flex-grow font-semibold'>
              Number of Guests
            </h2>
            <UsersIcon className='h-5' />
            <input
              type='number'
              value={numberOfGuests}
              onChange={(e) => setnumberOfGuests(e.target.value)}
              min={1}
              className='w-12 pl-2 text-lg outline-none text-red-400'
            />
          </div>
          <div className='flex'>
            <button onClick={cancel} className='flex-grow text-gray-500'>
              Cancel
            </button>
            <button
              onClick={() => {
                router.push({
                  pathname: '/search',
                  query: {
                    location: searchInput,
                    startDate: startDate.toString(),
                    endDate: endDate.toString(),
                    numberOfGuests,
                  },
                });
              }}
              className='flex-grow text-red-500'>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
