import React from 'react'
import { render } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Notes from '../../src/app/notes/components/Notes'

test('<Notes /> shows correct image when busy', () => {
  const mockStore = configureStore()({/* TODO: MOCK STATE HERE */})
  const wrapper = render(
    <Provider store={mockStore}>
      <Notes />
    </Provider>
  )
//   expect().toMatch()
})