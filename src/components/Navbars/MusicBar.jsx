{/* Music player bar */}

function Navbar() {
  return (
    <section className="navbar bottom-0 lg:relative lg:top-0 z-50 btm-nav lg:navbar bg-light-black lg:bg-greenish-black lg:border-b lg:border-b-light-black">
      <div className="flex lg:flex-row flex-row-reverse text-white imprima-400">
        <a className="btn btn-ghost normal-case text-base">Music Player</a>
        <a className="btn btn-ghost normal-case text-base">Song Details</a>
      </div>
    </section>
  )
}

export default Navbar