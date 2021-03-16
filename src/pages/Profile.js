import React, {useContext, Fragment, useEffect} from 'react'
import {GitHubContext} from '../context/gitHub/gitHubContext'
import {Link} from 'react-router-dom'
import {Repos} from "../components/Repos/Repos";

export const Profile = ({match}) => {

    const {user, loading, getUser, getRepos, repos} = useContext(GitHubContext)

    const {name, company, avatar_url, location, bio, blog, login, html_url, followers, following,public_repos, public_gists} = user

    const URLname = match.params.name

        useEffect(() => {
        getUser(URLname)
        getRepos(URLname)
        // eslint-disable-next-line
    }, [])

    console.log(user)

    if(loading){
        return (<p>Загрузка...</p>)
    }

    return (
        <Fragment>

            <Link to='/' className='btn btn-link'>На главную</Link>

            <div className='card mb-4'>
                <div className='card'>
                    <div className='row'>
                        <div className='col-sm-3 text-center'>
                            <img
                                src={avatar_url}
                                alt={name}
                                style={{width: '150px'}}
                            />
                            <h1>{name}</h1>
                            {location && <p>Местоположение: {location}</p>}
                        </div>
                        <div className="col">
                            {
                                bio && <Fragment>
                                    <h3>BIO</h3>
                                    <p>{bio}</p>
                                </Fragment>
                            }
                            <a href={html_url}
                               target='blank'
                               className='btn btn-dark'
                               rel='noopener noreferrer'
                            >Открыть профиль</a>
                            <ul>
                                {login && <li>
                                    <strong>Username: {login}</strong>
                                </li>}

                                {company && <li>
                                    <strong>Компания: {company}</strong>
                                </li>}

                                {blog && <li>
                                    <strong>Веб-сайт: {blog}</strong>
                                </li>}
                            </ul>

                            <div className='badge badge-primary'>Подписчики: {followers}</div>

                            <div className='badge badge-success'>Подписан: {following}</div>

                            <div className='badge badge-info'>Репозитории: {public_repos}</div>

                            <div className='badge badge-dark'>Gists: {public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>
            <Repos repos={repos} />
        </Fragment>
    )
}
    


// мой код

// import React, {Fragment, useContext, useEffect} from 'react'
// import {GitHubContext} from "../context/gitHub/gitHubContext";
// import {Link} from 'react-router-dom'

// export const Profile = ({match}) => {
//     const {getUser, getRepos, loading, user} = useContext(GitHubContext)
//     const urlName = match.params.name

//     useEffect(() => {
//         getUser(urlName)
//         getRepos(urlName)
//         // eslint-disable-next-line
//     }, [])

//     if(loading){
//         return <p className='text-align-center'>...Загрузка</p>
//     }

//     const {
//         name, company, avatar_url,
//         location, bio, blog,
//         login, html_url, followers, following,
//         public_repos, public_gists
//     } = user

//     return (
//         <Fragment>

//             <Link to='/' className='btn btn-link'>На главную</Link>

//             <div className='card mb-4'>
//                 <div className='card'>
//                     <div className='row'>
//                         <div className='col-sm-3 text-center'>
//                             <img
//                                 src={avatar_url}
//                                 alt={name}
//                                 style={{width: '150'}}
//                             />
//                             <h1>{name}</h1>
//                             {location && <p>Местоположение: {location}</p>}
//                         </div>
//                         <div className="col">
//                             {
//                                 bio && <Fragment>
//                                     <h3>BIO</h3>
//                                     <p>{bio}</p>
//                                 </Fragment>
//                             }
//                             <a href={html_url}
//                                target='blank'
//                                className='btn btn=dark'
//                             >Открыть профиль</a>
//                             <ul>
//                                 {login && <li>
//                                     <strong>Username: {login}</strong>
//                                 </li>}

//                                 {company && <li>
//                                     <strong>Компания: {company}</strong>
//                                 </li>}

//                                 {blog && <li>
//                                     <strong>Веб-сайт: {blog}</strong>
//                                 </li>}
//                             </ul>

//                             <div className='badge badge-primary'>Подписчики: {followers}</div>

//                             <div className='badge badge-success'>Подписан: {following}</div>

//                             <div className='badge badge-info'>Репозитории: {public_repos}</div>

//                             <div className='badge badge-dark'>Gists: {public_gists}</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Fragment>
//     )
// }













// import React, {useContext, useEffect, Fragment} from 'react'
// import {GitHubContext} from '../context/gitHub/gitHubContext'
// import {Link} from 'react-router-dom'

// export const Profile = ({match}) => {
//     const {getUser, getRepos, loading, user} = useContext(GitHubContext)
//     const urlName = match.params.name

//     useEffect(() => {
//         getUser(urlName)
//         getRepos(urlName)
//         // eslint-disable-next-line
//     }, [])

//     if (loading) {
//         return <p className="text-center">Загрузка...</p>
//     }

//     const {
//         name, company, avatar_url,
//         location, bio, blog,
//         login, html_url, followers,
//         following, public_repos,
//         public_gists
//     } = user

//     return (
//         <Fragment>
//             <Link to="/" className="btn btn-link">На главную</Link>

//             <div className="card mb-4">
//                 <div className="card-body">
//                     <div className="row">
//                         <div className="col-sm-3 text-center">
//                             <img
//                                 src={avatar_url}
//                                 alt={name}
//                                 style={{width: '150px'}}
//                             />
//                             <h1>{name}</h1>
//                             {location && <p>Местоположение: {location}</p>}
//                         </div>
//                         <div className="col">
//                             {
//                                 bio && <Fragment>
//                                     <h3>BIO</h3>
//                                     <p>{bio}</p>
//                                 </Fragment>
//                             }
//                             <a
//                                 href={html_url}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="btn btn-dark"
//                             >Открыть профиль</a>
//                             <ul>
//                                 {login && <li>
//                                     <strong>Username: </strong> {login}
//                                 </li>}

//                                 {company && <li>
//                                     <strong>Компания: </strong> {company}
//                                 </li>}

//                                 {blog && <li>
//                                     <strong>Website: </strong> {blog}
//                                 </li>}
//                             </ul>

//                             <div className="badge badge-primary">Подписчики: {followers}</div>
//                             <div className="badge badge-success">Подписан: {following}</div>
//                             <div className="badge badge-info">Репозитории: {public_repos}</div>
//                             <div className="badge badge-dark">Gists: {public_gists}</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Fragment>
//     )
// }
