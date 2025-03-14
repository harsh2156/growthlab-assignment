import Image from "next/image"

export default function OttPlatformSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Create an OTT platform for your media
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
            Get your videos or entire library on your website. Give your video repository a face with drag-and-drop UI
            that's elegant, simple, and organized. Wow your guests today.
          </p>
        </div>

        <div className="relative rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/assignment-image-four.jpg"
            alt="Media+ OTT Platform Interface"
            width={1200}
            height={675}
            className="w-full h-auto"
            style={{ objectPosition: "0 100%" }}
          />
        </div>
      </div>
    </section>
  )
}

