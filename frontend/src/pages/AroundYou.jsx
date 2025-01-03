import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';

import { Error, Loader, SongCard } from '../components';

const AroundYou = () => {
  // const [country, setCountry] = useState('');
  const [country, setCountry] = useState('PH');
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByCountryQuery(country);

  console.log(country);

  // Uncomment this and get your API key from your account at geo.ipify.com
   useEffect(() => {
    axios.get(`https://geo.ipify.org/api/v1?apiKey=60b14b975dfcc2ff7938fdd2ca4fc6b0fc9dbec4`)
      .then((res) => setCountry(res?.data?.location?.country))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [country]); 

  if (isFetching && loading) return <Loader title="Loading songs around you" />;
  if (error && country) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left">
        Around You <span className="font-black">{country}</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default AroundYou;
