import { Link, useNavigate } from 'react-router-dom';

export const blogs = [
  { id: 1, title: 'React Basics', description: 'Learn the fundamentals of React.' },
  { id: 2, title: 'React Router', description: 'Routing in React using React Router.' },
  { id: 3, title: 'State Management', description: 'Understanding useState and useEffect.' },
  { id: 4, title: 'Forms in React', description: 'How to handle forms and inputs.' },
  { id: 5, title: 'React Hooks', description: 'Introduction to useRef, useMemo, and more.' },
  { id: 6, title: 'React Hooks2', description: 'Introduction to useRef, useMemo, and more.' },
  { id: 7, title: 'React Hooks3', description: 'Introduction to useRef, useMemo, and more.' },
];

function BlogList() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <div>
      <h2>Blog List</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default BlogList;
