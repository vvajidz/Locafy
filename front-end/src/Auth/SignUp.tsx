"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/ui/dialog";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { Checkbox } from "@/ui/checkbox";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

export function SignUp() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    age: "",
    agree: false,
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleCheckbox = (checked: boolean) => {
    setFormData({ ...formData, agree: checked });
    if (checked) setError(""); // clear error when checked
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) {
      setError("You must agree to the terms & conditions.");
      return;
    }
    setError("");
    console.log("Form Data:", formData);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-200 hover:bg-emerald-600 hover:text-white w-full max-w-xs">
          SignUp
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-gray-800">
            Create an Account
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          {/* Firstname */}
          <div className="grid gap-2">
            <Label htmlFor="firstname">First Name</Label>
            <Input id="firstname" name="firstname" placeholder="Enter first name" value={formData.firstname} onChange={handleChange} required />
          </div>

          {/* Lastname */}
          <div className="grid gap-2">
            <Label htmlFor="lastname">Last Name</Label>
            <Input id="lastname" name="lastname" placeholder="Enter last name" value={formData.lastname} onChange={handleChange} required />
          </div>

          {/* Email */}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="example@email.com" value={formData.email} onChange={handleChange} required />
          </div>

          {/* Age */}
          <div className="grid gap-2">
            <Label htmlFor="age">Age</Label>
            <Input id="age" name="age" type="number" placeholder="Enter your age" value={formData.age} onChange={handleChange} required />
          </div>

          {/* Terms & Conditions */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" checked={formData.agree} onCheckedChange={handleCheckbox} />
              <Label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{" "}
                <a href="#" className="text-emerald-600 hover:underline">
                  terms & conditions
                </a>
              </Label>
            </div>
            {error && <span className="text-xs text-red-500">{error}</span>}
          </div>

          {/* Signup Button */}
          <Button type="submit" className="w-full bg-emerald-700 hover:bg-emerald-900 text-white">
            GET OTP
          </Button>

          {/* OR divider */}
          <div className="flex items-center gap-2 my-2">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="text-gray-500 text-sm">OR</span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          {/* Social Logins */}
          <div className="flex gap-3">
            <Button type="button" variant="outline" className="flex-1 flex items-center gap-2 border border-gray-300">
              <FaGoogle className="text-red-500" /> Google
            </Button>
            <Button type="button" variant="outline" className="flex-1 flex items-center gap-2 border border-gray-300">
              <FaFacebookF className="text-blue-600" /> Facebook
            </Button>
          </div>

          {/* Already have account link */}
          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-emerald-600 hover:underline">
              Log in
            </a>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
