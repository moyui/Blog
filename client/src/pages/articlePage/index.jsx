import React from 'react';
import NavBar from '../../components/navBar/index';


import query from './api';

function ArticlePage() {
  const [info, setInfo] = useState({});

  query();

  useEffect(() => {
    return () => {
      effect;
    };
  }, [input]);

  return (
    <>
      <NavBar></NavBar>

    </>
  );
}

export default ArticlePage;
