import 'jest-dom/extend-expect'
import React from 'react'
import {render} from 'react-testing-library'
// 🐨 you'll need to import the render function from 'react-testing-library'
import {FavoriteNumber} from '../favorite-number'

test('renders a number input with a label "Favorite Number"', () => {
  // 📖 read docs here: https://github.com/kentcdodds/react-testing-library/blob/master/README.md#render
  const {getByLabelText, getByText, getByTestId} = render(<FavoriteNumber />)
  const input = getByLabelText(/favorite number/i)
  const inputWithId = getByTestId(/favorite-number/i)
  const label = getByText(/favorite number/i)
  expect(input).toHaveAttribute('type', 'number')
  expect(inputWithId).toHaveAttribute('type', 'number')

  expect(label).toHaveTextContent('Favorite Number')
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=react-testing-library-course&e=react-testing-library&em=
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
