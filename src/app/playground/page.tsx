"use client"
import Button from "@/components/atoms/Button";
import LinkWithIcon from "@/components/atoms/LinkWithIcon";
import Text from "@/components/atoms/Text";
import ThemeToggle from "@/components/atoms/ThemeToggle";
import { HomeIcon } from "@heroicons/react/16/solid";

export default function Playground() {
  return (
    <div className="flex flex-col gap-3 max-w-screen-lg mx-auto p-10">
      <Text as="h1" size="4xl" variant="primary">
        This is the playground page to test components
      </Text>
      {/* toggle between light and dark mode */}
      <Text variant="secondary" className="mt-5">
        Toggle between light and dark mode
      </Text>
      <ThemeToggle />
      {/* button componentes  */}
      <Text variant="secondary" className="mt-5">
        Button components
      </Text>
      <Button>Button</Button>
      <Button variant="secondary" onClick={() => alert("I am a button")}>Click on me!</Button>
      {/* Link */}
      <Text variant="secondary" className="mt-5">
        Links
      </Text>

      <LinkWithIcon href="/home" icon={HomeIcon} >
        Home
      </LinkWithIcon>

      <LinkWithIcon href="/artists" icon={HomeIcon} active={false} >
        Artists
      </LinkWithIcon>


      {/* Artist card */}
      {/* <Text variant="secondary" className="mt-5">
        Artist card
      </Text>
      <div className="grid grid-cols-4">
        <ArtistCard imageUrl="https://i.scdn.co/image/ab67616d0000b273ed133ea8f343f0f451346a44" title="Jhayco" href="/home" />
        <ArtistCard imageUrl="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8460d200209e7bf0788a9649df" title="Mora" href="/home" />
      </div> */}

      {/* track card */}

      {/* <Text variant="secondary" className="mt-5">
        Track card
      </Text>

      <div className="grid grid-cols-4">
        <TrackCard imageUrl="https://i.scdn.co/image/ab67616d0000b273552837b3e37071cbf3c9dc53" title="No me conoce - Remix" href="/home" artist={"Jhayco"} duration={213242} />
        <TrackCard imageUrl="https://images.genius.com/0faa16aeea6a56d1c24dafdc152038fc.1000x1000x1.jpg" title="Primer dia de clases" href="/home" artist={"Mora"} duration={253244} />
      </div> */}


    </div>
  )
}