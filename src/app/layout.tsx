


// "use client"
// import localFont from "next/font/local";
// import "./globals.css";

// import { Toaster } from "sonner";
// import { usePathname } from "next/navigation";
// import { ClerkProvider } from "@clerk/nextjs";
// import { useEffect, useState } from "react";
// import { AdminHeader } from "@/components/AdminHeader";
// import { AdminSidebar } from "@/components/AdminSidebar";


// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const pathname = usePathname();
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setIsLoading(true);
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, [pathname]); // Trigger effect on route change

//   // const isAdmin = pathname.startsWith("/admin");
//   // const isOrders = pathname.startsWith("/orders");
//   // const isCustomers = pathname.startsWith("/customers");
//   // const isStatistics = pathname.startsWith("/product-data");
//   // const isReviews = pathname.startsWith("/reviews");
//   const isHome = pathname.startsWith("/sign-in");
//   const isStudio = pathname.startsWith("/studio");
//   // const studioAndHome = !isAdmin && !isOrders && !isCustomers && !isStatistics && !isReviews
  

//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body >
//           <Toaster richColors />
//          {/* {children} */}
//          <div className="min-h-screen">
//                <AdminHeader />
//                <div className="flex">
//                  <AdminSidebar />
//                  <main className="flex-1 p-8 bg-muted/40">{children}</main>
//                </div>
//              </div>
         
        
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }

"use client"

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { AdminHeader } from "@/components/AdminHeader";
import { AdminSidebar } from "@/components/AdminSidebar";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <ClerkProvider>

    <html lang="en">
      <body
      
      >

 <Toaster richColors /> 
      <div className="min-h-screen">
              <AdminHeader />
              <div className="flex">
                <AdminSidebar />
                <main className="flex-1 p-8 bg-muted/40">{children}</main>
              </div>
            </div>
      </body>
    </html>
    </ClerkProvider >
  );
}