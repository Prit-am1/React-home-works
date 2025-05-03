import { useParams, useNavigate } from 'react-router-dom';
import {blogs} from './BlogList.jsx';

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find(b => b.id === parseInt(id));

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.description}</p>
      <br />
      <button onClick={() => navigate('/blogs')}>Back to Blog List</button>{' '}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default BlogDetail;
