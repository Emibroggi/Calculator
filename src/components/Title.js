import emoji from '../images/emoji.png';

const Title = () => (
    <div className='box-titulo'>
       <h1 className='text-titulo'> My Calculator</h1>
        <img 
          src={emoji}
          className='emoji'
          alt='Calculator' />
       </div>
);

export default Title;