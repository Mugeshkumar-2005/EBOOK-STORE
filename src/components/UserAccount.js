// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const UserAccount = () => {
//   const [downloadedBooks, setDownloadedBooks] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedDownloadedBooks = JSON.parse(localStorage.getItem('downloadedBooks')) || [];
//     setDownloadedBooks(storedDownloadedBooks);
//   }, []);

//   const handleDownloadAgain = (bookUrl) => {
//     const link = document.createElement('a');
//     link.href = bookUrl;
//     link.download = bookUrl.split('/').pop();
//     link.click();
//   };

//   return (
//     <div style={styles.account}>
//       <h2 style={styles.heading}>User Account</h2>
//       <p style={styles.description}>
//         Manage your ebook library and download history here.
//       </p>

//       <div style={styles.librarySection}>
//         <h3 style={styles.subheading}>Your Ebook Library</h3>
//         {downloadedBooks.length > 0 ? (
//           <ul style={styles.ebookList}>
//             {downloadedBooks.map((ebook, index) => (
//               <li key={index} style={styles.ebookItem}>
//                 <span style={styles.ebookTitle}>{ebook.title}</span>
//                 <span style={styles.ebookDate}>
//                   Downloaded on: {new Date(ebook.downloadDate).toLocaleDateString()}
//                 </span>
//                 <button onClick={() => handleDownloadAgain(ebook.url)} style={styles.downloadButton}>
//                   Download Again
//                 </button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p style={styles.noEbooks}>No ebooks downloaded yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// const styles = {
//   account: {
//     padding: '20px',
//     margin: '0 auto',
//     border: '1px solid #ddd',
//     borderRadius: '8px',
//     boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
//   },
//   heading: {
//     fontSize: '24px',
//     marginBottom: '10px',
//     textAlign: 'center',
//   },
//   description: {
//     fontSize: '16px',
//     textAlign: 'center',
//     marginBottom: '20px',
//   },
//   librarySection: {
//     marginTop: '20px',
//   },
//   subheading: {
//     fontSize: '20px',
//     marginBottom: '10px',
//   },
//   ebookList: {
//     listStyleType: 'none',
//     padding: '0',
//   },
//   ebookItem: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     padding: '10px',
//     borderBottom: '1px solid #ddd',
//     alignItems: 'center',
//   },
//   ebookTitle: {
//     fontWeight: 'bold',
//   },
//   ebookDate: {
//     fontStyle: 'italic',
//     color: '#555',
//   },
//   noEbooks: {
//     textAlign: 'center',
//     color: '#888',
//   },
//   downloadButton: {
//     padding: '5px 10px',
//     backgroundColor: '#007bff',
//     color: 'white',
//     border: 'none',
//     cursor: 'pointer',
//     borderRadius: '3px',
//   },
// };

// export default UserAccount;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserAccount = () => {
  const [downloadedBooks, setDownloadedBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [editingUser, setEditingUser] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const apiUrl = 'http://localhost:3000/users'; // Update with your API endpoint

  // Fetch downloaded books from localStorage
  useEffect(() => {
    const storedDownloadedBooks = JSON.parse(localStorage.getItem('downloadedBooks')) || [];
    setDownloadedBooks(storedDownloadedBooks);
    fetchUsers(); // Fetch users on component mount
  }, []);

  // Fetch the list of users from the server
  const fetchUsers = async () => {
    try {
      const response = await axios.get(apiUrl);
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Failed to fetch users.');
    }
  };

  // Save a new user
  const saveUser = async () => {
    if (!newUser.name || !newUser.email || !validateEmail(newUser.email)) {
      setError('Please provide a valid name and email.');
      return;
    }
    try {
      const response = await axios.post(apiUrl, newUser);
      setUsers([...users, response.data]);
      setNewUser({ name: '', email: '' });
      setMessage('User added successfully!');
      setError('');
    } catch (error) {
      console.error('Error saving user:', error);
      setError('Failed to save user.');
    }
  };

  // Update an existing user
  const updateUser = async (id) => {
    if (!editingUser.name || !editingUser.email || !validateEmail(editingUser.email)) {
      setError('Please provide a valid name and email.');
      return;
    }
    try {
      const response = await axios.put(`${apiUrl}/${id}`, editingUser);
      setUsers(users.map(user => (user.id === id ? response.data : user)));
      setEditingUser(null);
      setMessage('User updated successfully!');
      setError('');
    } catch (error) {
      console.error('Error updating user:', error);
      setError('Failed to update user.');
    }
  };

  // Delete a user
  const deleteUser = async (id) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setUsers(users.filter(user => user.id !== id));
      setMessage('User deleted successfully!');
    } catch (error) {
      console.error('Error deleting user:', error);
      setError('Failed to delete user.');
    }
  };

  // Email validation
  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingUser(null);
    setError('');
  };

  // Re-download a book
  const handleDownloadAgain = (bookUrl) => {
    const link = document.createElement('a');
    link.href = bookUrl;
    link.download = bookUrl.split('/').pop();
    link.click();
  };

  return (
    <div style={styles.account}>
      <h2 style={styles.heading}>User Account</h2>
      <p style={styles.description}>
        Manage your ebook library and user details here.
      </p>

      {/* Display error or success messages */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}

      {/* Downloaded Books Section */}
      <div style={styles.librarySection}>
        <h3 style={styles.subheading}>Your Ebook Library</h3>
        {downloadedBooks.length > 0 ? (
          <ul style={styles.ebookList}>
            {downloadedBooks.map((ebook, index) => (
              <li key={index} style={styles.ebookItem}>
                <span style={styles.ebookTitle}>{ebook.title}</span>
                <span style={styles.ebookDate}>
                  Downloaded on: {new Date(ebook.downloadDate).toLocaleDateString()}
                </span>
                <button onClick={() => handleDownloadAgain(ebook.url)} style={styles.downloadButton}>
                  Download Again
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p style={styles.noEbooks}>No ebooks downloaded yet.</p>
        )}
      </div>

      {/* User Management Section */}
      <div style={styles.librarySection}>
        <h3 style={styles.subheading}>User Management</h3>

        {/* Add New User Form */}
        <div>
          <h4>Add New User</h4>
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={e => setNewUser({ ...newUser, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={e => setNewUser({ ...newUser, email: e.target.value })}
          />
          <button onClick={saveUser} style={styles.saveButton}>Save</button>
        </div>

        {/* List of Users */}
        <ul style={styles.ebookList}>
          {users.map(user => (
            <li key={user.id} style={styles.ebookItem}>
              {user.name} - {user.email}
              <button onClick={() => deleteUser(user.id)} style={styles.deleteButton}>Delete</button>
              <button onClick={() => setEditingUser(user)} style={styles.editButton}>Edit</button>
            </li>
          ))}
        </ul>

        {/* Edit User Form */}
        {editingUser && (
          <div>
            <h4>Edit User</h4>
            <input
              type="text"
              value={editingUser.name}
              onChange={e => setEditingUser({ ...editingUser, name: e.target.value })}
            />
            <input
              type="email"
              value={editingUser.email}
              onChange={e => setEditingUser({ ...editingUser, email: e.target.value })}
            />
            <button onClick={() => updateUser(editingUser.id)} style={styles.saveButton}>Update</button>
            <button onClick={cancelEdit} style={styles.cancelButton}>Cancel</button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  account: {
    padding: '20px',
    margin: '0 auto',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '10px',
    textAlign: 'center',
  },
  description: {
    fontSize: '16px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  librarySection: {
    marginTop: '20px',
  },
  subheading: {
    fontSize: '20px',
    marginBottom: '10px',
  },
  ebookList: {
    listStyleType: 'none',
    padding: '0',
  },
  ebookItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: '1px solid #ddd',
    alignItems: 'center',
  },
  ebookTitle: {
    fontWeight: 'bold',
  },
  ebookDate: {
    fontStyle: 'italic',
    color: '#555',
  },
  noEbooks: {
    textAlign: 'center',
    color: '#888',
  },
  downloadButton: {
    padding: '5px 10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '3px',
  },
  saveButton: {
    padding: '5px 10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '3px',
  },
  editButton: {
    padding: '5px 10px',
    backgroundColor: '#ffc107',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '3px',
  },
  deleteButton: {
    padding: '5px 10px',
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '3px',
  },
  cancelButton: {
    padding: '5px 10px',
    backgroundColor: '#6c757d',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '3px',
  }
};

export default UserAccount;
