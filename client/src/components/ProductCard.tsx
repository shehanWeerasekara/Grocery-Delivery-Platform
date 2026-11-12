import {Product} from "@/types";
import {useNavigate} from "react-router-dom";
import Image from "next/image";
import {Star} from "lucide-react";

interface props {
    products: Product;
}

const ProductCard = ({products}: props) => {
    const currency = "$";
    const {addToCart} = {addToCart: (_data: never) => {}}
    const navigate = useNavigate();

    return (
        <div
            className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-md transition-all duration-300 group animate-fade-in cursor-pointer"
            onClick={() => navigate(`/products/${products._id}`)}
        >
            {/* image */}
            <div className="relative aspect-square overflow-hidden">
                <Image
                    src={products.image}
                    alt={products.name}
                    className="w-full h-full object-cover p-4 group-hover:p-2 transition-all duration-300"
                />

                {/* badges */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {products.discount > 0 &&
                        <span className="px-2 py-0.5 text-[10px] font-semibold uppercase bg-app-orange text-white rounded-full">{products.discount}& OFF</span>
                    }
                </div>
            </div>

            {/* info */}
            <div className="p-3.5 text-zinc-700">
                <h3 className="text-sm leading-snug mb-1.5 line-clamp-2">{products.name}</h3>

                {/* rating */}
                {products.rating > 0 && (
                    <div className="flex items-center gap-1 mb-2">
                        <Star className="size-3 text-app-warning fill-app-warning" />
                        <span className="text-xs font-medium text-app-text">{products.rating}</span>
                        <span className="text-xs text-app-text-light">({products.reviewCount}</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductCard;