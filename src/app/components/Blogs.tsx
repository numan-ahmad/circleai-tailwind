export default function Blogs(): JSX.Element {
  return (
    <div className='containerBlog grid grid-cols-[repeat(auto-fit,minmax(25rem,1fr))] gap-8 md:p-40'>
      <div className='item'>
        <img src='https://picsum.photos/400/300' alt='' />
        <div>
          <h2>Blog title 1</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            assumenda porro inventore repellendus ipsum.
          </p>
          <a className='ancker-tag' href='#'>
            Read more
          </a>
        </div>
      </div>
      <div className='item'>
        <img src='https://picsum.photos/400/300?1' alt='' />
        <div>
          <h2>Blog title 2</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            assumenda porro inventore repellendus ipsum.
          </p>
          <a className='ancker-tag' href='#'>
            Read more
          </a>
        </div>
      </div>
      <div className='item'>
        <img src='https://picsum.photos/400/300?2' alt='' />
        <div className='desc'>
          <h2>Blog title 3</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            assumenda porro inventore repellendus ipsum.
          </p>
          <a className='ancker-tag' href='#'>
            Read more
          </a>
        </div>
      </div>
      <div className='item'>
        <img src='https://picsum.photos/400/300?3' alt='' />
        <div className='desc'>
          <h2>Blog title 4</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            assumenda porro inventore repellendus ipsum.
          </p>
          <a className='ancker-tag' href='#'>
            Read more
          </a>
        </div>
      </div>
      <div className='item'>
        <img src='https://picsum.photos/400/300?4' alt='' />
        <div className='desc'>
          <h2>Blog title 5</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            assumenda porro inventore repellendus ipsum.
          </p>
          <a className='ancker-tag' href='#'>
            Read more
          </a>
        </div>
      </div>
      <div className='item'>
        <img src='https://picsum.photos/400/300?5' alt='' />
        <div className='desc'>
          <h2>Blog title 6</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            assumenda porro inventore repellendus ipsum.
          </p>
          <a className='ancker-tag' href='#'>
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
