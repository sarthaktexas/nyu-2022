import Grid from '../components/grid'
import HeadObject from '../components/head'
import Letters from '../components/letters'

export default function Home() {
  return (
    <div className="">
      <HeadObject>
        {/* You can put extra tags in here, or leave it blank */}
      </HeadObject>
      <main>
        <section className="h-screen w-screen flex flex-row items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url("https://cloud-fvssvghkm-hack-club-bot.vercel.app/0sarthak-mountain.png")` }}>
          <h1 className="w-5/6 text-white text-3xl md:text-5xl lg:text-6xl">Hey, I’m Sarthak Mohanty.  I love designing and developing websites. I enjoy vintage and creative art pieces although I also enjoy innovation. At school, I’m a design editor for the school yearbook, and (even though I’m an art history student), I love playing with physical mediums like clay, gouache, plexiglass, and cardboard. Sometimes, I like to build things out of trash, wood, and metal and create fantastical objects in the cedar forest behind my house. After school, I work freelance with non-profits and local businesses.</h1>
        </section>
        <section className="min-h-screen w-screen flex flex-row items-center justify-center bg-white py-20">
          <Letters />
        </section>
        <section className="h-screen w-screen flex flex-col items-center justify-center bg-cover" style={{ backgroundImage: `url("https://cloud-5rb21w6ls-hack-club-bot.vercel.app/0mountain-utah.png")` }}>
          <h1 className="w-5/6 text-white text-3xl md:text-5xl lg:text-6xl">One of my biggest personality traits apart from being colorful (ya, black’s a color), is being outdoorsy*. For the past couple years, I’ve been exploring the outdoors and I draw most of my inspiration from the outside world and mother nature. This past summer, I took a trip on the California Zephyr and saw the entire country, and that, I think, was eye-opening and I never before that experience realized how diverse America was.</h1>
          <h1 className="w-5/6 text-white text-xl md:text-2xl lg:text-3xl mt-4">*oh yeah, I have a treehouse.</h1>
        </section>
        <section className="w-screen flex flex-row items-center justify-center bg-indigo-800">
          <a className="w-fitcontent text-3xl bg-indigo-700 text-white rounded-lg font-garamond py-2 px-4 my-5 hover:bg-indigo-600" href="/manifesto.pdf" target="_blank"><div className="pointer-events-none">Read my manifesto</div></a>
        </section>
        <section className="min-h-screen py-20 flex flex-col items-center justify-center bg-white">
          <div className="flex flex-row space-x-5 mb-5">
            <img src="https://github.com/sarthaktexas.png" alt="A picture of Sarthak Mohanty looking up and to the side as if staring at something spectacular" className="w-20 h-20 rounded-2xl" />
            <div className="flex flex-col justify-center">
              <p className="font-garamond text-3xl">Sarthak Mohanty</p>
              <p className="font-garamond text-2xl text-gray-500">Fireworks Retailer</p>
            </div>
          </div>
          <Grid />
        </section>
        <section className="w-screen flex flex-wrap gap-7 items-center justify-center bg-blue-800">
          <a className="w-fitcontent text-3xl bg-blue-700 text-white rounded-lg font-garamond py-2 px-4 my-5 hover:bg-blue-600" href="https://github.com/sarthaktexas/nyu" target="_blank">
            Github
          </a>
          <a className="w-fitcontent text-3xl bg-blue-700 text-white rounded-lg font-garamond py-2 px-4 my-5 hover:bg-blue-600" href="https://srtk.me" target="_blank">
            Personal Website
          </a>
        </section>
      </main>
    </div>
  )
}
