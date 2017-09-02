import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from './ui/reducer'
import { Root } from "./ui/root"
import { AppContainer } from 'react-hot-loader';

let store = createStore(reducer)

const hostElement = document.getElementById("app")

render(
  <AppContainer>
    <Provider store={store}>
      <Root />
    </Provider>
  </AppContainer>
  , hostElement
)

if (process.env.NODE_ENV === "development") {
    const Perf = require("react-addons-perf") // tslint:disable-line no-var-requires
    window["ReactPerf"] = Perf // tslint:disable-line no-string-literal
}
