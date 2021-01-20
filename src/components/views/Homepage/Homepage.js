import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Axios from 'axios';

import styles from './HomePage.module.scss';

import { api } from '../../../settings';

import { PokemonList } from '../../features/PokemonList/PokemonList';
import { Spinner } from '../../common/Spinner/Spinner';
import { Button } from '../../common/Button/Button';
import { SearchInput } from '../../common/SearchInput/SearchInput';


const Component = ({ className }) => {
  const [pokemons, setPokemons] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [nextPageURL, setNextPageURL] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [numberOfAllPokemons, setNumberOfAllPokemons] = useState(0);

  useEffect(() => {
    setLoading(true);
    Axios
      .get(`${api.url}/`)
      .then(res => {
        setLoading(false);
        setNextPageURL(res.data.next);
        setPokemons(res.data.results);
        setNumberOfAllPokemons(res.data.count);
      })
      .catch(err => {
        setLoading(false);
        setErrorMessage(err.message);
      });
  }, []);

  const handleLoadMorePokemons = () => {

    setLoadingMore(true);

    Axios
      .get(nextPageURL)
      .then(res => {
        setLoadingMore(false);
        setNextPageURL(res.data.next);
        setPokemons([...pokemons, ...res.data.results]);
      })
      .catch(err => {
        setLoadingMore(false);
        setErrorMessage(err.message);
      });
  };

  const filteredPokemons = pokemons.filter(({ name }) => name.includes(searchString.toLocaleLowerCase()));

  return (
    <main className={clsx(className, styles.root)}>
      {loading
        ?
        <Spinner />
        :
        errorMessage
          ?
          <p className={styles.error}>Błąd pobierania danych, spróbuj ponownie</p>
          :
          <>
            <SearchInput className={styles.search} setSearchString={setSearchString} />
            <PokemonList pokemons={filteredPokemons} />
            {loadingMore ? <Spinner /> : (pokemons.length < numberOfAllPokemons) && <Button text='Load more Pokemons!' action={handleLoadMorePokemons} className={styles.button} />}
          </>
      }
    </main>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as HomePage,
};

