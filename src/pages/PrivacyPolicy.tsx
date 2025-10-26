import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/')}
          className="mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <article className="max-w-4xl mx-auto bg-card rounded-2xl shadow-soft p-8 lg:p-12">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          {/* 
            PASTE YOUR PRIVACY POLICY CONTENT BELOW THIS COMMENT
            
            You can structure it with sections like:
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Section Title</h2>
              <p className="text-muted-foreground mb-4">
                Your content here...
              </p>
            </section>
          */}
          
          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground mb-4">
              Last updated: [DATE]
            </p>
            
            {/* ADD YOUR PRIVACY POLICY SECTIONS HERE */}
            
          </div>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
