export default function Package(): JSX.Element {
  return (
    <div className='wrapper'>
      <div className='container grid lg:grid-cols-3 gap-8'>
        <div className='plan'>
          <h2>Standard</h2>
          <span>Monthly Plan</span>
          <p className='price'>$25</p>
        </div>
        <div className='plan plan-highlight order-first sm:order-none'>
          <h2>Popular</h2>
          <span>Monthly Plan</span>
          <p className='price'>$40</p>
        </div>
        <div className='plan'>
          <h2>Premium</h2>
          <span>Monthly Plan</span>
          <p className='price'>$55</p>
        </div>
      </div>
    </div>
  );
}
