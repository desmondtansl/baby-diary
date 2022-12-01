import React, { useState } from 'react'
import { Dropdown } from 'semantic-ui-react'

const options = [
  { key: 'None', text: 'None', value: 'None' },
  { key: 'Dairy ', text: 'Dairy ', value: 'Dairy ' },
  { key: 'Egg ', text: 'Egg ', value: 'Egg ' },
  { key: 'Gluten ', text: 'Gluten ', value: 'Gluten ' },
  { key: 'Grain ', text: 'Grain ', value: 'Grain ' },
  { key: 'Peanut ', text: 'Peanut ', value: 'Peanut ' },
  { key: 'Seafood ', text: 'Seafood ', value: 'Seafood ' },
  { key: 'Sesame ', text: 'Sesame ', value: 'Sesame ' },
  { key: 'Shellfish ', text: 'Shellfish ', value: 'Shellfish ' },
  { key: 'Soy ', text: 'Soy ', value: 'Soy ' },
  { key: 'Sulfite ', text: 'Sulfite ', value: 'Sulfite ' },
  { key: 'TreeNut ', text: 'TreeNut ', value: 'TreeNut ' },
  { key: 'Wheat ', text: 'Wheat ', value: 'Wheat ' }, 
]

const DropdownExampleMultipleSelection = ({choice, setChoice}) => {
    const handleChange = (e, {value}) => {
      setChoice(value)
      console.log(value)
    }

    return(
  <Dropdown placeholder='Choose Intolerance' fluid multiple selection options={options}
  onChange={handleChange.bind(this)} /> 
    )
}
export default DropdownExampleMultipleSelection;
