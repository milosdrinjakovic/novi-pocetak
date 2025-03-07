import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';

const CustomFooter = () => {
  return (
    <footer className="bg-customBlue text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Kontakt */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <p className="flex items-center space-x-2">
              <AiFillPhone className="text-xl" />
              <span>064-222-444</span>
            </p>
            <p className="mt-2">info@selidbe.rs</p>
          </div>

          {/* Linkovi */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Brzi Linkovi</h3>
            <ul>
              <li><a href="/o-nama" className="hover:text-customYellow">O nama</a></li>
              <li><a href="/usluge" className="hover:text-customYellow">Usluge</a></li>
              <li><a href="/gallery" className="hover:text-customYellow">Galerija</a></li>
            </ul>
          </div>

          {/* Društvene mreže */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Pratite nas</h3>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl " />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl " />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-2xl " />
              </a>
            </div>
          </div>

          {/* Adresa */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Naša lokacija</h3>
            <p>Beograd, Srbija</p>
            <p className="mt-2">Radno vreme: Ponedeljak - Nedelja: 24/7</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p>&copy; 2025 Novi Početak | Sva prava zadržana</p>
        </div>
      </div>
    </footer>
  );
};

export default CustomFooter;
