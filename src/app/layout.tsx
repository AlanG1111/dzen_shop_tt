import Header from "@/components/Header";
import NavigationMenu from "@/components/NavigationMenu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <div className='vh-100 vw-100'>
          <Header />
          <div className='d-flex h-100'>
            <NavigationMenu />
            <main className='w-100'>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
