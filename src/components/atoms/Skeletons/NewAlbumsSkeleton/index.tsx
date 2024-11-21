import Button from "../../Button";
import Text from "../../Text";

export default function NewAlbumsSkeleton({ number }: { number: number }) {
  return (
    <section className="flex flex-col gap-5 animate-pulse">
      <div className="flex flex-col gap-5">
        <div className="grid md:grid-cols-4 xl:grid-cols-6 grid-cols-2 md:gap-3">
          {Array.from({ length: number }, (_, index) => (
            <div key={index} className="w-full aspect-square rounded-lg p-3">
              <div
                key={index}
                className="w-full aspect-square bg-gray-200 dark:bg-neutral-800 rounded-lg"
              />
              <div className="w-full mt-2">
                <Text
                  as="h3"
                  size="lg"
                  variant="muted"
                  className="font-semibold text-left"
                >
                  Name
                </Text>
                <Text
                  as="p"
                  size="sm"
                  variant="muted"
                  className="font-semibold text-left truncate"
                >
                  Artist
                </Text>
                <div className="flex justify-between">
                  <Text
                    as="p"
                    size="xs"
                    variant="muted"
                    className="text-right mt-2"
                  >
                    Date
                  </Text>
                  <Text
                    as="p"
                    size="xs"
                    variant="muted"
                    className="text-right mt-2"
                  >
                    Tracks
                  </Text>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-10 items-center">
          <Button name="Previous" size="md" disabled variant="outline">
            Previous
          </Button>
          <Text as="span" variant="muted" className="font-semibold">
            Loading
          </Text>
          <Button name="Next" size="md" disabled variant="outline">
            Next
          </Button>
        </div>
      </div>
    </section>
  );
}
