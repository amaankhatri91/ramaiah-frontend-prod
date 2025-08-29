import React from "react";
import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Media & Events", href: "/media-events" },
  { label: "Specialities", href: "/specialities" },
  { label: "International Care", href: "/international-care" },
  { label: "Career", href: "/career" },
  { label: "Contact Us", href: "/contact" },
  { label: "Blogs", href: "/blogs" },
];

const ClinicalServices = [
  { label: "Anesthesiology", href: "#" },
  { label: "Cardiology & Interventional Cardiology", href: "#" },
  { label: "Cardio-Thoracic Surgery", href: "#" },
  { label: "Critical Care", href: "#" },
  { label: "Dental and Maxillo Facial Surgery", href: "#" },
  { label: "Dermatology and Venereology", href: "#" },
  { label: "Emergency Medicine", href: "#" },
  { label: "Endocrinology", href: "#" },
  { label: "General Medicine", href: "#" },
  { label: "General Surgery", href: "#" },
  { label: "Medical Gastroenterology", href: "#" },
  { label: "Medical Oncology", href: "#" },
  { label: "Neonatology", href: "#" },
  { label: "Nephrology including Dialysis", href: "#" },
  { label: "Neurology", href: "#" },
  { label: "Neurosurgery", href: "#" },
  { label: "Nuclear Medicine", href: "#" },
  { label: "Obstetrics and Gynecology", href: "#" },
  { label: "Ophthalmology", href: "#" },
  { label: "Otorhinolaryngology", href: "#" },
  { label: "Orthopedic Surgery including Joint Replacement Surgery", href: "#" },
  { label: "Pediatrics", href: "#" },
  { label: "Pediatric Rheumatology", href: "#" },
  { label: "Pediatric Nephrology", href: "#" },
  { label: "Pediatric Surgery", href: "#" },
  { label: "Plastic and Reconstructive Surgery", href: "#" },
];

const ClinicalServicesMore = [
  { label: "Pulmonary and Critical Care Medicine", href: "#" },
  { label: "Psychiatry (Only OPD)", href: "#" },
  { label: "Rheumatology", href: "#" },
  { label: "Radiology & Interventional Radiology", href: "#" },
  { label: "Robotic Surgery", href: "#" },
  { label: "Radiotherapy", href: "#" },
  { label: "Respiratory Medicine", href: "#" },
  { label: "Sports Medicine", href: "#" },
  { label: "Surgical Gastroenterology", href: "#" },
  { label: "Surgical Oncology", href: "#" },
  { label: "Transplant Services (Bone Marrow, Liver, Kidney, Heart)", href: "#" },
  { label: "Urology", href: "#" },
  { label: "Vascular Surgery", href: "#" },
];

const centersOfExcellence = [
  { label: "Ramaiah Institute of Cardiac Sciences", href: "#" },
  { label: "Ramaiah Institute of Oncosciences", href: "#" },
  { label: "Ramaiah Institute of Nephro-Uro Sciences", href: "#" },
  { label: "Ramaiah Institute of Neuro Sciences", href: "#" },
  { label: "Ramaiah Institute of Gastro Enteric Sciences", href: "#" },
];

const diagnosticServices = [
  { label: "2D ECHO", href: "#" },
  { label: "Audiometry", href: "#" },
  { label: "Bone Densitometry", href: "#" },
  { label: "CT Scan (64-Slice & 128-Slice)", href: "#" },
  { label: "CT Angio (128-Slice)", href: "#" },
  { label: "Cath Lab", href: "#" },
  { label: "CPAP Titration Study", href: "#" },
  { label: "Complete and Limited Polysomnography (Sleep Study)", href: "#" },
  { label: "DLCO (Diffusion Lung Carbon Monoxide)", href: "#" },
  { label: "Doppler", href: "#" },
  { label: "EEG/Video EEG (Electroencephalogram)", href: "#" },
  { label: "EMG (Electromyography)", href: "#" },
  { label: "EP (Electrophysiology)", href: "#" },
  { label: "Endobronchial Ultrasound (EBUS)", href: "#" },
  { label: "Fiber Optic Bronchoscopy", href: "#" },
  { label: "Gamma Camera", href: "#" },
  { label: "Holter Monitoring", href: "#" },
  { label: "Head Up Tilt Table Test (HUTT)", href: "#" },
  { label: "LINAC", href: "#" },
  { label: "Lithotripsy", href: "#" },
  { label: "Mammography", href: "#" },
  { label: "MRI (Magnetic Resonance Imaging, 1.5 & 3 Tesla)", href: "#" },
  { label: "Nerve Conduction Study", href: "#" },
  { label: "PET Scan", href: "#" },
  { label: "Pulmonary Function Test", href: "#" },
  { label: "Spirometry", href: "#" },
  { label: "Tread Mill Testing", href: "#" },
  { label: "Thoracoscopy", href: "#" },
  { label: "Ultrasound", href: "#" },
  { label: "Urodynamic Studies", href: "#" },
  { label: "Uroflowmetry", href: "#" },
  { label: "X-Ray", href: "#" },
];

const laboratoryServices = [
  { label: "Clinical Pathology", href: "#" },
  { label: "Clinical Bio-Chemistry", href: "#" },
  { label: "Clinical Microbiology and Serology", href: "#" },
  { label: "Cytopathology", href: "#" },
  { label: "Hematology & Flow Cytometry", href: "#" },
  { label: "Histopathology", href: "#" },
  { label: "Immuno Hematology", href: "#" },
  { label: "Molecular Biology", href: "#" },
];

const transfusionServices = [
  { label: "Blood Bank", href: "#" },
  { label: "Blood Transfusion Services", href: "#" },
];

const alliedClinicalServices = [
  { label: "Psychology & Counselling", href: "#" },
  { label: "Physiotherapy & Rehabilitation", href: "#" },
  { label: "Dietetics & Nutrition", href: "#" },
  { label: "Speech and Language Therapy", href: "#" },
];

const supportServices = [
  { label: "Ambulance", href: "#" },
];

const socialLinks = [
  { icon: "/assets/facbookfoter.svg", alt: "Facebook", link: "#" },
  { icon: "/assets/instafooter.svg", alt: "insta", link: "#" },
  { icon: "/assets/linkdinfooter.svg", alt: "LinkedIn", link: "#" },
  { icon: "/assets/twittwer.svg", alt: "twiter", link: "#" },
  { icon: "/assets/youtube.svg", alt: "youtube", link: "#" },
];

const Footer = () => {
  return (
    <div className="min-[1200px]:mt-[50px] mt-[30px] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(60,4,34,0)_0%,#1F0011_100%)] opacity-75 z-0"></div>
      <footer className="w-full container text-white pt-10 pb-6 rounded-t-[40px] relative mt-10 ">
        <div className=" grid lg:grid-cols-[30%_70%] gap-10 relative z-10">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left: Logo, Contact and Centers of Excellence */}
            <div className="min-w-[260px] flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2 cursor-pointer">
              <Image
                src="/assets/footer.png"
                alt="Ramaiah Logo"
                width={204}
                height={85}
                className="w-[204px] h-[80px]"
              />
            </div>
            <div className="text-sm leading-relaxed">
              New BEL Rd, M S Ramaiah Nagar, MSRIT Post, Bengaluru, Karnataka
              560054
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Image
                src="/assets/envelope1.svg"
                alt="email"
                width={18}
                height={18}
                className="h-[18px] w-[18px]"
              />
              <a href="mailto:contact@msrmh.com" className="">
                contact@msrmh.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Image
                src="/assets/phone-call1.svg"
                alt="phone"
                width={18}
                height={18}
                className="h-[18px] w-[18px]"
              />
              <a href="tel:+918062153400" className="">
                +91 80 6215 3400
              </a>
            </div>
            <div className="flex gap-3 mt-3">
              {socialLinks.map((s, i) => (
                <Link
                  key={i}
                  href={s.link}
                  aria-label={s.alt}
                  className="no-underline hover:no-underline"
                >
                  <div className="h-[50px] w-[50px] bg-white rounded-full flex items-center justify-center">
                    <Image
                      src={s.icon}
                      alt={s.alt}
                      width={50}
                      height={50}
                      className="h-[24px] w-[24px] "
                    />
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="font-medium min-[1200px]:text-[22px] min-[800px]:text-[18px] text-[16px] mb-3">
                RMH Centers of Excellence
              </h3>
              <ul className="space-y-2 min-[1200px]:text-[14px] text-[13px] font-medium">
                {centersOfExcellence.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="hover:no-underline flex items-center gap-1">
                      <span className="text-lg">›</span> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Center: Quick Links */}
        

          </div>

          {/* Right Half */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-[7px]">
          <div className="flex-1 min-w-[220px]">
            <h3 className="font-medium min-[1200px]:text-[22px] min-[800px]:text-[18px] text-[16px] mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 min-[1200px]:text-[14px] text-[13px] font-medium">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:no-underline flex items-center gap-1"
                  >
                    <span className="text-lg">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-medium min-[1200px]:text-[22px] min-[800px]:text-[18px] text-[16px] mb-3 mt-4">
            Clinical Services
            </h3>
            <ul className="space-y-2 min-[1200px]:text-[14px] text-[13px] font-medium">
              {ClinicalServices.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:no-underline flex items-center gap-1"
                  >
                    <span className="text-lg">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
            <div>
              {/* <h3 className="font-medium min-[1200px]:text-[22px] min-[800px]:text-[18px] text-[16px] mb-3">
                Clinical Services
              </h3> */}
              <ul className="space-y-2 min-[1200px]:text-[14px] text-[13px] font-medium">
                {ClinicalServicesMore.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="hover:no-underline flex items-center gap-1">
                      <span className="text-lg">›</span> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="font-medium min-[1200px]:text-[22px] min-[800px]:text-[18px] text-[16px] mb-3 mt-5">
                Diagnostic Services
              </h3>
              <ul className="space-y-2 min-[1200px]:text-[14px] text-[13px] font-medium">
                {diagnosticServices.slice(0, 19).map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="hover:no-underline flex items-center gap-1">
                      <span className="text-lg">›</span> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="min-[1200px]:pt-[30px]">
                <ul className="space-y-2 min-[1200px]:text-[14px] text-[13px] font-medium">
                  {diagnosticServices.slice(19).map((link, i) => (
                    <li key={i}>
                      <Link href={link.href} className="hover:no-underline flex items-center gap-1">
                        <span className="text-lg">›</span> {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="font-medium min-[1200px]:text-[22px] min-[800px]:text-[18px] text-[16px] mb-3 mt-5">
                Laboratory Services
              </h3>
              <ul className="space-y-2 min-[1200px]:text-[14px] text-[13px] font-medium">
                {laboratoryServices.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="hover:no-underline flex items-center gap-1">
                      <span className="text-lg">›</span> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="font-medium min-[1200px]:text-[22px] min-[800px]:text-[18px] text-[16px] mb-3 mt-5">
                Transfusion Services
              </h3>
              <ul className="space-y-2 min-[1200px]:text-[14px] text-[13px] font-medium">
                {transfusionServices.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="hover:no-underline flex items-center gap-1">
                      <span className="text-lg">›</span> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="font-medium min-[1200px]:text-[22px] min-[800px]:text-[18px] text-[16px] mb-3 mt-5">
                Allied Clinical Services
              </h3>
              <ul className="space-y-2 min-[1200px]:text-[14px] text-[13px] font-medium">
                {alliedClinicalServices.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="hover:no-underline flex items-center gap-1">
                      <span className="text-lg">›</span> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <h3 className="font-medium min-[1200px]:text-[22px] min-[800px]:text-[18px] text-[16px] mb-3 mt-5">
                Support Services
              </h3>
              <ul className="space-y-2 min-[1200px]:text-[14px] text-[13px] font-medium">
                {supportServices.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="hover:no-underline flex items-center gap-1">
                      <span className="text-lg">›</span> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
        
      </footer>
    </div>
  );
};

export default Footer;
