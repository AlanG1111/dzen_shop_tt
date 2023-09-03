"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { formatDate, formatTime } from "@/helpers/dateFormatters";

export default function DateTimeDisplay() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    setCurrentDateTime(new Date());
  }, []);

  const formattedDate = formatDate(currentDateTime);
  const formattedTime = formatTime(currentDateTime);

  return (
    <div className='d-flex flex-column justify-content-space-between'>
      <div className='d-flex gap-6'>
        <div
          className='gap-2 d-flex align-items-center'
          suppressHydrationWarning
        >
          <span>{formattedDate}</span>
          <Image
            src='/images/clock_icon.png'
            width={16}
            height={16}
            alt='logo'
          />
          <span>{formattedTime}</span>
        </div>
      </div>
    </div>
  );
}
