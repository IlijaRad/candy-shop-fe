import { Product } from "@/lib/data/product-details";

import { IconBrandFacebook, IconBrandX, IconHeart } from "@tabler/icons-react";
import { ComponentProps } from "react";
import ExternalLink from "../components/external-link";
import CopyLinkButton from "./copy-link-button";
import QuantityCombobox from "./quantity-combobox";
import ShareButtonMobile from "./share-button-mobile";
import StarRating from "./star-rating";

const ProductInfo = ({
  product,
  rating,
  ...restProps
}: {
  product: Product;
  rating: number;
} & ComponentProps<"div">) => {
  const discountPercentage = product.discounted_price
    ? Math.round((1 - product.discounted_price / product.price) * 100)
    : null;

  const productUrl = `${process.env.FE_APP_URL}/products/${product.slug}`;

  const encodedProductUrl = encodeURIComponent(productUrl);

  return (
    <div {...restProps}>
      <StarRating rating={rating} starSize={20} />
      <div className="mt-4 line-clamp-3 text-2xl/8.5 font-bold text-gray-900 lg:text-3xl/10.5">
        {product.name}
      </div>
      <div className="mt-6 flex items-center gap-x-4">
        <div className="text-xl/7 font-medium text-gray-900">
          {product.discounted_price} RSD
        </div>
        <div className="text-base/7 font-medium text-gray-600 line-through">
          {product.price} RSD
        </div>
        {discountPercentage ? (
          <div className="rounded-sm bg-yellow-400/30 px-1.5 text-xs/6 font-medium text-yellow-800">
            -{discountPercentage}%
          </div>
        ) : null}
      </div>
      <div className="mt-6 line-clamp-4 w-full max-w-[517px] text-base/7 text-gray-700">
        {product.description}
      </div>
      <div className="mt-6">
        <QuantityCombobox maxQuantity={product.stock} />
      </div>
      <div className="mt-6 flex items-center gap-x-4 lg:mt-8">
        <button className="flex h-12 cursor-pointer items-center justify-center rounded-md bg-gray-900 px-18.5 font-medium text-white transition-colors hover:bg-gray-800">
          Dodaj u korpu
        </button>
        <button
          aria-label="Add product to favorites"
          className="flex size-12 cursor-pointer items-center justify-center rounded-md transition-colors hover:bg-gray-100"
        >
          <IconHeart size={24} className="stroke-pink-600" />
        </button>
      </div>
      <div className="mt-10 h-px w-full bg-gray-200"></div>
      <div className="mt-10 text-sm/6 text-gray-900">Podeli</div>
      <div className="mt-1 hidden gap-x-2 md:flex">
        <CopyLinkButton url={productUrl} />

        <ExternalLink
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedProductUrl}`}
          className="flex size-10 cursor-pointer items-center justify-center text-gray-600/80"
          aria-label="Share on Facebook"
        >
          <IconBrandFacebook />
        </ExternalLink>

        <ExternalLink
          href={`https://twitter.com/share?url=${encodedProductUrl}`}
          className="flex size-10 cursor-pointer items-center justify-center text-gray-600/80"
          aria-label="Share on X"
        >
          <IconBrandX />
        </ExternalLink>
      </div>
      <ShareButtonMobile url={productUrl} />
    </div>
  );
};

export default ProductInfo;
