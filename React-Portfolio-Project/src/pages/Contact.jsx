import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(`Success, ${name}! This form doesn't work though :/`);
    setName('');
    setEmail('');
    setMessage('');
  };

  const inputStyles = {
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    width: '100%',
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#8CBCFF',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    fontWeight: '900',
    fontSize: '15px',
    textAlign: 'center'
  };

  return (
    <div style={{ textAlign: 'center', margin: '50px auto', padding: '20px' }}>
      <h1>Contact Me!</h1>
      <h3 style={{marginTop: '20px', marginBottom: '30px'}}>I would love to answer any questions about my work</h3>
      <form
        style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', margin: '0 auto' }}
        onSubmit={handleFormSubmit}
      >
        <input
          style={inputStyles}
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <input
          style={inputStyles}
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="JohnDo@gmail.com"
        />
        <textarea
          style={inputStyles}
          value={message}
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Send me a message!"
        />
        <button style={buttonStyle} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}







