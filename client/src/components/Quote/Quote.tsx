import { usePrevValue } from "src/utils/usePrevValue";
import clsx from "clsx";

type QuoteType = {
  price: number;
};

const Quote: React.FC<QuoteType> = ({ price }) => {
  const prevPrice = usePrevValue(price);

  const isRising = prevPrice < price;

  return (
    <span className="inline-flex items-center">
      {isRising ? (
        <span
          className={clsx(
            "text-green-500 animate-bounce",
            isRising ? "translate-y-1" : "translate-y-0"
          )}
        >
          ▲
        </span>
      ) : (
        <span
          className={clsx(
            "text-red-500 animate-bounce",
            !isRising ? "translate-y-1" : "translate-y-0"
          )}
        >
          ▼
        </span>
      )}
      <span
        className={clsx("ml-1", isRising ? "text-green-500" : "text-red-500")}
      >
        {price}
      </span>
    </span>
  );
};

export default Quote;
