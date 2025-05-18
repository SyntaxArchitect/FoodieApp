// import './globals.css'
// import { ReduxProvider } from '../redux/ReduxProvider';
// import { Navbar, ThemeToggleButton, ThemeProvider } from '@/components';

// export const metadata = {
//   title: 'FoodieApp',
//   description: 'FoodieApp',
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen">
//         <ReduxProvider>
//           <ThemeProvider>
//             <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
//               <Navbar />
//               <main className="max-w-5xl mx-auto px-3 py-6">
//                 {children}
//               </main>
//               <ThemeToggleButton />
//             </div>
//           </ThemeProvider>
//         </ReduxProvider>
//       </body>
//     </html>
//   );
// }


import './globals.css'
import { ReduxProvider } from '../redux/ReduxProvider';
import { Navbar, ThemeToggleButton, ThemeProvider } from '@/components';

export const metadata = {
  title: 'FoodieApp',
  description: 'FoodieApp',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className="min-h-screen">
        <ReduxProvider>
          <ThemeProvider>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
              <Navbar />
              <main className="max-w-5xl mx-auto px-3 py-6">
                {children}
              </main>
              <ThemeToggleButton />
            </div>
          </ThemeProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}