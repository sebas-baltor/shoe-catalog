import styles from "../styles";
import Navbar from "components/navbar";
import Banner from "components/Banner";
import getBanner from "lib/sanity";
export default function Home({banner}) {
  return (
    <>
      <Navbar />
      <Banner data={banner}/>
      <div className={`${styles.innerWidth} bg-slate-50`}>
        right way to create a sanity nextjs and tailwindcss proyect setup
      </div>
    </>
  );
}


export async function getStaticProps() {
  const banner = await getBanner();
  return {
      props: { banner },
  };
}

