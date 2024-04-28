'use client'
import React, {useState, Fragment} from 'react';
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function NavBar() {

  const [currentNavigation, setCurrentNavigation] = useState([
    {name: 'Home', href:'/', current: true},
    { name: 'About', href: '/about', current: false },
    { name: 'Members', href: '/members', current: false },
    { name: 'Events', href: '/events', current: false },
    { name: 'Chapters', href: '/chapters', current: false },
  ]);
  console.log(currentNavigation)
  //const [currentNavigation, setCurrentNavigation] = useState(navigation);

  const handleNavigationClick = (name) => {
    console.log("Clic en:", name);
    const updatedNavigation = currentNavigation.map((item) => ({
      ...item,
      current: item.name === name,
    }));
    console.log(updatedNavigation);
    setCurrentNavigation(updatedNavigation);
    console.log("holaas")
  };
  console.log(currentNavigation);
  return (
    <Disclosure as="nav" className="sticky top-0 z-10 bg-gradient-to-br from-black via-blue-700 to-blue-400">
      {({ open }) => (
        <>
          <div className=" top-0 z-50 bg-opacity-0 ">
          {/*contenedor para los botones, para que tengan su espacio */}
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            {/*contenedor para poner uno a lado del otro al icono con los botones */}
            <div className="relative flex h-16 items-center justify-between mr-4">
              {/*contenedor para las 3 rayitas que se muestra en dispositivos moviles*/}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Menu para el celar*/}
                <Disclosure.Button
                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5"/>
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true"/>
                  ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true"/>
                  )}
                </Disclosure.Button>
              </div>
              {/*Seccion del logo*/}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <a className="img-fluid" href="/">
                    <img
                        className="h-10 mr-4"
                        src="/images/logo.png"
                        alt=""
                    />
                  </a>
                </div>

              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {currentNavigation.map((item) => (

                      <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                              item.current ? 'bg-cyan-950 shadow-md text-white' : 'text-gray-300 hover:bg-blue-600 hover:text-white',
                              'rounded-md px-3 py-2 text-xl font-medium'
                          )}

                          aria-current={item.current ? 'page' : undefined}

                          onClick={() => handleNavigationClick( item.name )}
                      >
                        {item.name}
                      </Link>
                  ))}
                </div>
              </div>
              {/*Espacio solo para el boton*/}
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" className="theme-controller" value="synthwave"/>
                {/* sun icon */}
                <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24">
                  <path
                      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
                </svg>
                {/* moon icon */}
                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24">
                  <path
                      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
                </svg>
              </label>

            </div>
          </div>
          </div>
          {/*Panel para el movil*/}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 z-30">
              {currentNavigation.map((item) => (
                  <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                      onClick={() => handleNavigationClick( item.name )}
                        >
                            {item.name}
                        </Disclosure.Button>
                    ))}
                </div>
            </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
