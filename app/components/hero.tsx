import foto from "../syam.jpg";

export default function Hero() {
    return (
        <div className="text-center">
            <h1 className="text-gray-300 font-bold">CV Online</h1>
            <h2 className="text-3x1">Hisyam Irsyad Athallah</h2>
            <Profile />
            <p>
                Saya adalah mahasiswa semester 5, jurusan Sistem Informasi dari Universitas Ma'soem.
                Saya bercita-cita ingin menjadi orang yang bermanfaat aja.
            </p>
        </div>
    );
}

function Profile() {
    return <img src={foto.src} alt="Hisyam Irsyad Athallah" className="fotoku" />;
}