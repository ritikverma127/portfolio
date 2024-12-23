// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { MessageCircle } from "lucide-react";

// export default function Portfolio() {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
//       {/* Header */}
//       <header className="container mx-auto p-4 flex items-center justify-between">
//         <div className="font-bold text-xl">Mrstudio</div>
//         <nav className="hidden md:flex items-center gap-6">
//           <a href="#" className="text-gray-600 hover:text-gray-900">
//             Home
//           </a>
//           <a href="#" className="text-gray-600 hover:text-gray-900">
//             About Us
//           </a>
//           <a href="#" className="text-gray-600 hover:text-gray-900">
//             Services
//           </a>
//           <Button
//             variant="default"
//             className="bg-orange-500 hover:bg-orange-600"
//           >
//             Contact Us
//           </Button>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section className="container mx-auto px-4 py-12 md:py-24">
//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           <div className="space-y-6">
//             <h1 className="text-4xl md:text-5xl font-bold text-navy-900">
//               Hy! I Am
//               <br />
//               Brunao Dev
//             </h1>
//             <p className="text-gray-600">
//               Product designer and digital creative director working in design
//               field for 7 years so far, specialized user interface design.
//             </p>
//             <Button className="bg-orange-500 hover:bg-orange-600">
//               Hire Me
//             </Button>
//             <div className="flex items-center gap-4 pt-8">
//               <p className="font-medium">Work For All This Brand & Client</p>
//               <div className="flex -space-x-2">
//                 {[1, 2, 3, 4].map((i) => (
//                   <div
//                     key={i}
//                     className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="relative">
//             <Image
//               src="/placeholder.svg"
//               alt="Developer portrait"
//               width={500}
//               height={600}
//               className="rounded-lg"
//             />
//             <Badge className="absolute top-4 right-4 bg-white">
//               🏆 Best Design Awards
//             </Badge>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="container mx-auto px-4 py-16">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             <Card className="bg-white/80 backdrop-blur">
//               <CardContent className="p-6 flex items-start gap-4">
//                 <span className="text-3xl">👨‍💻</span>
//                 <div>
//                   <h3 className="font-bold mb-2">Developer</h3>
//                   <p className="text-gray-600">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//             <Card className="bg-white/80 backdrop-blur">
//               <CardContent className="p-6 flex items-start gap-4">
//                 <span className="text-3xl">🎨</span>
//                 <div>
//                   <h3 className="font-bold mb-2">UI/UX</h3>
//                   <p className="text-gray-600">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//             <Card className="bg-white/80 backdrop-blur">
//               <CardContent className="p-6 flex items-start gap-4">
//                 <span className="text-3xl">✨</span>
//                 <div>
//                   <h3 className="font-bold mb-2">Design</h3>
//                   <p className="text-gray-600">
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//           <div className="space-y-6">
//             <h2 className="text-3xl md:text-4xl font-bold">
//               My Awesome
//               <br />
//               <span className="text-orange-500">Services</span>
//             </h2>
//             <p className="text-gray-600">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
//               eiusmod tempor incididunt ut labore.
//             </p>
//             <Button variant="outline">Hire CV</Button>
//           </div>
//         </div>
//       </section>

//       {/* Recent Projects */}
//       <section className="container mx-auto px-4 py-16">
//         <h2 className="text-3xl font-bold text-center mb-12">Recent Project</h2>
//         <div className="grid md:grid-cols-3 gap-6">
//           {[
//             { title: "Lighthouse", image: "/placeholder.svg" },
//             { title: "Bryan Lane", image: "/placeholder.svg" },
//             { title: "Geometric", image: "/placeholder.svg" },
//           ].map((project, i) => (
//             <div key={i} className="relative group">
//               <Image
//                 src={project.image}
//                 alt={project.title}
//                 width={400}
//                 height={300}
//                 className="rounded-lg w-full object-cover transition-transform group-hover:scale-105"
//               />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="container mx-auto px-4 py-16">
//         <div className="flex flex-col md:flex-row items-center justify-between">
//           <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-0">
//             Ready To Get
//             <br />
//             Started?
//           </h2>
//           <div className="flex items-center gap-4">
//             <p className="text-gray-600">
//               You Know About Me, Let's Talk About You.
//             </p>
//             <Button className="bg-orange-500 hover:bg-orange-600">
//               <MessageCircle className="mr-2 h-4 w-4" />
//               SHOOT MESSAGE
//             </Button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
