import { QuotesTypes } from "src/store/types";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { selectQuoteData, selectExampleQuotes } from "src/store/selectors";
import { exampleQuotes } from "src/store/slice";
import Quote from "../Quote/Quote";

const QuotesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const quotesData = useAppSelector(selectQuoteData);
  const sample = useAppSelector(selectExampleQuotes);
  const [sortedData, setSortedData] = useState<QuotesTypes[]>([]);

  useEffect(() => {
    const sortedQuotesData = sortBySample(quotesData, sample);
    setSortedData(sortedQuotesData);
  }, [quotesData, sample]);

  //   add and update tickers in sample arr
  const handleAddToSample = (ticker: string) => {
    dispatch(exampleQuotes([...sample, ticker]));
  };

  return (
    <div className="container mx-auto my-4 p-4 mt-4 mb-4">
      <div className="w-full overflow-x-auto">
        <table className="table-auto mx-auto text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left border">Ticker</th>
              <th className="px-4 py-2 text-left border">Exchange</th>
              <th className="px-4 py-2 text-left border">Price</th>
              <th className="px-4 py-2 text-left border">Change Percent</th>
              <th className="px-4 py-2 text-left border">Dividend</th>
              <th className="px-4 py-2 text-left border">Yield</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.length ? (
              sortedData.map((quote) => (
                <tr
                  key={quote.ticker}
                  className={`${
                    quote.change_percent > 0 ? "bg-green-200" : "bg-red-200"
                  } hover:bg-gray-200`}
                >
                  <td className="border px-4 py-2 font-bold">{quote.ticker}</td>
                  <td className="border px-4 py-2">{quote.exchange}</td>
                  <td className="border px-4 py-2">
                    <i className="mdi mdi-currency-usd mr-1"></i>
                    <Quote price={+quote.price} className="font-bold" />
                  </td>
                  <td
                    className={`border px-4 py-2 ${
                      quote.change_percent > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    <i className="mdi mdi-percent mr-1"></i>
                    {quote.change_percent}
                  </td>
                  <td className="border px-4 py-2">
                    <div className="flex items-center">
                      <i className="mdi mdi-currency-usd mr-1"></i>
                      {quote.dividend}
                    </div>
                  </td>
                  <td className="border px-4 py-2">
                    <div className="flex items-center">
                      <i className="mdi mdi-percent mr-1"></i>
                      {quote.yield}
                      <button
                        className="ml-2 bg-blue-500 text-white px-2 py-1 rounded"
                        onClick={() => handleAddToSample(quote.ticker)}
                      >
                        Select
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="border px-4 py-2">Server is down</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const sortBySample = (data: QuotesTypes[], sample: string[]): QuotesTypes[] => {
  const filteredData = data.filter((quote) => !sample.includes(quote.ticker));
  return filteredData;
};

export default QuotesList;
