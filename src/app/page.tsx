"use client";
import Patientform from "@/components/forms/Patientform";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto lg:flex-1">
        <div className="sub-container max-w-[496px] mx-auto p-3 lg:p-8">
          <Image
            src="/assets/icons/logo-full.svg"
            height={100}
            width={100}
            alt="patient"
            className="mb-8 h-10  w-fit"
          />

          <Patientform />
          <div className=" text-14-regular mt-8 flex justify-between">
            <p className=" justify-items-end text-dark-600 xl:text-left">
            © 2024 CarePulse
            </p>
            <Link href="/?admin=true" className=" text-green-500">
            Admin
            </Link>

          </div>
        </div>
      </section>

      <div className="flex-1 hidden lg:block">
        <Image
          src="/assets/images/onboarding-img.png"
          alt="doctor image"
          width={850}
          height={1000}
          className="w-full h-full object-cove "
        />
      </div>
    </div>
  );
}