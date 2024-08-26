import Image from "next/image";
import { Inter } from "next/font/google";
import { MainCard } from "@/components/MainCard";
// import { MainCardNew } from "@/components/MainCardNew";
import { Footer } from "@/components/Footer";
import { Filter } from "@/components/Filter";
import Nav from "@/components/Nav";
import { Header } from "@/components/Header";
import Paging from "@/components/Paging";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const filter = [
    // for not available
    {
      isAvailable: false, name: "Canify", discount: 18, cbd: 1, description: "Cannabis Flos 18/1 PT Mango",
      list: ["Kultivar", "Mango", "Genetik", "Hybrid"], price: "11,66"
    },
    {
      isAvailable: false, name: "Canify", discount: 18, cbd: 1, description: "Cannabis Flos 18/1 PT Mango",
      list: ["Kultivar", "Mango", "Genetik", "Hybrid"], price: "11,66"
    },
    {
      isAvailable: false, name: "Canify", discount: 18, cbd: 1, description: "Cannabis Flos 18/1 PT Mango",
      list: ["Kultivar", "Mango", "Genetik", "Hybrid"], price: "11,66"
    },
    // for available
    {
      isAvailable: true, name: "Canify", discount: 25, cbd: 1, description: "Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify",
      list: ["Kultivar", "Pink Kush", "Genetik", "Hybrid"], price: "11,66"
    },
    {
      isAvailable: true, name: "Canify", discount: 25, cbd: 1, description: "Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify",
      list: ["Kultivar", "Pink Kush", "Genetik", "Hybrid"], price: "11,66"
    },
    {
      isAvailable: true, name: "Canify", discount: 25, cbd: 1, description: "Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify",
      list: ["Kultivar", "Pink Kush", "Genetik", "Hybrid"], price: "11,66"
    },
    // for not available
    {
      isAvailable: false, name: "Canify", discount: 18, cbd: 1, description: "Cannabis Flos 18/1 PT Mango",
      list: ["Kultivar", "Mango", "Genetik", "Hybrid"], price: "11,66"
    },
    {
      isAvailable: false, name: "Canify", discount: 18, cbd: 1, description: "Cannabis Flos 18/1 PT Mango",
      list: ["Kultivar", "Mango", "Genetik", "Hybrid"], price: "11,66"
    },
    {
      isAvailable: false, name: "Canify", discount: 18, cbd: 1, description: "Cannabis Flos 18/1 PT Mango",
      list: ["Kultivar", "Mango", "Genetik", "Hybrid"], price: "11,66"
    },

  ]
  return (
    <>
    <main className=" mx-40  ">
      <div>
        <div>
          <Header />
        </div>
      </div>
      <div className="w-full flex justify-between">
        <div className="w-3/12 ">
          <div className="w-5/6">
          <Filter/>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-9/12 px-5">
          {filter.map((item, index) => (
            <div key={index} className="">
              <MainCard item={item} />
            </div>
          ))}
        </div>
      </div>
     <Paging />
    </main>
     <Footer />
     </>
  );
}
