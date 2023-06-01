import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import { MagnifyingGlass } from 'react-loader-spinner';
import { getMovieCast } from 'components/Service/Api';
import PropTypes from 'prop-types';

const Cast = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const castData = await getMovieCast(movieId);
        setData(castData.cast);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard:', text);
      })
      .catch((error) => {
        console.log('Failed to copy text:', error);
      });
  };

  return (
    <>
      {loading ? (
        <div className={css.loading}>
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{ margin: '0 auto' }}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      ) : data && data.length > 0 ? (
        <div className={css.container}>
          <div className={css.listWrap}>
            <ul className={css.list}>
              {data.map(({ name, character, profile_path, id }) => (
                <li key={id} className={css.listItem}>
                  {profile_path ? (
                    <img
                      className={css.listImg}
                      alt={name}
                      src={`https://image.tmdb.org/t/p/w92${profile_path}`}
                    />
                  ) : (
                    <img className={css.listImg} alt={name} src='/src/svg/user_1.svg' />
                  )}

                  <p className={css.listName}>{name}</p>
                  <p className={css.listCharacter}>{character}</p>
                  <button onClick={() => handleCopy(name)}>Copy Name</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p className={css.error}>No data found</p>
      )}
    </>
  );
};

Cast.propTypes = {
  movieId: PropTypes.number,
};

export default Cast;