import React, { createContext } from 'react'

export const Context = createContext()

export const { Provider, Consumer } = Context

export const withContext = Component => props => (
  <Consumer>
    {value =>
      <Component {...value} {...props} />
    }
  </Consumer>
)

