import React from 'react'

const Table = () => {
  return (
    <div className="px-4 mx-2 pb-32 max-lg:w-screen bg-black max-lg:overflow-x-hidden max-lg:overflow-y-hidden sm:px-6 mb-20 lg:px-8">
      <div className="mt-8 flow-root max-lg:max-w-[1536px] bg-black max-lg:overflow-x-auto max-lg:overflow-y-hidden">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8 bg-black">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 bg-black">
            <div className="overflow-x-auto">
              <table className="min-w-full text-white text-center bg-[#0C0C0C]">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-4 min-w-[300px] text-left text-sm font-semibold sm:pl-0"></th>
                    <th scope="col" className="py-3.5 pl-4 pr-4 min-w-[300px] text-left text-sm font-semibold sm:pl-0"></th>
                    <th scope="col" className="px-4 py-3.5 min-w-[300px] text-center text-xl font-bold bg-[#212121]">Örjöngő csomagok</th>
                    <th scope="col" className="py-3.5 pl-4 min-w-[300px] pr-4 text-left text-sm font-semibold sm:pl-0"></th>
                    <th scope="col" className="py-3.5 pl-4 min-w-[300px] pr-4 text-left text-sm font-semibold sm:pl-0"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm font-medium sm:pl-0">Ár</td>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm">19.900 Ft</td>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm bg-[#212121]">29.900 Ft</td>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm">39.900 Ft</td>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm"></td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm font-medium sm:pl-0 bg-[#212121]">Fantázia nevek</td>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm bg-[#212121]">Újra hétfő</td>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm">Fáradt gőz</td>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm bg-[#212121]">Szétvet az ideg</td>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm bg-[#212121]">Egyedi ajánlat</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm font-medium sm:pl-0">Kis Tárgy: Váza, Pohár, Üres Üveg</td>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm">25 db</td>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm bg-[#212121]">30 db</td>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm">35 db</td>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm">kérése</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm font-medium sm:pl-0 bg-[#212121]">Közepes Tárgy: Rádió, Laptop, Monitor</td>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm bg-[#212121]">2 db</td>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm">2 db</td>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm bg-[#212121]">2 db</td>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm bg-[#212121]">(Csapatépítő)</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm font-medium sm:pl-0">Nagy Tárgy: Porszívó, Nyomtató</td>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm">0 db</td>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm bg-[#212121]">1 db</td>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm">1 db</td>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm"></td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm font-medium sm:pl-0 bg-[#212121]">Extra Nagy Tárgy: Tv</td>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm bg-[#212121]">0 db</td>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm">0 db</td>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm bg-[#212121]">1 db</td>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm bg-[#212121]"></td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm font-medium sm:pl-0">Javasolt létszám</td>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm">1 - 2 fő</td>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm bg-[#212121]">1 - 3 fő</td>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm">1 - 4 fő</td>
                    <td className="whitespace-nowrap min-w-[300px] p-4 text-sm"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
