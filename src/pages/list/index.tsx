import { useState, useEffect } from 'react';

function List() {
  const [state, setState] = useState(1);

  useEffect(() => {
    setState(2);
    return () => {};
  }, []);

  return (
    <section className="text-3xl font-bold underline">
      <div>test111111</div>
      {state}
    </section>
  );
}

export default List;
