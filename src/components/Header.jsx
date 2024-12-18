import CardIcon from "./CardIcon";

const Header = ({card}) => {
  return (
    <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">
           Shopping Cards
        </h1>
       <CardIcon card={card} />
    </div>
  );
};

export default Header ;
