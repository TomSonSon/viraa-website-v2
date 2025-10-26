import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Viraa logo" className="h-8 w-auto" />
            <div>
              <p className="font-semibold text-foreground">Viraa Health</p>
              <p className="text-xs text-muted-foreground">Wellbeing insights, powered by AI</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2025 Viraa Health. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
