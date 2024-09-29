import Quizzes from "./Pages/Quizzes";
import Courses from "./Pages/Courses";
import Settings from "./Pages/Settings";
import Categories from "./Pages/Categories";
import Dashboard from "@mui/icons-material/Dashboard";

const AdminRoutes = () => {
  return (
    <Router>
      <AdminLayout>
        <Routes>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/quizzes" element={<Quizzes />} />
          <Route path="/admin/courses" element={<Courses />} />
          <Route path="/admin/categories" element={<Categories />} />
          <Route path="/admin/settings" element={<Settings />} />
        </Routes>
      </AdminLayout>
    </Router>
  );
};

export default AdminRoutes;