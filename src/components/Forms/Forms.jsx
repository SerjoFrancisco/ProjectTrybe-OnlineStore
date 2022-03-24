import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default function Forms(props) {
  const { onChange, email, messageDescription, onClick } = props;
  const stars = ['1', '2', '3', '4', '5'];
  return (
    <div>
      <form className="form-container" onSubmit={ (e) => e.preventDefault() }>
        <input
          className="email-form"
          name="email"
          type="text"
          placeholder="Email: emailtendetudo@email.com"
          data-testid="product-detail-email"
          value={ email }
          onChange={ onChange }
        />
        <div className="rating-div">
          <p className="title-rating">Avaliação: </p>
          {stars.map((element, index) => (
            <label className="rating-label" key={ index } htmlFor={ `${element}-star` }>
              {element}
              <input
                className="rating"
                id={ `${element}-star` }
                type="radio"
                name="starRating"
                value={ element }
                onChange={ onChange }
                data-testid={ `${element}-rating` }
              />
            </label>))}
        </div>
        <textarea
          className="text-area"
          name="messageDescription"
          placeholder="Mensagem(opcional)"
          data-testid="product-detail-evaluation"
          value={ messageDescription }
          onChange={ onChange }
        />
      </form>
      <button
        className="button-submit"
        type="submit"
        data-testid="submit-review-btn"
        onClick={ onClick }
      >
        Enviar

      </button>
    </div>
  );
}

Forms.propTypes = {
  onChange: PropTypes.func,
  email: PropTypes.string,
  messageDescription: PropTypes.string,
}.isRequired;
