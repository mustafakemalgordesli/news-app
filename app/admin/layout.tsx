import AdminSideBar from "@/components/AdminSideBar";

const Layout = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <div className="flex">
            <AdminSideBar />
            {children}
        </div>
    )

};

export default Layout;
