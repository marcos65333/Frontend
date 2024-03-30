import Postear from "../../shared/postear";
import ShowPost from "../../shared/showPost";

const Feed = ({user}) => {
    
    return(
        <>
            <div className="bg-slate-300">
                <Postear user={user}/>
                <ShowPost user={user} />
            </div>
        </>
    )
}

export default Feed;