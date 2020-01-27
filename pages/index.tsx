import React from 'react'
import { css } from '@emotion/core'

const HomePage = () => {
  return (
    <div
      css={css`
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        background-color: #222;
      `}
    >
      <a
        href="https://www.linkedin.com/in/vaneker/"
        css={css`
          text-decoration: none;
        `}
      >
        <h1
          css={css`
            font-size: 6rem;
            color: white;
          `}
        >
          TMVNKR
        </h1>
      </a>
    </div>
  )
}

export default HomePage
