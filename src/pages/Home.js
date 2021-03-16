import React, {Fragment, useContext} from 'react'
import {Search} from "../components/Search/Search";
import {Card} from "../components/Card/Card";
import {GitHubContext} from "../context/gitHub/gitHubContext";

export const Home = () => {
   const {loading, users} = useContext(GitHubContext)
    
    return (
        <Fragment>
            <Search />
            <div className='row'>

                {
                    loading
                        ? <p className='center'>Загрузка...</p>
                        : users.map(user => (
                                <div className="col-sm-4 mb-4" key={user.id}>
                                    <Card user={user} />
                                </div>
                            )
                        )

                }

            {}
            </div>
        </Fragment>
    )
}







// <div className="col-sm-4 mb-4" key={card}>
//     <Card />
// </div>





// const cards = new Array(15)
//     .fill('')
//     .map((_,index) => index)






// <div className="row">
//     {cards.map(card => {
//         return (
//             <div className="col-sm-4 mb-4" key={card}>
//                 <Card />
//             </div>
//         )
//     })}
//
// </div>