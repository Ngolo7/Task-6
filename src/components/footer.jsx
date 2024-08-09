function Footer() {
  return (
    <div className="h-12 bg-blue-400 flex justify-center">
      <div className="text-white text-center">
        &copy; {new Date().getFullYear()}
        2024 Cristiano7. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
