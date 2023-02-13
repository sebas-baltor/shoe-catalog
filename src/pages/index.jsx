import styles from "../styles";
import Navbar from "components/navbar";
import Banner from "components/Banner";
import {getBanner,getBasicShoesInfo} from "lib/sanity";
import ShoeCard from "components/ShoeCard";
export default function Home({banner,shoes}) {
  return (
    <>
      <Navbar home={true}/>
      <Banner data={banner}/>
      <section className={`${styles.paddings}`}>
        <div className={`${styles.innerWidth} mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 grid-row-auto`}>
        {shoes.map((shoe)=>(<ShoeCard key={shoe._id} shoeData={shoe}/>))}
        </div>
      </section>
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

