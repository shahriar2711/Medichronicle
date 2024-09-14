import React, { useState, useEffect } from 'react';
import { Card } from "flowbite-react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useLocation } from "react-router-dom";

function Dashboard() {

  const location = useLocation();
  const user = location.state?.user;

  const [text] = useTypewriter({
    words: ["Follow the Healthcare", "Don't forget to take medicine!"],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  const [currentTime, setCurrentTime] = useState(new Date());
  const [taken, setTaken] = useState(false);  // For marking medicines as taken
  const [upcomingDoses, setUpcomingDoses] = useState([
    { name: "Aspirin", time: "12:00 PM", remainingTime: "2 hours", quantity: 25 },
    { name: "Ibuprofen", time: "6:00 PM", remainingTime: "8 hours", quantity: 10 },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(timer);
  }, []);

  // Dummy data for medication history
  const medicationHistory = [
    { name: "Aspirin", takenAt: "10:00 AM" },
    { name: "Ibuprofen", takenAt: "8:00 AM" },
  ];

  return (
    <>
      <div className="container mx-auto p-4">
      <div className='grid grid-cols-2 gap-4 max-w-6xl mx-auto'>
  <div>
    <h2 className="text-3xl font-bold text-neutralDGrey">Welcome {user.name}</h2>
    <h2 className="text-2xl font-semibold">{text}<Cursor /></h2>
  </div>

  {/* Daily Medicine Schedule Header */}
  <div className="flex justify-center items-center text-2xl text-brandPrimary font-bold bg-bgcolor mt-2 mb-10 p-4 rounded-lg">
    <h2>{currentTime.toLocaleString()}</h2>
  </div>
</div>


        {/* Upcoming Doses Section */}
        <div className="my-2">
          <h3 className="text-2xl font-bold">Upcoming Doses</h3>
          <ul className="space-y-4">
            {upcomingDoses.map((dose, index) => (
              <li key={index} className=" flex justify-between items-center">
                <strong>{dose.name}</strong> at {dose.time} - {dose.remainingTime} remaining
                <button
                  onClick={() => setTaken(true)}
                  className={`ml-4 px-4 py-2 text-white ${taken ? "bg-green-500" : "bg-brandPrimary"} rounded`}
                >
                  {taken ? "Taken" : "Mark as Taken"}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Medication History */}
        <div className="my-6">
          <h3 className="text-2xl font-bold">Medication History</h3>
          <ul className="space-y-2">
            {medicationHistory.map((history, index) => (
              <li key={index} className="my-2">
                <strong>{history.name}</strong> - Taken at {history.takenAt}
              </li>
            ))}
          </ul>
        </div>

        {/* Grid Layout for Medicine Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingDoses.map((dose, index) => (
            <Card key={index} className="w-full max-w-sm mx-auto" imgSrc="/img/tablet1.jpg">
              <div>
                <h1 className="text-xl text-bgcolor font-bold">Dosage</h1>
                <div className="flex text-grey font-bold">
                  <p className="bg-brandPrimary w-20 h-6 text-center">{dose.time}</p>
                  <p className="bg-brandPrimary mx-8 w-10 h-6 text-center">X</p>
                  <p className="bg-brandPrimary w-10 h-6 text-center">X</p>
                </div>
              </div>
              <div>
                <h1 className="text-xl text-bgcolor font-bold">Program</h1>
                <p>1 weeks (8.05.2024)-(15.05.2024)</p>
              </div>
              <div>
                <h1 className="text-xl text-bgcolor font-bold">Quantity</h1>
                <p>{dose.quantity} tablets left</p>
              </div>
              {/* Refill Reminder */}
              {dose.quantity < 10 && (
                <div className="text-red-500 font-semibold">Refill soon! Only {dose.quantity} left</div>
              )}
              <p className="bg-brandPrimary my-6 text-white font-semibold text-center">Tablet/Round/All white</p>
            </Card>
          ))}
        </div>

        
      </div>
    </>
  );
}

export default Dashboard;
