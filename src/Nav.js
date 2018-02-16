import React from 'react'

export default function (props) {
  return (
    <nav>
      <ul>
        {Object.entries(props.sources).map(([key, value]) => (
          <li key={key}><a href={`#${key}`}>{value.name}</a></li>
        ))}
      </ul>
    </nav>
  )
}
