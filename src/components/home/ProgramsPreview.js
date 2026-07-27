"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Scissors, Palette, Sparkles, ArrowRight } from "lucide-react";

const programs = [
  {
    id: "habillement",
    title: "Technique d'habillement",
    description: "Maîtrisez l'art de la confection artisanale et la didactique de la mode avec nos experts du domaine.",
    icon: Scissors,
    color: "bg-isam-blue",
    lightColor: "bg-isam-blue/10",
    textColor: "text-isam-blue"
  },
  {
    id: "modelisme",
    title: "Modélisme",
    description: "Développez vos compétences en design, management et stylisme pour créer les tendances de demain.",
    icon: Palette,
    color: "bg-isam-yellow",
    lightColor: "bg-isam-yellow/20",
    textColor: "text-yellow-600"
  },
  {
    id: "esthetique",
    title: "Coiffure et Esthétique",
    description: "Révélez la beauté à travers nos programmes spécialisés en soins esthétiques et coiffure professionnelle.",
    icon: Sparkles,
    color: "bg-isam-green",
    lightColor: "bg-isam-green/10",
    textColor: "text-isam-green"
  },
  {
    id: "coupe-couture",
    title: "Coupe et couture",
    description: "Apprenez le patronage sur mesure, la découpe de précision et le montage de vêtements haute finition.",
    icon: Scissors,
    color: "bg-purple-600",
    lightColor: "bg-purple-500/10",
    textColor: "text-purple-600"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ProgramsPreview() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-wider text-isam-blue mb-3">Nos Formations</h2>
          <h3 className="text-4xl font-serif font-bold text-foreground mb-6">
            Découvrez nos mentions et filières
          </h3>
          <p className="text-gray-600 text-lg">
            Des programmes académiques conçus pour répondre aux exigences de l'industrie créative et former des professionnels hautement qualifiés.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {programs.map((program) => {
            const Icon = program.icon;
            return (
              <motion.div 
                key={program.id}
                variants={item}
                className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Decorative background element */}
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full ${program.lightColor} -z-10 transition-transform duration-500 group-hover:scale-150`} />
                
                <div className={`w-16 h-16 rounded-2xl ${program.lightColor} ${program.textColor} flex items-center justify-center mb-8`}>
                  <Icon className="w-8 h-8" />
                </div>
                
                <h4 className="text-2xl font-bold font-serif mb-4 text-foreground">{program.title}</h4>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {program.description}
                </p>
                
                <Link 
                  href="/filiere"
                  className={`inline-flex items-center font-semibold ${program.textColor} hover:opacity-80 transition-opacity`}
                >
                  En savoir plus 
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
