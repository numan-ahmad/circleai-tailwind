export default function ManinSection(): JSX.Element {
  return (
    <section className='containerMain w-full flex flex-col md:flex-row items-center'>
      <img
        className='newone flex-1'
        src='https://res.cloudinary.com/thirus/image/upload/v1634585194/images/details-1_e7ojp9.svg'
        alt=''
      />
      <div className='h-1/2 md:w-1/2 md:h-sm p-20'>
        <h1>
          Perfect solution
          <br />
          <strong>for your small business</strong>
        </h1>
        <p>
          Maecenas fringilla quam posuere, pellentesque est nec, gravida turpis.
          Integer vitae mollis felis. Integer id quam id tellus hendrerit
          laciniad binfer
        </p>
        <p>
          Sed id dui rutrum, dictum urna eu, accumsan turpis. Fusce id auctor
          velit, sed viverra dui rem dina
        </p>
        <button>Modal</button>
      </div>
    </section>
  );
}
