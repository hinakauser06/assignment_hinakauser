import { Inter } from "next/font/google";
import { MainCard } from "@/components/MainCard";
import { Footer } from "@/components/Footer";
import { Filter } from "@/components/Filter";
import { Header } from "@/components/Header";
import Paging from "@/components/Paging";
import { filter } from "@/data/cards.json"
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [cards, setCards] = useState([])

  const sendCurrentPageFun = (page) => {
    console.log(page)
    let data = []
    for(let i = (page-1)*9 ; i < page*9 ; i++ ){
      data.push(filter[i])
    
    }
    console.log(data)
    setCards(data)
  }
  const renderPaginatedCards = () => {

  }
  useEffect(
    () => {
      let data = []
      for (let i = 0; i < 9; i++) {
        data.push(filter[i])
      }
      setCards(data)
    }, [])
  return (
    <>
      <main className=" lg:mx-40 md:mx-4 sm:mx-1  ">
        <div>
          <div>
            <Header />
          </div>
        </div>
        <div className="w-full flex flex-row  sm:justify-between ">
          <div className="w-2/12 sm:mx-6 sm:w-2/12 md:w-2/12 lg:w-2/12">
              <Filter />
          </div>

          <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4 w-9/12 px-5">
            {cards.map((item, index) => (
              <div key={index} className="">
                <MainCard item={item} />
              </div>
            ))}
          </div>
        </div>
        <Paging sendCurrentPageFun={sendCurrentPageFun} />
      </main>
      <Footer />
    </>
  );
}
