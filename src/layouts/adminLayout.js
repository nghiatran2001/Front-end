import Admin from "../pages/Admin/Admin";
function AdminLayout({ children }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        // minWidth: "110vw",
        minHeight: "100vh",
        display: "flex",
        overflow: "scroll-y",
      }}
    >
      <Admin />
      {children}
    </div>
  );
}

export default AdminLayout;
