import styles from "../styles";
import Navbar from "components/navbar";
import Banner from "components/Banner";
import {getBanner,getBasicShoesInfo} from "lib/sanity";
import ShoeCard from "components/ShoeCard";
export default function Home({banner,shoes}) {
  return (
    <>
      <Navbar />
      <Banner data={banner}/>
      <div className={`${styles.innerWidth,styles.paddings} grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 p-4 mx-auto grid-row-auto justify-items-center`}>
        {shoes.map((shoe)=>(<ShoeCard key={shoe._id} shoeData={shoe}/>))}
      </div>
    </>
  );
}


export async function getStaticProps() {
  const banner = await getBanner();
  const shoes = await getBasicShoesInfo();
  return {
      props: { banner,shoes },
  };
}

