import { useState } from "react";
export function TwiterFollowCard({functionAt, userName, name}) {
  const[isFollowing, setFollow]= useState(false);
  const imageSrc= `https://unavatar.io/${userName}`
  const text= isFollowing ? 'Siguiendo' : 'Seguir';
  const btnClassName= isFollowing
   ? 'tw-folloCard-btn is-following'
   : 'tw-folloCard-btn'
  const handleClick= ()=>{setFollow(!isFollowing)}
    return (
    <article className='tw-folloCard'>
      <header className='tw-folloCard-header'>
        <img className='tw-folloCard-avatar' alt='avatar' src={imageSrc}/>
        <div className='tw-folloCard-user'>
        <strong>{name}</strong>
        <span>{functionAt(userName)}</span>
        </div>
      </header>
      <aside>
        <button onClick={handleClick} className={btnClassName}>{text}</button>
      </aside>
    </article>
    );
  }
