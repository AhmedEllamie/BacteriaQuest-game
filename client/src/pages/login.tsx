import { useEffect } from "react";
import { useLocation } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

declare global {
  interface Window {
    google?: any;
    handleCredentialResponse?: (response: any) => void;
  }
}

export default function Login() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    // Define the callback function
    window.handleCredentialResponse = (response) => {
      try {
        // @ts-ignore - jwt_decode is loaded from CDN
        const data = jwt_decode(response.credential);

        // Store user info in localStorage
        localStorage.setItem('user_name', data.name);
        localStorage.setItem('user_email', data.email);

        toast({
          title: "Welcome!",
          description: `Successfully signed in as ${data.name}`,
        });

        setLocation("/welcome");
      } catch (error) {
        console.error("Error handling Google response:", error);
        toast({
          title: "Sign in failed",
          description: "Could not process sign in response",
          variant: "destructive",
        });
      }
    };

    // Initialize Google Identity Services
    if (window.google) {
      google.accounts.id.initialize({
        client_id: "719838398388-of1a2utlbq9k66c2oe2ou398bas7cnb0.apps.googleusercontent.com",
        callback: window.handleCredentialResponse,
      });

      google.accounts.id.renderButton(
        document.getElementById("g_id_signin"),
        { theme: "outline", size: "large" }
      );
    }

    return () => {
      // Cleanup
      delete window.handleCredentialResponse;
    };
  }, [setLocation, toast]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">
              Welcome to WHO AWaRe Antibiotics Game
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div id="g_id_signin" className="flex justify-center"></div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}