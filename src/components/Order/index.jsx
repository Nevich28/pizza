import pizza from './pizza-png.png';
export const OrderItem = () => {
    return (
        <div className=" mt-4">
            <img className=" w-52 h-52 m-auto" src={pizza} alt="pizza" />
            <h1 className="mt-4 text-3xl font-bold text-center">You order is:</h1>
            <p className="mt-3 text-xl text-center">
                <b>3</b>delicious pizzas for <b>45$</b>
            </p>
            <p className="mt-3 text-xl text-center">Where do you want us to bring it?</p>
            <form>
                <textarea
                    className="block mx-auto my-3 resize-none border border-[rgba(0,0,0,0.1)] rounded-[10px] w-72 h-20 p-3 focus:outline-none focus:border focus:border-[rgba(0,0,0,0.2)]"
                    type="textarea"
                    placeholder="Enter your shipping address..."
                />
            </form>
        </div>
    );
};
