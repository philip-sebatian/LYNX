// app/layout.tsx or pages/_app.js depending on your setup
import './globals.scss'; // Adjust the path as needed
import React from 'react';
export default function RootLayout({ children}:{children:React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <title>Radial Gradients Example</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
