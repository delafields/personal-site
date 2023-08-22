// https://devdojo.com/tailwindcss/buttons

export const BuyButton = ({...product}) => {

    return (
        <div className="flex justify-center w-full">
            <a href={product.shopLink} target='_blank' className="inline-flex min-w-[200px] overflow-hidden text-white rounded cursor-pointer bg-myred hover:bg-black">
            <span className="px-3.5 py-2 text-yellow-300 bg-black hover:bg-gray-900 flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
            </svg>
            </span>
            <span className="pl-4 pr-5 py-2.5 text-white grow text-center">
                {product.buttonText ? product.buttonText : "BUY NOW"}
            </span>
            </a>
        </div>
    )
}