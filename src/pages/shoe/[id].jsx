import { getShoeById } from "lib/sanity";
export default ({id,shoe})=>(
    <div>
        by id: {id}
    </div>
)
export async function getServerSideProps({query}){
    const {id} = query;
    const shoe = await getShoeById(id); 
    return {
         props:{
            id,
            shoe
         }
    }
}