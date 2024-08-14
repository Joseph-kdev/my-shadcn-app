import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { AspectRatio } from "./components/ui/aspect-ratio";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { BriefcaseIcon, FolderClosedIcon, LayoutDashboardIcon, LogOutIcon, MenuIcon, ReceiptEuroIcon, SettingsIcon, UserIcon, UsersIcon } from "lucide-react";
import { Button } from "./components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
 


function ProductGallery() {
  
  const products = [
    {
      name: ' Air max 90 PREMIUM Curry',
      image: '/src/assets/Air-max.jpg',
    },
    {
      name: 'Air Jordan 1 High OG',
      image: '/src/assets/Air-1.jpg',
    },
    {
      name: 'Puma RSX Pink',
      image: '/src/assets/puma-rsx-pink.jpg',
    },
    {
      name: 'Air Force 1',
      image: '/src/assets/shoe.jpg',
    },
    {
      name: 'Nike SuperRep Go',
      image: '/src/assets/super.jpg',
    },
    {
      name: 'Air Jordan 12',
      image: '/src/assets/jordan-12.jpg',
    },
    {
      name: 'puma RSX Pink',
      image: '/src/assets/puma-rsx-pink.jpg',
    },
    {
      name: 'Air Force 1',
      image: '/src/assets/shoe.jpg',
    },
  ];
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-50">Trending Products:</h1>
      <Carousel 
        className="w-full max-w-[90%] md:max-w-[80%] lg:max-w-[80%]">
        <CarouselContent className="">
          {products.map((product, index) => (
            <CarouselItem key={index} className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3">
              <Card className="h-full">
                <div className="relative h-[300px]">
                  <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                  <CardContent className="absolute bottom-0 left-0 right-0 bg-white/70 p-4">
                    <CardTitle>{product.name}</CardTitle>
                  </CardContent>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
      </Carousel>
      </div>
    </div>
  )
}

function FAQpage() {
  const faqs = [
    {
      question: 'How does your AI SaaS platform work?',
      answer: 'Our AI SaaS platform leverages advanced machine learning algorithms to provide intelligent solutions for our customers. Users can access a wide range of features and tools to enhance their workflows and decision-making processes.'
    },
    {
      question: 'What kind of AI models does the platform support?',
      answer: 'The platform supports a variety of AI models, including natural language processing, computer vision, and predictive analytics. We are constantly expanding our AI capabilities to meet the evolving needs of our customers.'
    },
    {
      question: 'How secure is the data on your platform?',
      answer: 'Data security and privacy are our top priorities. We employ industry-leading encryption and access controls to ensure the confidentiality and integrity of our customers data. Our platform is regularly audited and certified to meet the highest security standards.'
    },
    {
      question: 'Do you offer any integration options?',
      answer: 'Yes, our AI SaaS platform integrates seamlessly with a wide range of business software and tools, including CRM, ERP, and project management systems. This allows our customers to easily incorporate our AI capabilities into their existing workflows.'
    },
  ];
  return (
    <>
      <div className="max-w-5xl mx-auto py-12">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-200">Frequently Asked Questions.</h2>
      <div className="md:flex gap-2">
      <div className="md:w-1/2 hidden md:block h-8 m-9">
          <img
            src="/src/assets/artAI.jpg"
            alt="AI Assistant"
            className="w-64 h-auto"
          />
        </div>
        <div className="md:w-1/2 text-gray-200">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <p>{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
    </>
  )
}

function VideoEmbed() {
  return (
    <AspectRatio ratio={16 / 9}>
    <iframe
      src="https://www.youtube.com/embed/AqmMx_JidGo?si=1A9BJFdRBaq5axwv"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full"
    />
  </AspectRatio>
  )
}
function BlogEmbed() {

  return (
    <>
    <div className="max-w-5xl mx-auto py-2 px-5">
    <h1 className="text-3xl font-bold my-4 text-gray-200">A glimpse into Shadcn/ui</h1>
    <p className="mb-8 text-gray-50">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Donec suscipit semper neque sed imperdiet. Suspendisse ac urna luctus, tincidunt mauris sit amet,
      fringilla enim. Etiam quis neque in leo sollicitudin maximus. Aenean at pulvinar elit. Morbi viverra quam 
      tempor nunc sollicitudin fringilla. Nullam malesuada vestibulum congue. Aliquam ac ante gravida, dapibus 
      ante nec, congue nisl. Maecenas orci purus, porttitor non enim non, ultrices faucibus est. Nullam vitae odio 
      fringilla, molestie ante ut, luctus ante. 
    </p>
      <VideoEmbed />
    <p className="text-gray-50 my-4">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
    </div>
    </>
  )

}

function SideBar() {
  return (
    <>
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost">
          <MenuIcon name="menu" className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[370px]">
        <SheetHeader>
          <SheetTitle>John Doe</SheetTitle>
          <SheetDescription>
            Project Manager
          </SheetDescription>
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem><LayoutDashboardIcon  className="h-6 w-6" /> <a href="#" className="px-4">Dashboard</a></CommandItem>
                <CommandItem><BriefcaseIcon className="h-6 w-6" /> <a href="#" className="px-4">Projects</a></CommandItem>
                <CommandItem><FolderClosedIcon  className="h-6 w-6" /> <a href="#" className="px-4">Tasks</a></CommandItem>
                <CommandItem><UsersIcon className="h-6 w-6" /> <a href="#" className="px-4">Team</a></CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem><UserIcon  className="h-6 w-6" /> <a href="#" className="px-4">Profile</a></CommandItem>
                <CommandItem><ReceiptEuroIcon className="h-6 w-6" /> <a href="#" className="px-4">Billing</a></CommandItem>
                <CommandItem><SettingsIcon className="w-6 h-6" /> <a href="#" className="px-4">Settings</a></CommandItem>
                <CommandItem><LogOutIcon className="w-6 h-6" /> <a href="#" className="px-4">Logout</a></CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  </>
  )
}

function Popup() {
  return (
    <>
            <Dialog>
      <DialogTrigger asChild>
        <Button className="mx-[50%]">Join in</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[455px] bg-blue-600">
      <Tabs defaultValue="Sign up" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2 bg-gray-700 text-gray-100">
        <TabsTrigger value="Sign up">Sign up</TabsTrigger>
        <TabsTrigger value="Sign in">Sign in</TabsTrigger>
      </TabsList>
      <TabsContent value="Sign up" className="space-y-4">
        <div className="space-y-2">
        <Label htmlFor="email">Your Name</Label>
        <Input placeholder="Name" />
        </div>
        <div className="space-y-1">
        <Label htmlFor="email">Your email address</Label>
        <Input placeholder="Email" />
        </div>
        <div className="space-y-1">
        <Label htmlFor="email">Build a password</Label>
        <Input placeholder="Password" type="password" />
        </div>
        <Button className="w-full my-4 bg-orange-600">Sign up</Button>
      </TabsContent>
      <TabsContent value="Sign in" className="space-y-4">
        <div className="space-y-2">
        <Label htmlFor="email">Your email address</Label>
        <Input placeholder="Email" />
        </div>
        <div className="space-y-1">          
        <Label htmlFor="email">Remember your password</Label>
        <Input placeholder="Password" type="password" />
        </div>
        <Button className="w-full my-4 bg-orange-600">Sign in</Button>
      </TabsContent>
    </Tabs>
      </DialogContent>
    </Dialog>
    </>
  )
}
function App() {
  return (
    <div className="bg-gray-600 h-screen">
      <Popup />
    </div>
  );
}


export default App
