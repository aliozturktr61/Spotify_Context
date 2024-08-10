import axios from 'axios';
import {createContext, useEffect, useState} from 'react';
//* 1.adım:Contextin temelini oluşturur
const AlbumsContext = createContext();
//* 2.adım:Context sağlayıcısıdır ve value propu ile sağlanan değerleri dışarıya aktarır
//* children propu bu bileşen tarafından sarılan tüm alt bileşenleri
const AlbumsProvider = ({children}) => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/search/',
      params: {
        q: 'Türkiye de popüler olanlar',
        type: 'albums',
        offset: '0',
        limit: '10',
        numberOfTopResults: '5',
      },
     headers: {
    'x-rapidapi-key': 'df36766df4msh611d2126b0e0dd2p1a7b86jsn19e479662678',
    'x-rapidapi-host': 'spotify23.p.rapidapi.com'
  },
    };

    try {
      //* API isteği
      const response = await axios.request(options);
      //* API'den gelen veriyi dönüp içerisindeki alacağımız verileri obje olarak aldık diğer alanlarda kullanabiliriz.
      const albumsItems = response.data?.albums?.items?.map(item => ({
        uri: item.data.uri,
        name: item.data.name,
        artist: item.data.artists.items[0].profile.name,
        coverArt: item.data.coverArt.sources[0].url,
        year: item.data.date.year,
      }));
      setAlbums(albumsItems);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AlbumsContext.Provider value={{albums, loading, error}}>
      {children}
    </AlbumsContext.Provider>
  );
};

export {AlbumsContext, AlbumsProvider};
