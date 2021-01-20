import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Axios from 'axios';

import { api } from '../../../settings';

import { capitalizeFirstLetter } from '../../../utils/capitalizeFirstLetter';
import { generateIcon } from '../../../utils/generateIcon';

import { Spinner } from '../../common/Spinner/Spinner';

import styles from './PokemonPage.module.scss';

const Component = ({ className, match }) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {

    setLoading(true);

    Axios
      .get(`${api.url}/${match.params.id}`)
      .then(res => {
        setLoading(false);
        setPokemon(res.data);
      })
      .catch(err => {
        setLoading(false);
        setErrorMessage(err.message);
      });
  }, [match.params.id]);

  return (
    <main className={clsx(className, styles.root)}>
      {loading
        ?
        <Spinner />
        :
        errorMessage
          ?
          <p>Błąd pobierania danych</p>
          :
          <article className={clsx(className, styles.card)}>
            {pokemon ?
              <>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className={styles.image} />
                <div className={styles.descriptionContainer}>
                  <h4 className={styles.name}>{capitalizeFirstLetter(pokemon.name)}</h4>
                  <div className={styles.statsContainer}>
                    {pokemon.stats.slice(1, 5).map((stat, index) => <div key={`${pokemon.name}-stat-${index}`} className={styles.stats}><i className={generateIcon(stat.stat.name)}></i>{`${stat.base_stat}`}<span className={styles.tooltiptext}>{stat.stat.name}</span></div>)}
                  </div>
                </div>
              </>
              : null
            }
          </article>
      }
    </main>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  match: PropTypes.object,
};

export {
  Component as PokemonPage,
};

