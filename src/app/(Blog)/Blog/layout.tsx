import BlogFooter from "@/components/Blog/Footer/BlogFooter";

export default function DashboardLayout({
                                            children, // will be a page or nested layout
                                        }: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
            <BlogFooter/>
        </>

    )
}