import { useState } from 'react';

const AddTutorial = ({ addTutorial }) => {  // home.jsx den gonderdigimiz addTutorial fonksiyonunu karsiliyoruz.
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();   // her yeni veri girildiginde sayfayi yenilemesin diye.
    addTutorial({ title: title, description: desc });
    setTitle('');  // sayfa yenilendiginde bu kisimlari bosaltmasi icin
    setDesc('');  // sayfa yenilendiginde bu kisimlari bosaltmasi icin
  };

  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Enter your Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-danger mb-4">Submit</button>
      </form>
    </div>
  );
};

export default AddTutorial;
