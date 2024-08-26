import { useState, useEffect } from 'react';
import Compressor from 'compressorjs';
import { createClient, deleteClient, fetchClients, updateClient } from '../../services/admin-clients';

const ClientManager = () => {
  const [clients, setClients] = useState([]);
  const [form, setForm] = useState({ id: '', image: '', name: '', description: '', position: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const getClients = async () => {
      try {
        const clients = await fetchClients();
        setClients(clients);
      } catch (error) {
        console.error('Error fetching clients:', error);
      }
    };
    
    getClients();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      new Compressor(file, {
        quality: 0.8, // Adjust quality as needed
        success(result) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setForm((prevForm) => ({ ...prevForm, image: reader.result }));
          };
          reader.readAsDataURL(result);
        },
        error(err) {
          console.error('Image compression error:', err);
        },
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await updateClient(form.id, form);
      } else {
        await createClient(form);
      }
      const clients = await fetchClients();
      setClients(clients);
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleEdit = (client) => {
    setForm({
      id: client._id,
      image: client.image,
      name: client.name,
      description: client.description,
      position: client.position,
    });
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteClient(id);
      const clients = await fetchClients();
      setClients(clients);
    } catch (error) {
      console.error('Error deleting client:', error);
    }
  };

  const resetForm = () => {
    setForm({ id: '', image: '', name: '', description: '', position: '' });
    setIsEditing(false);
  };

  return (
    <div>
      <h2 className="mb-4">{isEditing ? 'Update Client' : 'Add New Client'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Client Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Position</label>
          <input
            type="text"
            className="form-control"
            name="position"
            value={form.position}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={form.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Image</label>
          <input
            type="file"
            className="form-control"
            onChange={handleFileChange}
            accept="image/*"
          />
          {form.image && <img src={form.image} alt="Client" className="mt-2" style={{ maxWidth: '200px' }} />}
        </div>
        <button type="submit" className="btn btn-primary">
          {isEditing ? 'Update Client' : 'Add Client'}
        </button>
        {isEditing && (
          <button type="button" className="btn btn-secondary ms-2" onClick={resetForm}>
            Cancel
          </button>
        )}
      </form>

      <h2 className="mt-5">Clients List</h2>
      <div className="list-group">
        {clients.map((client) => (
          <div key={client.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              {client.image && <img src={client.image} alt={client.name} style={{ maxWidth: '100px' }} />}
              <h5 className="mt-2">{client.name}</h5>
              <p>{client.description}</p>
              <p>{client.position}</p>
            </div>
            <div>
              <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(client)}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(client._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientManager;
