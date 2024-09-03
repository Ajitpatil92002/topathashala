import { useState, useEffect, useRef } from 'react'
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  BookOpen,
  ClipboardCheck,
  TestTube,
  DollarSign,
  Calendar,
  Home,
  Bus,
  Mail,
  UserCheck,
  Send,
  Download,
  ChevronRight,
  ChevronLeft,
  Users,
  BarChart
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from '@/lib/utils'
import Reviews from './reviews'
import Softwarecarousel from './carousel'

export default function LandingPage() {
  return (
    <div className="container mx-auto min-h-screen bg-gradient-to-r from-indigo-950 via-indigo-900 to-indigo-950 text-white">
      <div className={cn("absolute inset-0 opacity-50 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iIzE3MjU0YyI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyMCIgc3Ryb2tlPSIjMjIzYjdjIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiPjwvY2lyY2xlPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxMCIgc3Ryb2tlPSIjMjIzYjdjIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiPjwvY2lyY2xlPgo8L3N2Zz4=')]",)}></div>
      <div className="relative">
        <HeaderSection />
        <HeroSection />
        <Softwarecarousel />
        <FeaturesSection />
        <Reviews />
        {/* Partner Campuses Section */}
        {/* <section id="partners" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Our Partner Campuses</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['University A', 'College B', 'Institute C', 'School D'].map((partner, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-filter backdrop-blur-lg transform hover:scale-110 transition-all duration-300">
                <div className="w-32 h-16 flex items-center justify-center text-purple-400">{partner}</div>
              </div>
            ))}
          </div>
        </section> */}
        <QuerySection />
        <DownloadSection />
        <FAQ />
        <Footer />
      </div>
    </div>
  )
}

function HeaderSection() {
  return <header className="sticky top-0 backdrop-blur-sm z-50 container mx-auto px-8 py-6 flex justify-between items-center">
    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Topathshala</div>
    <nav className="hidden md:flex space-x-6">
      <Link href="#features" className="hover:text-purple-400 transition-colors duration-300">Features</Link>
      <Link href="#reviews" className="hover:text-purple-400 transition-colors duration-300">Reviews</Link>
      <Link href="#partners" className="hover:text-purple-400 transition-colors duration-300">Partners</Link>
      <Link href="#faq" className="hover:text-purple-400 transition-colors duration-300">FAQ</Link>
    </nav>
    <Button size={"sm"} className="bg-purple-500 hover:bg-purple-600 text-white transition-colors duration-300"> Book Demo</Button>
  </header>
}

function HeroSection() {
  return <section className="container mx-auto px-4 py-20 max-w-[1390px]">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Your one stop solution for
          <span className="text-blue-400 block mt-2 md:text-5xl lg:text-6xl">campus management</span>
        </h1>
        <div className="h-2 w-20 bg-blue-400 mb-6 rounded-md"></div>
        <p className="text-xl mb-8 text-blue-200">Streamline your educational institution with our comprehensive software suite</p>
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link href='/#query' className={cn(buttonVariants({ size: "lg" },), "bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300")}>
            Book Demo
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
        <div className="flex items-center">
          <Users className="h-8 w-8 text-blue-400 mr-2" />
          <p>Connect with staff and students</p>
        </div>
        <div className="flex items-center">
          <BookOpen className="h-8 w-8 text-blue-400 mr-2" />
          <p>Manage courses and curriculum</p>
        </div>
        <div className="flex items-center">
          <Calendar className="h-8 w-8 text-blue-400 mr-2" />
          <p>Schedule classes and events</p>
        </div>
        <div className="flex items-center">
          <BarChart className="h-8 w-8 text-blue-400 mr-2" />
          <p>Track performance and analytics</p>
        </div>
      </div>
    </div>
  </section>
}

function FeaturesSection() {
  return <section id="features" className="container mx-auto px-4 py-20">
    <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Powerful Features</h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { icon: <ClipboardCheck className="w-6 h-6 text-purple-400" />, title: "Attendance System", description: "Effortlessly track student and staff attendance with our advanced system." },
        { icon: <TestTube className="w-6 h-6 text-purple-400" />, title: "Online Test System", description: "Conduct objective and subjective tests with grace marks and detailed analytics." },
        { icon: <DollarSign className="w-6 h-6 text-purple-400" />, title: "Fee Management", description: "Manage fees on daily, monthly, and academic year basis with ease." },
        { icon: <Calendar className="w-6 h-6 text-purple-400" />, title: "Exam Management", description: "Record marks and generate timetables for seamless exam organization." },
        { icon: <BookOpen className="w-6 h-6 text-purple-400" />, title: "Class Timetable", description: "Create and manage class schedules efficiently." },
        { icon: <Home className="w-6 h-6 text-purple-400" />, title: "Hostel Management", description: "Streamline hostel operations and student accommodations." },
        { icon: <Bus className="w-6 h-6 text-purple-400" />, title: "Transport Management", description: "Track bus routes, pickup/drop timings, and attendance." },
        { icon: <Mail className="w-6 h-6 text-purple-400" />, title: "Communication System", description: "Send SMS and emails to students, parents, and staff." },
        { icon: <UserCheck className="w-6 h-6 text-purple-400" />, title: "HR Module", description: "Manage leave tracking, salary payroll, and staff information." },
      ].map((feature, index) => (
        <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-lg transform hover:scale-105 transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="bg-purple-900 p-3 rounded-full mr-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
          </div>
          <p className="text-gray-300">{feature.description}</p>
        </div>
      ))}
    </div>
  </section>
}

function QuerySection() {
  return <section id='query' className="container mx-auto px-4 py-20">
    <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Ask Us Anything</h2>
    <form className="max-w-lg mx-auto">
      <Input type="email" placeholder="Your Email" className="mb-4 bg-white bg-opacity-10 border-gray-600 text-white placeholder-gray-400" />
      <Textarea placeholder="Your Question" className="mb-4 bg-white bg-opacity-10 border-gray-600 text-white placeholder-gray-400" />
      <Button type="submit" className="w-full bg-purple-500 hover:bg-purple-600 text-white transition-colors duration-300">
        <Send className="w-4 h-4 mr-2" />
        Send Query
      </Button>
    </form>
  </section>

}

function DownloadSection() {
  return <section className="bg-indigo-900 bg-opacity-50 py-20">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Download Our App</h2>
      <p className="mb-8 text-gray-300">Get the Topathshala app for iOS and Android</p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button className="bg-purple-500 hover:bg-purple-600 text-white transition-colors duration-300 transform hover:scale-105">
          <Download className="w-4 h-4 mr-2" />
          iOS App
        </Button>
        <Button className="bg-purple-500 hover:bg-purple-600 text-white transition-colors duration-300 transform hover:scale-105">
          <Download className="w-4 h-4 mr-2" />
          Android App
        </Button>
      </div>
    </div>
  </section>
}

function FAQ() {
  return <section id="faq" className="container mx-auto px-4 py-20">
    <h2 className="text-3xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Frequently Asked Questions</h2>
    <Accordion type="single" collapsible className="max-w-2xl mx-auto">
      {[
        { question: "How does Topathshala benefit educational institutions?", answer: "Topathshala streamlines campus management by integrating various modules like attendance, exams, fees, and communication into a single platform, saving time and improving efficiency." },
        { question: "Is Topathshala suitable for all types of educational institutions?", answer: "Yes, Topathshala is designed to cater to various educational institutions including schools, colleges, and universities of different sizes." },
        { question: "Can Topathshala be customized to our specific needs?", answer: "We offer customization options to tailor the software to your institution's unique requirements." },
        { question: "How secure is the data stored in Topathshala?", answer: "We prioritize data security and use industry-standard encryption and security measures to protect all information stored in our system." },
      ].map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border-gray-700">
          <AccordionTrigger className="text-white hover:text-purple-400 transition-colors duration-300">{faq.question}</AccordionTrigger>
          <AccordionContent className="text-gray-300">{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </section>

}

function Footer() {
  return <footer className="bg-indigo-950 py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-purple-400">Topathshala</h3>
          <p className="text-gray-400">Empowering educational institutions with comprehensive campus management solutions.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-purple-400">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="#" className="hover:text-purple-400 transition-colors duration-300">Home</Link></li>
            <li><Link href="#features" className="hover:text-purple-400 transition-colors duration-300">Features</Link></li>
            <li><Link href="#reviews" className="hover:text-purple-400 transition-colors duration-300">Reviews</Link></li>
            <li><Link href="#faq" className="hover:text-purple-400 transition-colors duration-300">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-purple-400">Legal</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="#" className="hover:text-purple-400 transition-colors duration-300">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-purple-400 transition-colors duration-300">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-purple-400">Connect</h4>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></Link>
            <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg></Link>
            <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></Link>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Topathshala. All rights reserved.</p>
      </div>
    </div>
  </footer>
}