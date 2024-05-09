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
    {name: 'Home', href:'/', current: false},
    { name: 'About', href: '/about', current: false },
    { name: 'Members', href: '/team', current: false },
    { name: 'Events', href: '/events', current: false },
    { name: 'Committees', href: '/committees', current: false },
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
    <Disclosure as="nav" className="sticky top-0 z-10 bg-gray-800">
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

            </div>
          </div>
          </div>
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
