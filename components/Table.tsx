import React from "react";

type TableRow = {
  value: string;
  isDiscounted: boolean;
  discountedPrice: string;
};

type TableData = {
  _id: string;
  row: TableRow[];
  isPriceRow: boolean;
};

interface TableProps {
  prices: TableData[];
}

const Table: React.FC<TableProps> = ({ prices }) => {
  const background = (index: number, i: number) => {
    if (index === 2 && i % 2 === 0) {
      return "#212121";
    }

    if (index === 2 && i % 2 === 1) {
      return "#0C0C0C";
    }

    if (index !== 2 && i % 2 === 1) {
      return "#212121";
    }

    return "#0C0C0C";
  };

  return (
    <div className="px-4 mx-2 pb-32 max-lg:w-screen bg-black max-lg:overflow-x-hidden max-lg:overflow-y-hidden sm:px-6 lg:px-8">
      <div className="mt-8 flow-root max-lg:max-w-[1536px] bg-black max-lg:overflow-x-auto max-lg:overflow-y-hidden">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8 bg-black">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 bg-black">
            <div className="overflow-x-auto">
              {
                !prices ? <p className="text-center">Betöltés...</p> :
              <table className="min-w-full text-white text-center bg-[#0C0C0C]">
                <thead>
                  <tr>
                    {Array.isArray(prices) &&
                      prices[0]?.row.map((header, index) => (
                        <th
                          key={index}
                          scope="col"
                          className={`py-3.5 px-4 text-center min-w-[300px] text-sm font-semibold ${
                            index === 2 ? "text-xl font-bold bg-[#212121]" : ""
                          }`}
                        >
                          {header.value}
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(prices) &&
                    prices.slice(1).map((data, i) => (
                      <tr key={data._id}>
                        {data.row.map((cell, index) => (
                          <td
                            key={index}
                            className={`whitespace-nowrap min-w-[300px] p-4 text-sm`}
                            style={{
                              backgroundColor: background(index, i),
                            }}
                          >
                            {cell.isDiscounted ? (
                              <>
                                <span className="line-through mr-2">
                                  {cell.value}
                                </span>
                                <span className="text-green-500">
                                  {cell.discountedPrice}
                                </span>
                              </>
                            ) : (
                              cell.value
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                </tbody>
              </table>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
