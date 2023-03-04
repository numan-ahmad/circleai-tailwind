export default function Footer(): JSX.Element {
  return (
    <footer className='flex justify-center'>
      <div className='footer-col'>
        <img
          src='https://res.cloudinary.com/thirus/image/upload/v1628614672/logos/circleai_dm9slt.png'
          alt='Circle AI Logo'
          height='30'
        />
        <p>The Company Tagline</p>
      </div>
      <div className='footer-col'>
        <h3>Quick Links</h3>
        <ul className='footer-ul'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className='footer-col'>
        <h3>Contact Us</h3>
        <ul className='footer-ul'>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className='footer-col'>
        <h3>Social</h3>
        <ul className='footer-ul'>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </footer>
  );
}
