
'use client';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 mt-[99px]">
      <Card className="w-full max-w-[380px] shadow-sm">
        <form onSubmit={handleLogin}>
          <CardHeader className="space-y-6 text-center">
            <h1 className="text-lg font-bold tracking-tight text-center">
              YOUR ACCOUNT FOR
              <br />
              EVERYTHING NIKE
            </h1>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Input
                id="email"
                type="email"
                placeholder="Email address"
                className="h-10 text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                id="password"
                type="password"
                placeholder="Password"
                className="h-10 text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label
                  htmlFor="remember"
                  className="text-xs text-gray-500 font-normal"
                >
                  Keep me signed in
                </Label>
              </div>
              <Link
                href="#"
                className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
              >
                Forgotten your password
              </Link>
            </div>
            <Button type="submit" className="w-full bg-black hover:bg-gray-900 text-xs h-10">
              SIGN IN
            </Button>
          </CardContent>
        </form>
      </Card>
    </div>
  );
}


