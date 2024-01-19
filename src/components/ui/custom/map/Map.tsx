"use client";

import React from "react";
import { FaDirections } from "react-icons/fa";

import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <>
      <div className="w-full  mx-auto mt-[-1.5rem] relative z-10">
        <MapContainer
          center={[1.3076344361098242, 103.88121970526619]}
          zoom={20}
          style={{ width: "100%", height: "400px" }}
          scrollWheelZoom={true}>
          {/* <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          /> */}
          <TileLayer
            url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}"
            subdomains={["mt0", "mt1", "mt2", "mt3"]}
            attribution="&copy; Google"
          />
          <CircleMarker
            center={[1.3076344361098242, 103.88121970526619]}
            radius={20}
            color="red"
            fillColor="green"
            opacity={1}>
            <Popup>
              <div className="w-[150px] h-[85px]">
                <Image
                  width={400}
                  height={400}
                  alt="SYNERGY LOGO"
                  src={require("@/app/assets/synergy-logo.png")}
                  className="w-[400px] h-[400px]]"
                />

                <hr className="w-full h-[1px] mt-2 " />
                <Link
                  className="w-full h-[20px] flex gap-2 flex-wrap justify-center items-center mt-[-0.8rem]"
                  target="_blank"
                  href={
                    "https://www.google.com/maps/place/229+Mountbatten+Rd,+%2303+30+Mountbatten+Square,+Singapore+398007/data=!4m2!3m1!1s0x31da183875f38d85:0xae860b0e29c985a?sa=X&ved=2ahUKEwiTkdWCmeaDAxUljWMGHQoZAb4Q8gF6BAgPEAA"
                  }>
                  <div className="w-[30px] h-[30px] rounded-full bg-[#1B72E8] flex justify-center items-center">
                    <FaDirections className="w-full text-white" />
                  </div>
                  <p className="text-[#1B72E8] text-base">Directions</p>
                </Link>
              </div>
            </Popup>
          </CircleMarker>
        </MapContainer>
      </div>
    </>
  );
}
