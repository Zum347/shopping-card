import { CiShoppingCart } from "react-icons/ci";

const CardIcon = ({ card }) => {
  return (
    <div className="relative"> 
           <CiShoppingCart className="text-2xl"/>
           {card.length > 0 && (
 <span className="bg-red-500 text-white w-5 h-5 flex justify-center items-center rounded-full absolute -top-2 -right-4
 text-xs">
  {card.length}
            </span>  
            )}
           </div>
  );
};

export default CardIcon;
