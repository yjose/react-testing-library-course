// these should normally be in your jest setupTestFrameworkScriptFile
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'

import React from 'react'
import {render, fireEvent, wait} from 'react-testing-library'
// 3⃣ 🐨 remove this import
//import {loadGreeting as mockLoadGreeting} from '../api'
// 5⃣ 🐨 go into greeting-loader-01-mocking and make changes there:
// 1. Use defaultProps = {loadGreeting}
// 2. change `loadGreeting` to `this.props.loadGreeting`
import {GreetingLoader} from '../greeting-loader-02-dependency-injection'

// 4⃣ 🐨 remove this jest.mock call
jest.mock('../api', () => {
  return {
    // 1⃣ 🐨 move the jest.fn down to a variable assignment in the test
    loadGreeting: jest.fn(subject =>
      Promise.resolve({data: {greeting: `Hi ${subject}`}}),
    ),
  }
})

test('loads greetings on click', async () => {
  // 2⃣ 🐨 create the variable mockLoadGreeting right here and pass
  // "loadGreeting" as a prop to GreetingLoader
  const mockLoadGreeting = jest.fn(subject =>
    Promise.resolve({data: {greeting: `Hi ${subject}`}}),
  )
  const {getByLabelText, getByText, getByTestId} = render(
    <GreetingLoader loadGreeting={mockLoadGreeting} />,
  )
  const nameInput = getByLabelText(/name/i)
  const loadButton = getByText(/load/i)
  nameInput.value = 'Mary'
  fireEvent.click(loadButton)
  expect(mockLoadGreeting).toHaveBeenCalledTimes(1)
  expect(mockLoadGreeting).toHaveBeenCalledWith('Mary')
  await wait(() => expect(getByTestId('greeting')).toHaveTextContent(`Hi Mary`))
})

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=react-testing-library-course&e=dependency-injection&em=
*/
test('I submitted my elaboration and feedback', () => {
  const submitted = true // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////
