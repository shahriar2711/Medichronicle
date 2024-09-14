import React from 'react';
import { Card } from 'flowbite-react';
import Lottie from "lottie-react";
import signup5 from '../animation/signup5.json'

const notifications = [
  {
    title: 'Medicine Reminder',
    message: 'It’s time to take your Aspirin dose.',
    time: '12:30 PM, 14th Sept 2024',
    type: 'reminder',
  },
  {
    title: 'New Report Uploaded',
    message: 'Your doctor has uploaded a new medical report.',
    time: '11:00 AM, 14th Sept 2024',
    type: 'update',
  },
  {
    title: 'Missed Dose Alert',
    message: 'You missed your morning dose of Vitamin C.',
    time: '9:00 AM, 13th Sept 2024',
    type: 'alert',
  },
];

function Notification() {
  return (
    <>
      <div className='flex space-x-64'>
      <div className=" max-w-6xl mx-24 p-4">
      <h1 className="text-4xl font-bold text-brandPrimary">Notifications</h1>
      <p className="text-gray-600 mb-6">Here are your recent updates and reminders:</p>

      <div className="grid grid-cols-1 gap-6">
        {notifications.map((notification, index) => (
          <Card key={index} className="p-6 shadow-lg">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">{notification.title}</h2>
              <p className="text-sm text-gray-500">{notification.time}</p>
            </div>
            <p className="text-gray-700 mt-2">{notification.message}</p>
            <span
              className={`mt-4 inline-block px-4 py-2 text-sm font-semibold rounded-full ${
                notification.type === 'alert' ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'
              }`}
            >
              {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
            </span>
          </Card>
        ))}
      </div>
    </div>
    <div className="flex-shrink-0 h-96  rounded-lg  mt-32">
          <Lottie animationData={signup5} className="h-full w-full"/>
      </div>
      </div>
    </>
  );
}

export default Notification;
