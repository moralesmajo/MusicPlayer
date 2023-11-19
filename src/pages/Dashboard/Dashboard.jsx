import MusicBar from '../../components/Navbar/MusicBar';
import MobNavbar from '../../components/Navbar/MobNavbar';
import Sidebar from '../../components/Navbar/Sidebar';
import Button from '../../components/Buttons/Button';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function Home() {
  return (
    <div className="drawer lg:drawer-open bg-greenish-black">
      <input type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col max-h-screen">
        {/* Mobile navbar and music player bar */}
        <MobNavbar />
        <MusicBar />

        {/* Contenido*/}
        <main className="lg:flex-1 h-screen lg:h-full flex flex-col items-center imprima-400 text-white px-10 pt-10 pb-28 lg:p-10 gap-5 overflow-y-auto">
          <div className='flex lg:flex-row flex-col w-full imprima-700 lg:px-10 px-15 justify-between lg:items-center gap-4 pb-6'>
            <a className='text-2xl'>Hola, usuario</a>
            <SearchBar />
          </div>
          <div className='flex justify-start w-full lg:px-10 px-15 imprima-700'>
            <a className='text-2xl'>Canciones</a>
          </div>
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
          <Button />
        </main>
      </div>

      {/* Sidebar on web */}
      <Sidebar />
    </div>
  )
}