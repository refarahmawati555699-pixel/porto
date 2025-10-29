import Image from "next/image";

export default function Experience() {
  const experiences = [
    {
      title: "Juara 1 Lomba Stroy Telling",
      company: "SMA Negeri 1 Way Jepara",
      year: "2024",
      description:
        "Menampilkan sebuah karya story telling dengan mengangkat tema kepahlawanan yakni tokoh Ir.soekarno, hingga berhasil meraih juara 1 dalam ajang perlombaan DWIHARNAS (Dua Hari Nasional).",
      image: "/Refa2.jpg",
    },
    {
      title: "Volunteer Green Generation Indonesia",
      company: "GG Beraksi Lampung Timur",
      year: "2024",
      description:
        "Edukasi dan advokasi: Menyebarkan kesadaran lingkungan melalui sesi edukasi, seminar dan lokakarya.",
      image: "/Refa3.jpg",
    },
    {
      title: "Generasi Berencana",
      company: "GENRE Lampung Timur",
      year: "2024",
      description:
        "Berperan untuk membentuk generasi muda yang berkualitas, sehat, dan tangguh, serta mampu mengatasi berbagai tantangan dan permasalahan remaja. Contohnya seperti pencegahan pernikahan dini, pencegahan seks bebas(HIV/AIDS) dan pencegahan narkoba.",
      image: "/Refa4.jpg",
    },
    {
      title: "Ketua Kerohanian Islam",
      company: "SMA Negeri 1 Way Jepara",
      year: "2024-2025",
      description:
       "Menyusun rencana kerja tahunan dan program kegiatan. Menentukan tema-tema kajian, jadwal pertemuan, dan acara-acara besar seperti Mabit (Malam Bina Iman dan Taqwa) atau Liqo (kelompok diskusi kecil).",
      image: "/Refa5.jpg",
    },
    {
      title: "Humas",
      company: "Masa Pengenalan Lingkungan Sekolah (MPLS)",
      year: "2024",
      description: "Berperan sebagai jembatan komunikasi yang memastikan  semua informasi tersampaikan dengan jelas, akurat, dan transparan terkait pelaksanaan MPLS, mencakup jadwal, persyaratan, dan tujuan kegiatan yang perlu diketahui oleh calon siswa dan orang tua.",
      image: "/Refa6.jpg",
    },
    {
      title: "Sekretaris",
      company: "Masa Pengenalan Lingkungan Sekolah (MPLS)",
      year: "2025",
      description:"Bertanggung jawaab dalam mengelola proses pendaftaran peserta didik baru, termasuk verifikasi data, pencatatan, dan pembuatan daftar hadir.",
      image: "/Refa7.jpg",
    },
  ];

  return (
    <main className="p-6 md:p-10 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">Experience</h1>
      <p className="text-gray-600 mb-10 text-base md:text-lg">
        Berikut beberapa pengalaman saya ketika di SMA.
      </p>

      <div className="grid gap-8 max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center gap-6 bg-white shadow-lg rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition duration-300"
          >
            <Image
              src={exp.image}
              alt={exp.company}
              width={100}
              height={100}
              className="rounded-xl object-contain"
            />
            <div className="text-left">
              <h2 className="text-xl font-semibold text-gray-800">
                {exp.title}
              </h2>
              <p className="text-sm text-gray-500">
                {exp.company} • {exp.year}
              </p>
              <p className="mt-3 text-gray-700 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
