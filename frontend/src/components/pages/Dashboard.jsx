import React from "react";
import { Card } from "flowbite-react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useLocation } from "react-router-dom";

function Dashboard() {

  const location = useLocation();
  const user = location.state?.user;

  const [text] = useTypewriter({
    words: [ "Good Afternoon!", "Don't forget to take medicine!"],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 2000,
  })

  return (
    <>
      <div >
        <div>
          <h2 className="text-3xl font-bold text-neutralDGrey mx-10">`Welcome {user.name}`</h2>
          <h2 className="text-2xl font-semibold mx-20">{text}<Cursor/></h2>
          
        </div>
        <div className="flex text-3xl text-brandPrimary font-bold bg-bgcolor  mt-10 mb-16">
          <h2 className="mx-52">Daily Medicine Schedule</h2>
          <h2 className=" mx-64" >8.05.2024</h2>
        </div>
        <div className="flex">
          <Card
            className="max-w-sm"
            imgSrc="/img/tablet1.jpg"
          >
            <div>
              <h1 className=" text-lg text-bgcolor font-bold">Dosage</h1> 
              
              <div className="flex text-white font-semibold">
              <p className=" bg-brandPrimary w-20 h-6 text-center ">12 pm</p>
              <p className="bg-brandPrimary mx-8 w-10 h-6 text-center">X</p>
              <p className="bg-brandPrimary w-10 h-6 text-center">X</p>
              </div>
              
            </div>
            <div>
              <h1 className=" text-lg text-bgcolor font-bold">Program</h1>
              <p>1 weeks (8.05.2024)-(15.05.2024)</p>
            </div>
            <div>
              <h1 className=" text-lg text-bgcolor font-bold">Quantity</h1>
              <p>25 tablets left</p>
            </div>
            
            <p className="bg-brandPrimary my-6 text-white font-semibold text-center">Tablet/Round/All white</p>
            
          </Card>

          <Card
            className="max-w-sm mx-36"
            imgSrc="/img/tablet1.jpg"
          >
            <div>
              <h1 className=" text-lg text-bgcolor font-bold">Dosage</h1> 
              
              <div className="flex text-white font-semibold">
              <p className=" bg-brandPrimary w-20 h-6 text-center ">12 pm</p>
              <p className="bg-brandPrimary mx-8 w-10 h-6 text-center">X</p>
              <p className="bg-brandPrimary w-10 h-6 text-center">X</p>
              </div>
              
            </div>
            <div>
              <h1 className=" text-lg text-bgcolor font-bold">Program</h1>
              <p>1 weeks (8.05.2024)-(15.05.2024)</p>
            </div>
            <div>
              <h1 className=" text-lg text-bgcolor font-bold">Quantity</h1>
              <p>25 tablets left</p>
            </div>
            
            <p className="bg-brandPrimary my-6 text-white font-semibold text-center">Tablet/Round/All white</p>
            
          </Card>

          <Card
            className="max-w-sm"
            imgSrc="/img/tablet1.jpg"
          >
            <div>
              <h1 className=" text-lg text-bgcolor font-bold">Dosage</h1> 
              
              <div className="flex text-white font-semibold">
              <p className=" bg-brandPrimary w-20 h-6 text-center ">12 pm</p>
              <p className="bg-brandPrimary mx-8 w-10 h-6 text-center">X</p>
              <p className="bg-brandPrimary w-10 h-6 text-center">X</p>
              </div>
              
            </div>
            <div>
              <h1 className=" text-lg text-bgcolor font-bold">Program</h1>
              <p>1 weeks (8.05.2024)-(15.05.2024)</p>
            </div>
            <div>
              <h1 className=" text-lg text-bgcolor font-bold">Quantity</h1>
              <p>25 tablets left</p>
            </div>
            
            <p className="bg-brandPrimary my-6 text-white font-semibold text-center">Tablet/Round/All white</p>
            
          </Card>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
