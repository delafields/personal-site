import { Fragment, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { GiHamburgerMenu } from "react-icons/gi";
import SocialLinks from './SocialLinks';

const solutions = [
  {name: 'home', href: '/'},
  {name: 'projects', href: '/projects'},
  {name: 'shop', href: '/shop'},
  {name: 'tunes', href: '/tunes' }
];

export const Nav = () => {
  // https://stackoverflow.com/questions/71893935/make-tailwindcss-navbar-component-close-on-scroll
  const [open, setIsOpen] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setIsOpen(false);
      }
      else if (window.scrollY < lastScrollY) {
        setIsOpen(true);
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
  
      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [controlNavbar]);

  return (
    <Popover className={ (open ? 'bg-white sticky top-0 z-50 visible transition-2 ease-in-out delay-150 duration-300' : 'invisible')}>
      <div className='px-6'>
        <div className='flex justify-between py-6'>
          <Link href='/'>super secret workshop</Link>
          <Popover.Group as='nav' className='space-x-10'>
            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={open ? 'text-myred focus:outline-none mt-1' : 
                      'text-black focus:outline-none mt-1'}
                  >
                    <GiHamburgerMenu />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'
                  >
                    <Popover.Panel className='absolute z-10 px-2 mt-4 -right-8 w-80'>
                      <div className='overflow-hidden rounded-lg shadow-lg'>
                        <div className='relative flex flex-wrap justify-center gap-6 p-4 bg-white'>
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className='flex items-start p-3 -m-3 rounded-lg hover:bg-gray-5'
                            >
                              <p className='text-base font-medium text-myred hover:opacity-60'>
                                {item.name}
                              </p>
                            </a>
                          ))}
                          <SocialLinks/>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
        </div>
      </div>
    </Popover>
  );
};