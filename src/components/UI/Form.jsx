import React from 'react';
import '../../styles/form.css';

const FormCreator = ({title, author, category, ISBN, handleOnSubmit }) => {
  return(
    <div>
      <h2> Enter Book Description</h2>
      <form onSubmit={handleOnSubmit} className='form'>
        <div className='form__input'>
        {(title.dirty && title.empty) ? <div style={{color:'red'}}>Enter title</div> : <div style={{color:'bisque'}}>Enter title</div> }
        <input className={(title.dirty && title.empty) ? 'form__input_error': ''}  name='title' value={ title.value} placeholder="Book title"  
          type="text" onChange={title.onChange} onBlur={title.onBlur} />
        </div>
        <div className='form__input'>
        {(author.dirty && author.empty) ? <div style={{color:'red'}}> Enter author</div> : <div style={{color:'bisque'}}>Enter author</div>}
        <input className={(author.dirty && author.empty) ? 'form__input_error': ''} name='author' value={author.value}  placeholder="Book author" 
          type="text" onChange={author.onChange} onBlur={author.onBlur} />
        </div>
        <div className='form__input'>
        {(category.dirty && category.empty) ? <div style={{color:'red'}}> Select category</div> :  <div style={{color:'bisque'}}>Select category</div>}
        <select className={(category.dirty && category.empty) ? 'form__input_error': ''} name="category" value={category.value} onChange={category.onChange} onBlur={category.onBlur}>
          <option value='default'>{category.value ? category.value  : "choose category"}</option>;
          <option value='handbook'>"handbook"</option>;
          <option value='fantasy'>"fantasy"</option>;
          <option value='drama'>"drama"</option>;
        </select>
        </div>
        <div className='form__input'>
        {(ISBN.dirty && ISBN.empty) ? <div style={{color:'red'}}> Enter ISBN</div> : <div style={{color:'bisque'}}>Enter ISBN</div>}
        <input className={(ISBN.dirty && ISBN.empty) ? 'form__input_error': ''} name='ISBN' value={ISBN.value} placeholder="Book ISBN"
          type="text" onChange={ISBN.onChange} onBlur={ISBN.onBlur}/>
        </div>
        <button className='form__btn' disabled={!title.inputValid || !author.inputValid || !category.inputValid ||  !ISBN.inputValid} 
          type='submit'>  ADD  </button> 
      </form >
    </div>
  )
}

export default FormCreator;