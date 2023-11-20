
import MobNavbar from '../../components/Navbar/MobNavbar';
import MusicBar from '../../components/Navbar/MusicBar';
import Sidebar from '../../components/Navbar/Sidebar';

import Button from '../../components/Buttons/Button';
import PlaylistCard from '../../components/PlaylistCard/PlaylistCard';

export default function MyPlaylists() {
    return (
        <div className="drawer lg:drawer-open bg-greenish-black">
            <input type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col max-h-screen">
                {/* Mobile navbar and music player bar */}
                <MobNavbar />
                <MusicBar />

                {/* Contenido*/}
                <main className="lg:flex-1 h-screen lg:h-full flex flex-col items-center imprima-400 text-white px-10 pt-10 pb-28 lg:p-10 gap-5 overflow-y-auto scrollbar">
                    <div className='flex justify-start w-full lg:px-10 px-15 pb-5 imprima-700'>
                        <a className='text-2xl'>Mis playlists</a>
                    </div>
                    {/* Display of created playlists */}
                    <PlaylistCard />
                    
                </main>
            </div>

            {/* Sidebar on web */}
            <Sidebar />
        </div>
    )
}
