export default function Average(): JSX.Element {
  return (
    <div>
      <h1 className='mt-5'>Daily Average Stats</h1>
      <div className='container-avg flex flex-wrap'>
        <div className='report flex-1 min-w-[12rem] flex flex-col justify-between'>
          <span>Avg. Steps /day</span>
          <span>9,340</span>
          <div>
            <p>
              <strong>+355</strong>
            </p>
            <span>last month</span>
          </div>
        </div>
        <div className='report flex-1 min-w-[12rem] flex flex-col justify-between'>
          <span>Minutes /day</span>
          <span>94</span>
          <div>
            <p>
              <strong>+12</strong>
            </p>
            <span>last month</span>
          </div>
        </div>
        <div className='report flex-1 min-w-[12rem] flex flex-col justify-between'>
          <span>kCal Burnt /day</span>
          <span>142</span>
          <div>
            <p>
              <strong>+22</strong>
            </p>
            <span>last month</span>
          </div>
        </div>
      </div>
    </div>
  );
}
