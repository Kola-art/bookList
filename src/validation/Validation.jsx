import React, { useEffect, useState } from 'react';
import FormCreator from '../components/UI/Form';

const Validation = ({handleOnSubmit, handleChange, descr}) => {

  const useValidation = (value, validations) => {
    const [empty, setEmpty] = useState(true);
    const [inputValid, setInputValid] = useState(false);
    useEffect(() => {
      for(let validation in validations) {
        switch(validation) {
          case 'empty': 
          value ? setEmpty(false) : setEmpty(true)
          break;
          default:
          setEmpty(true)
        }
      }
    },[value,validations])

  useEffect(() => {
    if(empty || value === 'default') {
    setInputValid(false)
    } else {
    setInputValid(true)
    }
  }, [empty, value])

  return {empty, inputValid};
  }

  const useInput = ( initialValue, validations ) => {
    const [value, setValue] = useState(initialValue);
    const [dirty, setDirty] = useState(false);
    
    const valid = useValidation(value, validations);

    const onChange = (event) => {
    setValue(event.target.value);
    handleChange(event);
    }
   
    const onBlur = (e) => {
      setDirty(true);
    }
    
    return {
    value,
    onChange,
    onBlur,
    dirty,
    ...valid
    }
  }

  const title = useInput(descr.title, {empty: true});
  const author = useInput(descr.author, {empty: true});
  const category = useInput(descr.category, {empty: true});
  const ISBN = useInput(descr.ISBN, {empty: true});

  return (
    <FormCreator title={title} author={author} category={category} 
    ISBN={ISBN} handleOnSubmit={handleOnSubmit} />
  )
}

export default Validation;