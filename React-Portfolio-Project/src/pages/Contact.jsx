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
    borderRadius: '5px',
    width: '100%',
  };

  const buttonStyles = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={{ textAlign: 'center', margin: '50px auto', padding: '20px' }}>
      <h1>Contact Me!</h1>
      <h4>I would love to answer any questions about my work</h4>
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
          placeholder="Message goes here"
        />
        <button style={buttonStyles} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}







