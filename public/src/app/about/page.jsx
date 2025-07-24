// // app/about/page.tsx
// export default function AboutPage() {
//   return (
//     <main className="min-h-screen bg-[whitesmoke] p-8">
//       <div className="max-w-4xl mx-auto space-y-8">
//         <h1 className="text-4xl font-bold text-gray-800">About GhealsTech</h1>

//         <section>
//           <h2 className="text-2xl font-semibold text-gray-800 mb-2">Who We Are</h2>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             GhealsTech is a modern technology company focused on transforming ideas into powerful digital
//             solutions. From startups to enterprises, we partner with organizations of all sizes to build
//             products that create impact. With a core team of experienced developers, designers, and product
//             strategists, we craft solutions that solve real business challenges using the latest in
//             technology.
//           </p>
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             Our mission is to enable innovation through intelligent software. We aim to empower businesses
//             and individuals with tools that simplify workflows, enhance user experiences, and foster
//             digital transformation. Whether it’s building scalable web platforms or integrating AI-powered
//             tools, we strive to help our clients thrive in a rapidly changing world.
//           </p>
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold text-gray-800 mb-2">What We Do</h2>
//           <ul className="list-disc pl-5 text-lg text-gray-700 leading-relaxed space-y-2">
//             <li>Custom software development and consulting</li>
//             <li>AI integrations and intelligent automation</li>
//             <li>Web and mobile application development</li>
//             <li>UI/UX design and product strategy</li>
//             <li>Cloud-based infrastructure and DevOps support</li>
//           </ul>
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Values</h2>
//           <ul className="list-disc pl-5 text-lg text-gray-700 leading-relaxed space-y-2">
//             <li><strong>Innovation:</strong> We embrace cutting-edge technologies to deliver future-ready solutions.</li>
//             <li><strong>Integrity:</strong> Transparency, honesty, and trust are at the core of our work culture.</li>
//             <li><strong>Collaboration:</strong> We believe great things happen when talented people work together.</li>
//             <li><strong>Excellence:</strong> We are obsessed with quality and continually strive for improvement.</li>
//           </ul>
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Story</h2>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             GhealsTech started as a passion project among friends who believed technology could do more
//             than just solve problems — it could create opportunities. Since our founding, we’ve grown into
//             a globally distributed team working with clients across multiple industries including fintech,
//             healthtech, logistics, and education. Our journey has been one of learning, experimentation,
//             and relentless focus on delivering value.
//           </p>
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold text-gray-800 mb-2">Let’s Build Together</h2>
//           <p className="text-lg text-gray-700 leading-relaxed">
//             If you have a project in mind or simply want to explore what's possible, we’d love to hear
//             from you. Let’s collaborate and create something impactful.
//           </p>
//         </section>
//       </div>
//     </main>
//   );
// }

'use client';

import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[whitesmoke] p-8">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-purple-700">About GhealsTech</h1>

        {/* Who We Are */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-purple-600 mb-2">Who We Are</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              GhealsTech is a modern technology company focused on transforming ideas into powerful digital
              solutions. From startups to enterprises, we partner with organizations of all sizes to build
              products that create impact. With a core team of experienced developers, designers, and product
              strategists, we craft solutions that solve real business challenges using the latest technology.
            </p>
          </div>
          <Image
            src="/images/team.jpg"
            alt="GhealsTech team working together"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full h-auto"
          />
        </section>

        {/* Our Mission */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <Image
            src="/images/mission.jpg"
            alt="Innovation and technology concept"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full h-auto order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold text-purple-600 mb-2">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to enable innovation through intelligent software. We aim to empower businesses
              and individuals with tools that simplify workflows, enhance user experiences, and foster
              digital transformation. Whether it’s building scalable web platforms or integrating AI-powered
              tools, we help our clients thrive in a rapidly changing world.
            </p>
          </div>
        </section>

        {/* What We Do */}
        <section>
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">What We Do</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700 leading-relaxed space-y-2">
            <li>🔧 Custom software development and consulting</li>
            <li>🤖 AI integrations and intelligent automation</li>
            <li>🌐 Web and mobile application development</li>
            <li>🎨 UI/UX design and product strategy</li>
            <li>☁️ Cloud-based infrastructure and DevOps support</li>
          </ul>
        </section>

        {/* Our Values */}
        <section>
          <h2 className="text-2xl font-semibold text-purple-600 mb-2">Our Values</h2>
          <ul className="list-disc pl-5 text-lg text-gray-700 leading-relaxed space-y-2">
            <li><strong className="text-purple-700">Innovation:</strong> We embrace emerging technologies to create future-ready products.</li>
            <li><strong className="text-purple-700">Integrity:</strong> We operate with honesty, transparency, and accountability.</li>
            <li><strong className="text-purple-700">Collaboration:</strong> We build better when we build together.</li>
            <li><strong className="text-purple-700">Excellence:</strong> We strive for quality in every line of code and every user interaction.</li>
          </ul>
        </section>

        {/* Our Story */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-purple-600 mb-2">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              GhealsTech started as a passion project among friends who believed that technology could
              not only solve problems but create opportunities. Over the years, we’ve grown into a globally
              distributed team delivering top-tier software solutions across industries such as fintech,
              healthtech, logistics, and education.
            </p>
          </div>
          <Image
            src="/images/story.jpg"
            alt="Founders brainstorming in a startup office"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full h-auto"
          />
        </section>

        {/* Call to Action */}
        <section className="text-center mt-10">
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Let’s Build the Future Together</h2>
          <p className="text-lg text-gray-700 mb-4">
            Whether you’re looking to launch a product, solve a complex problem, or innovate with AI — GhealsTech is ready to partner with you.
          </p>
          <a
            href="/contact"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-xl shadow hover:bg-purple-700 transition duration-300"
          >
            Contact Us
          </a>
        </section>
      </div>
    </main>
  );
}

