import React, { useState } from 'react'
import voteLogo from '../assets/vote.png';
import Link from "next/link";
import Image from "next/image";
import Hamburger from 'hamburger-react';
import WalletModal from './WalletModal';
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";


export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const walletAddress = useSelector((state: RootStateOrAny) => state.ConnectReducers.account); //* Get the wallet address from redux store *//
    console.log(walletAddress)
  return (
    <>
      <div className='bg-[#2d2a2a] w-full h-16 border-b-3 flex items-center py-8 px-3 vs:justify-between'>
        {/* logo */}
        <div className='logo cursor-pointer'>
          <Link href="/">
            <div className="logoContainer flex items-center gap-2">
              <Image src={voteLogo} height={40} width={40} />
              <span className="font-semibold text-xl text-gray-300 vs:text-lg">
                  ON-CHAIN-VOTE
              </span>
            </div>
          </Link>
        </div>

      {/* links */}
      <div className='links lg:flex vs:hidden  justify-end ml-auto'>

        <ul className='flex items-center text-gray-300 transition-all ease-linear duration-200 gap-8'>
          <li className='cursor-pointer hover:text-gray-50 transition-all ease-linear duration-200'>
            <Link href='/vote'>Vote</Link>
          </li>
          <li className='cursor-pointer hover:text-gray-50 transition-all ease-linear duration-200'>
            <Link href='/result'>Result</Link>
          </li>
          <li className='cursor-pointer hover:text-gray-50 transition-all ease-linear duration-200'>
            <Link href='/Candidates'>Candidates</Link>
          </li>

          {walletAddress ? (

            <button
            className="bg-blue-600 dark:bg-blue-800 dark:text-gray-200  vs:text-xs sm:text-base p-2 px-4 rounded-xl text-slate-100 font-bold relative overflow-hidden cursor-default"
            title="Wallet Address"
            >
              <div className="defaultBtn">
              {`${walletAddress.slice(0, 5)}....${walletAddress.slice(
                  -6,
                  -1
              )}`}
              </div>
            </button>
          ) : (
            <button
            onClick={() => setIsEnabled(true)}
            className='btn btn-primary mb-1'>
                Connect
            </button>
          )}

        </ul>

      </div>

      {/* Hamburger icon */}
      <div className="menuIcon inline-block text-gray-50  rounded-md mr-0 ml-auto lg:hidden">
            <Hamburger
                toggled={isOpen}
                onToggle={() => setIsOpen(!isOpen)}
                duration={0.4}
                rounded
                size={30}
            />
        </div>
        <WalletModal isEnabled={isEnabled} setIsEnabled={setIsEnabled} />
      {isEnabled ? <WalletModal isEnabled={isEnabled} setIsEnabled={setIsEnabled} /> : ""}
      </div>

      {/* Responsive navbar */}
      {isOpen ? (
        <div className="mt-1 rounded-md pb-3 pt-1  bg-[#2d2a2a] items-center  w-full shadow-2xl lg:hidden z-10">
          <ul className="p-5 text-xl space-y-4 text-gray-100">
                    <li
                        onClick={() => setIsOpen(false)}
                        className="cursor-pointer dark:hover:text-white hover:text-gray-900 transition-all ease-linear duration-200"
                    >
                        <Link href="/assets">Vote</Link>
                    </li>
                    <li
                        onClick={() => setIsOpen(false)}
                        className="cursor-pointer dark:hover:text-white hover:text-gray-900 transition-all ease-linear duration-200"
                    >
                        <Link href="/result">Result</Link>
                    </li>
                    <li
                        onClick={() => setIsOpen(false)}
                        className="cursor-pointer dark:hover:text-white hover:text-gray-900 transition-all ease-linear duration-200"
                    >
                        <Link href="/candidates">Candidates</Link>
                    </li>
                    {walletAddress ? (

                        <button
                        className="bg-blue-600 dark:bg-blue-800 dark:text-gray-200  vs:text-xs sm:text-base p-2 px-4 rounded-xl text-slate-100 font-bold relative overflow-hidden cursor-default"
                        title="Wallet Address"
                        >
                          <div className="defaultBtn">
                          {`${walletAddress.slice(0, 5)}....${walletAddress.slice(
                              -6,
                              -1
                          )}`}
                          </div>
                        </button>
                        ) : (
                        <button
                        onClick={() => setIsEnabled(true)}
                        className='btn btn-primary mb-1'>
                            Connect
                        </button>
                        )}
          </ul>
        </div>
      ) : ("")}


    </>
  );
}
