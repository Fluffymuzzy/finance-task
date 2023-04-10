import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "src/store/hooks";
import { selectExampleQuotes } from "src/store/selectors";
import { exampleQuotes } from "src/store/slice";

const SelectedQuotes: React.FC = () => {
  const [tickers, setTickers] = useState<string[]>([]);
  const ticker = useAppSelector(selectExampleQuotes);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTickers(ticker);
  }, [ticker]);

  const removeQuote = (quotes: string) => {
    const arrayCopy = [...tickers];
    const index = arrayCopy.indexOf(quotes);
    arrayCopy.splice(index, 1);
    dispatch(exampleQuotes(arrayCopy));
  };

  return (
    <div className="relative flex flex-wrap gap-2">
      {tickers.map((item) => {
        return (
          <div
            key={item}
            className="flex items-center justify-between border-b border-gray-200 py-2 hover:bg-gray-100 rounded-full px-2"
          >
            <button
              className="flex items-center space-x-2 focus:outline-none text-red-600 hover:text-red-800"
              onClick={() => removeQuote(item)}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 8.586l3.293-3.293a1 1 0 0 1 1.414 1.414L11.414 10l3.293 3.293a1 1 0 1 1-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 1 1-1.414-1.414L8.586 10 5.293 6.707a1 1 0 0 1 1.414-1.414L10 8.586z"
                />
              </svg>
              <span className="text-sm">{item}</span>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SelectedQuotes;
