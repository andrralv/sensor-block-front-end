import React from 'react'
// import '../css/Actor.css'
const loader = (<div className="loader">
<span className="bar bar-1"></span>
<span className="bar bar-2"></span>
<span className="bar bar-3"></span>
<span className="bar bar-4"></span>
<span className="bar bar-5"></span>
<span className="bar bar-6"></span>
</div>);

const Actor = (props) => (
    <div>
        {!props.actor.name && loader}
        <h1>{props.actor.name}</h1>
    </div>
)

module.exports = Actor;