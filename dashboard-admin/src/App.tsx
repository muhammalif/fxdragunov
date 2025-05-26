
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./components/Dashboard";
import Home from "./pages/Home";
import ArticleList from "./pages/ArticleList";
import AddArticle from "./pages/AddArticle";
import EditArticle from "./pages/EditArticle";
import ProtectedRoute from "./components/ProtectedRoute";
import Index from "./pages/Index";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer 
        position="top-right" 
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route path="home" element={<Home />} />
            <Route path="articles" element={<ArticleList />} />
            <Route path="articles/add" element={<AddArticle />} />
            <Route path="articles/edit/:id" element={<EditArticle />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
