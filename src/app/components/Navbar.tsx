export default function Navbar(): JSX.Element {
  return (
    <div>
      <header className='flex flex-wrap justify-between items-center'>
        <a href='#' className='flex-1'>
          <img
            className='inline h-7'
            src='https://res.cloudinary.com/thirus/image/upload/v1628614672/logos/circleai_dm9slt.png'
            alt=''
          />
        </a>
        <ul className='header-ul order-last flex-[100%] mt-4 md:order-none md:flex-auto md:mt-0'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About Us</a>
          </li>
          <li>
            <a href='#'>Pricing</a>
          </li>
          <li>
            <a href='#'>Products</a>
          </li>
        </ul>
        <span className='text-right flex-1'>
          <a href='#' className='btn'>
            Join us
          </a>
        </span>
      </header>
    </div>
  );
}
