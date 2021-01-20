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

  useEffect(() => {
    setLoading(true);
    Axios
      .get(`${api.url}/`)
      .then(res => {
        console.log('  ~ file: Homepage.js ~ line 24 ~ res', res);
        setLoading(false);
        setNextPageURL(res.data.next);
        setPokemons(res.data.results);
      })
      .catch(err => {
        console.log('  ~ file: Homepage.js ~ line 28 ~ err', err);
        setLoading(false);
        // setErrorMessage(err.message);

      });


  }, []);

  const handleLoadMorePokemons = () => {

    setLoadingMore(true);

    Axios
      .get(nextPageURL)
      .then(res => {
        console.log('  ~ file: Homepage.js ~ line 24 ~ res', res);
        setLoadingMore(false);
        setNextPageURL(res.data.next);
        setPokemons([...pokemons, ...res.data.results]);
      })
      .catch(err => {
        console.log('  ~ file: Homepage.js ~ line 28 ~ err', err);
        setLoadingMore(false);
        // setErrorMessage(err.message);

      });


  };

  console.log(searchString);

  const filteredPokemons = pokemons.filter(({ name }) => name.includes(searchString.toLocaleLowerCase()));

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
          <>
            <SearchInput className={styles.search} setSearchString={setSearchString} />
            <PokemonList pokemons={filteredPokemons} />
            {loadingMore ? <Spinner /> : <Button text='Load more Pokemons!' action={handleLoadMorePokemons} />}
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

