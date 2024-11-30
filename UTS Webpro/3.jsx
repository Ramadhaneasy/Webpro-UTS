function InputBox() {
    return <input type="text" placeholder="Masukkan teks" />;
  }
  
  function Button() {
    return <button>Kirim</button>;
  }
  
  function Form() {
    return (
      <div>
        <InputBox />
        <Button />
      </div>
    );
  }
  