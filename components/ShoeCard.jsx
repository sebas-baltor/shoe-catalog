import { client } from "lib/config";
import { useNextSanityImage } from "next-sanity-image";
import Img from "next/image";
import Link from "next/link";
export default ({ shoeData }) => {
  const shoeImageData = useNextSanityImage(client, shoeData.shoes_images);
  const intl = new Intl.NumberFormat("en-US");
  return (
    <Link
      href={`shoe/${shoeData._id}`}
      className="w-full p-4 hover:bg-slate-100 border-2 border-slate-400"
    >
        <Img
        className="h-32 mx-auto"
          {...shoeImageData}
          style={{ width: "auto"}}
          blurDataURL={shoeData.shoes_images.asset.metadata.lqip}
        />
        <div className="flex flex-col items-end">
          <h5 className="font-semibold">{shoeData.name}</h5>
          <h6 className="font-black">${intl.format(shoeData.price)}</h6>
        </div>
    </Link>
  );
};
