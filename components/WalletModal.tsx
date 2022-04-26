import { useRouter } from 'next/router';
import React, { Fragment } from 'react'

import { Dialog, Transition } from "@headlessui/react";
import { FiHelpCircle } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import metamaskImage from "../assets/WalletIcons/metamask.png";
import connectImage from "../assets/WalletIcons/connect.png";
import trustImage from "../assets/WalletIcons/trust.png";
import binance from "../assets/WalletIcons/binance.png";
import { WalletModalProps } from '../interfaces/WalletModalProps';
import { metaMask } from '../connectors/metamask';
import { walletConnect } from './Connectwallet';
import { bscConnector } from './Binance';

export default function WalletModal({isEnabled, setIsEnabled} : WalletModalProps) {

    const router = useRouter();


    const connect = async (key: string) => {
        if (key === "trustWallet") {
            setIsEnabled(!isEnabled);
            await walletConnect.activate();
            localStorage.setItem("voting-Wallet", key);
            router.push("/account");
            //* *//
        } else if (key === "metaMask") {
            setIsEnabled(!isEnabled);
            await metaMask.activate();
            localStorage.setItem("voting-Wallet", key);
            router.push("/account");
            //* *//
        } else if (key === "walletConnect") {
            setIsEnabled(!isEnabled);
            await walletConnect.activate();
            localStorage.setItem("voting-Wallet", key);
            router.push("/account");
            //* *//
        } else if (key === "binanceWallet") {
            setIsEnabled(!isEnabled);
            await bscConnector.activate();
            localStorage.setItem("voting-Wallet", key);
            router.push("/account");
            //* *//
        }
    };

  return (
    <>
      {/* Headless modal => Tailwind plugin */}
      <Transition appear show={true} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto backdrop-blur-[1px] bg-zinc-900 bg-opacity-40 dark:bg-zinc-900 dark:bg-opacity-70"
                    onClose={() => setIsEnabled(!isEnabled)}
                >
                    <div className="min-h-screen px-4 text-center flex justify-center items-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        <span className="inline-block align-middle" aria-hidden="true"></span>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <div className="inline-block  w-full max-w-sm p-5  overflow-hidden text-left align-middle transition-all transform bg-white dark:bg-[#202225] shadow-xl rounded-2xl">
                                {/* Modal title and close icon */}
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-200"
                                >
                                    <div className="flex justify-between items-center ">
                                        <span>Connect Wallet</span>
                                        <CgClose
                                            className="text-2xl cursor-pointer"
                                            onClick={() => setIsEnabled(!isEnabled)}
                                        />
                                    </div>
                                </Dialog.Title>
                                {/* Modal Content */}
                                <div className="mt-6">
                                    {/* Modal wallets icons */}
                                    <div className=" grid  grid-rows-2 gap-5 ">
                                        <div className="row-span-1 flex justify-around">
                                            {/* Trust wallet */}
                                            <div
                                                onClick={() => connect("trustWallet")}
                                                className="  p-3 w-32 bg-white dark:bg-[#202225]  dark:text-gray-200 text-gray-900 flex flex-col rounded-md  cursor-pointer"
                                            >
                                                <img
                                                    src={trustImage.src}
                                                    alt="Trust Wallet"
                                                    className="w-16 items-center inline-block self-center mb-2"
                                                />
                                                <span className=" text-center font-medium text-sm">
                                                    Trust Wallet
                                                </span>
                                            </div>
                                            {/* Metamask wallet */}
                                            <div
                                                onClick={() => connect("metaMask")}
                                                className="  p-3 w-32 bg-white dark:bg-[#202225]  dark:text-gray-200 text-gray-900 flex flex-col rounded-md cursor-pointer "
                                            >
                                                <img
                                                    src={metamaskImage.src}
                                                    alt="Metamask"
                                                    className="w-16 items-center inline-block self-center mb-2"
                                                />
                                                <span className=" text-center font-medium text-sm">
                                                    Metamask
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row-span-1 flex justify-around">
                                            {/* Wallet connect */}
                                            <div
                                                onClick={() => connect("walletConnect")}
                                                className="  p-3 w-32 bg-white dark:bg-[#202225]  dark:text-gray-200 text-gray-900 flex flex-col rounded-md cursor-pointer"
                                            >
                                                <img
                                                    src={connectImage.src}
                                                    alt="Wallet Connect"
                                                    className="w-16 items-center inline-block self-center mb-2"
                                                />
                                                <span className=" text-center font-medium text-sm">
                                                    WalletConnect
                                                </span>
                                            </div>
                                            {/* Binance wallet */}
                                            <div
                                                onClick={() => connect("binanceWallet")}
                                                className="  p-3 w-32 bg-white dark:bg-[#202225]  dark:text-gray-200 text-gray-900 flex flex-col rounded-md cursor-pointer"
                                            >
                                                <img
                                                    src={binance.src}
                                                    alt="Wallet Connect"
                                                    className="w-16 items-center inline-block self-center mb-2"
                                                />
                                                <span className=" text-center font-medium text-sm">
                                                    Binance Wallet
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 py-3 ">
                                    {/* Modal Footer */}
                                    <div className="footer text-center flex flex-col  items-center p-1">
                                        <h1 className=" md:text-xl font-medium vs:text-[1rem] dark:text-gray-200 text-gray-900 text-center">
                                            Haven’t got a crypto wallet yet?
                                        </h1>
                                        <button className="flex vs:text-[1rem]  items-center  p-3 mx-auto rounded-md w-11/12 justify-center md:text-xl font-medium  bg-blue-600 text-white hover:bg-blue-500 hover:shadow-BTNShadow dark:bg-blue-800 dark:text-gray-200 dark:hover:shadow-BTNShadowDark transition-all ease-linear duration-300">
                                            <FiHelpCircle /> Learn How to Connect
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
    </>
  )
}
