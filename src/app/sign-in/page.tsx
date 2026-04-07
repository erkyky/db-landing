"use client";

import { SignInPage, Testimonial } from "@/components/ui/forms/sign-in";

const testimonials: Testimonial[] = [
  {
    avatarSrc: "https://randomuser.me/api/portraits/men/64.jpg",
    name: "Marcus Webb",
    handle: "Accredited Investor",
    text: "Deepblue has consistently delivered strong risk-adjusted returns across their real estate portfolio.",
  },
  {
    avatarSrc: "https://randomuser.me/api/portraits/women/57.jpg",
    name: "Sarah Chen",
    handle: "LP Partner",
    text: "Transparent reporting and a disciplined investment approach. Exactly what I look for in a GP.",
  },
  {
    avatarSrc: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "David Reeves",
    handle: "Family Office",
    text: "The team's deep expertise in real estate asset classes gives us confidence in every allocation.",
  },
];

export default function SignIn() {
  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Sign In submitted:", data);
  };

  const handleResetPassword = () => {
    console.log("Reset Password clicked");
  };

  return (
    <SignInPage
      heroImageSrc="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
      testimonials={testimonials}
      onSignIn={handleSignIn}
      onResetPassword={handleResetPassword}
    />
  );
}
