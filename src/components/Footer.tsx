



import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-50 p-8">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-5">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company Info</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">About Us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Carrier</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">We are hiring</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">About Us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Carrier</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">We are hiring</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Features</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Business Marketing</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">User Analytics</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Live Chat</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Unlimited Support</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">IOS & Android</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Watch a Demo</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Customers</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">API</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="flex space-x-2">
              <Input placeholder="Your Email" type="email" />
              <Button>Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground">Save time and boost productivity</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between space-y-4 border-t pt-8 md:flex-row md:space-y-0">
          <p className="text-sm text-muted-foreground">Made With Love By Finland All Right Reserved</p>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-pink-600 hover:text-pink-800">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-sky-500 hover:text-sky-700">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}