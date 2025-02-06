

// "use client"

// import "./globals.css";
// import { ClerkProvider } from "@clerk/nextjs";

// import { AdminHeader } from "@/components/AdminHeader";
// import { AdminSidebar } from "@/components/AdminSidebar";
// import { Toaster } from "@/components/ui/sonner";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {

//   return (
//     <ClerkProvider>

//     <html lang="en">
//       <body>

//  <Toaster richColors /> 
//       <div className="min-h-screen">
//               <AdminHeader />
//               <div className="flex">
//                 <AdminSidebar />
//                 <main className="flex-1 p-8 bg-muted/40">{children}</main>
//               </div>
//             </div>
//       </body>
//     </html>
//     </ClerkProvider >
//   );
// }


// sir
"use client"
import "./globals.css";
import { usePathname } from "next/navigation";
import { AdminHeader } from "@/components/AdminHeader";
import { AdminSidebar } from "@/components/AdminSidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const pathname = usePathname();

  const isHome = pathname.startsWith("/signin");
  const isStudio = pathname.startsWith("/studio");
  
  const studioAndSignIn = !isHome && !isStudio

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen">
          {studioAndSignIn && <AdminHeader />}
          <div className="flex">
         
            {studioAndSignIn && <AdminSidebar />}
            <main className="flex-1 bg-muted/40">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}